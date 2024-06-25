import { Trans } from '@lingui/macro';
import { Button } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { BigNumber, constants, Contract, providers } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import { useState } from 'react';
import { useAssetCaps } from 'src/hooks/useAssetCaps';
import { useModalContext } from 'src/hooks/useModal';
import { useProtocolDataContext } from 'src/hooks/useProtocolDataContext';
import { DashboardReserve } from 'src/utils/dashboardSortUtils';

import { CapsHint } from '../../../../components/caps/CapsHint';
import { CapType } from '../../../../components/caps/helper';
import { Link, ROUTES } from '../../../../components/primitives/Link';
import { useAppDataContext } from '../../../../hooks/app-data-provider/useAppDataProvider';
import { useWeb3Context } from '../../../../libs/hooks/useWeb3Context';
import { marketsData } from '../../../../ui-config/marketsConfig';
import {
  CreditDelegationTokenABI,
  ICreditDelegationToken,
} from '../../../../utils/contracts/CreditDelegationToken';
import { Leverage, LeverageABI } from '../../../../utils/contracts/Leverage';
import { availableMarkets } from '../../../../utils/marketsAndNetworksConfig';
import { SpkAirdropNoteInline } from '../BorrowAssetsList/BorrowAssetsListItem';
import { ListAPRColumn } from '../ListAPRColumn';
import { ListButtonsColumn } from '../ListButtonsColumn';
import { ListItemWrapper } from '../ListItemWrapper';
import { ListValueColumn } from '../ListValueColumn';

export const SupplyAssetsListItem = ({
  symbol,
  iconSymbol,
  name,
  walletBalance,
  walletBalanceUSD,
  supplyCap,
  totalLiquidity,
  supplyAPY,
  aIncentivesData,
  underlyingAsset,
  isActive,
  isFreezed,
  detailsAddress,
  showSwap,
  hideSupply,
}: DashboardReserve) => {
  const { reserves } = useAppDataContext();
  const { library: provider } = useWeb3React<providers.Web3Provider>();
  const { currentAccount } = useWeb3Context();
  const { currentMarket } = useProtocolDataContext();
  const { openSupply, openPSMSwap } = useModalContext();
  const [isLooping, setIsLooping] = useState(false);

  // Hide the asset to prevent it from being supplied if supply cap has been reached
  const { supplyCap: supplyCapUsage } = useAssetCaps();
  if (supplyCapUsage.isMaxed) return null;

  const doLoopingAction = async () => {
    try {
      setIsLooping(true);
      const currentMarketData = marketsData[availableMarkets[0]];
      const signer = provider?.getSigner(currentAccount);
      const interestRateMode = 2;
      const leverageInstance = new Contract(
        currentMarketData.addresses.LEVERAGE!,
        LeverageABI,
        signer
      ) as Leverage;
      // looping
      const debtTokenAddress = reserves.filter(
        (item) =>
          item.underlyingAsset.toLowerCase() ===
          currentMarketData.addresses.WRAPPED_TOKEN?.toLowerCase()
      )[0].variableDebtTokenAddress;
      const debtTokenInstance = new Contract(
        debtTokenAddress,
        CreditDelegationTokenABI,
        signer
      ) as ICreditDelegationToken;

      const delegationAmount = await debtTokenInstance.borrowAllowance(
        currentAccount,
        currentMarketData.addresses.LEVERAGE!
      );
      console.log('delegation amount ', delegationAmount, delegationAmount.toString());
      if (delegationAmount.eq(BigNumber.from('0'))) {
        const txn = await debtTokenInstance.approveDelegation(
          currentMarketData.addresses.LEVERAGE!,
          constants.MaxUint256.toString()
        );
        await txn.wait(1);
        console.log(txn);
      }

      const loopCount = 5;
      const borrowRatio = 8000; // 80%

      const loopingTxn = await leverageInstance.loop(loopCount, borrowRatio, interestRateMode, 0, {
        value: parseEther('1'),
      });

      await loopingTxn.wait(1);
      console.log(loopingTxn);

      // unlooping
      // const aTokenAddress = reserves.filter((item) => item.symbol === 'wstXTZ')[0].aTokenAddress;
      // const aTokenInstance = new Contract(aTokenAddress, ERC20ABI, signer) as ERC20;

      // const approvalAmt = await aTokenInstance.allowance(
      //   currentAccount,
      //   currentMarketData.addresses.LEVERAGE!
      // );
      // if (approvalAmt.eq(BigNumber.from('0'))) {
      //   const aTokenTx = await aTokenInstance.approve(
      //     currentMarketData.addresses.LEVERAGE!,
      //     constants.MaxUint256.toString()
      //   );
      //   await aTokenTx.wait(2);
      //   console.log(aTokenTx);
      // }

      // const unloop = await leverageInstance.unLoop(
      //   BigNumber.from(parseEther('1')),
      //   currentAccount,
      //   interestRateMode
      // );
      // await unloop.wait(1);
      // console.log(unloop);
    } catch (error) {
      console.error('Error in doing the looping action', error);
    }
    setIsLooping(false);
  };

  return (
    <ListItemWrapper
      symbol={symbol}
      iconSymbol={iconSymbol}
      name={name}
      detailsAddress={detailsAddress}
      data-cy={`dashboardSupplyListItem_${symbol.toUpperCase()}`}
      currentMarket={currentMarket}
      showDebtCeilingTooltips
    >
      <ListValueColumn
        symbol={symbol}
        value={Number(walletBalance)}
        subValue={walletBalanceUSD}
        withTooltip={false}
        disabled={Number(walletBalance) === 0}
        capsComponent={
          <CapsHint
            capType={CapType.supplyCap}
            capAmount={supplyCap}
            totalAmount={totalLiquidity}
            withoutText
          />
        }
      />

      <ListAPRColumn value={Number(supplyAPY)} incentives={aIncentivesData} symbol={symbol}>
        {(symbol === 'ETH' || symbol === 'WETH') && <SpkAirdropNoteInline tokenAmount={6} />}
      </ListAPRColumn>

      <ListButtonsColumn>
        {!hideSupply && (
          <Button
            sx={(theme) => ({
              color: theme.palette.common.white,
              background: '#4caf50',
              '&:hover, &.Mui-focusVisible': {
                background: '#8bc34a',
              },
            })}
            disabled={!isActive || isFreezed || Number(walletBalance) <= 0}
            variant="contained"
            onClick={() => openSupply(underlyingAsset)}
          >
            <Trans>Deposit</Trans>
          </Button>
        )}
        {!hideSupply && symbol === 'XTZ' && (
          <Button
            sx={(theme) => ({
              color: theme.palette.common.white,
              background: '#4caf50',
              '&:hover, &.Mui-focusVisible': {
                background: '#8bc34a',
              },
            })}
            disabled={!isActive || isFreezed || Number(walletBalance) <= 0 || isLooping}
            variant="contained"
            onClick={() => doLoopingAction()}
          >
            <Trans>Loop</Trans>
          </Button>
        )}
        {showSwap && (
          <Button variant="contained" onClick={() => openPSMSwap(underlyingAsset)}>
            <Trans>Swap</Trans>
          </Button>
        )}
        {!(showSwap && !hideSupply) && (
          <Button
            variant="outlined"
            component={Link}
            href={ROUTES.reserveOverview(detailsAddress, currentMarket)}
          >
            <Trans>Details</Trans>
          </Button>
        )}
      </ListButtonsColumn>
    </ListItemWrapper>
  );
};
