import { InterestRate } from '@aave/contract-helpers';
import { Trans } from '@lingui/macro';
import { Button } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { BigNumber, constants, Contract, providers } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useModalContext } from 'src/hooks/useModal';
import { useProtocolDataContext } from 'src/hooks/useProtocolDataContext';
import { DashboardReserve } from 'src/utils/dashboardSortUtils';

import { useAppDataContext } from '../../../../hooks/app-data-provider/useAppDataProvider';
import { useWeb3Context } from '../../../../libs/hooks/useWeb3Context';
import { marketsData } from '../../../../ui-config/marketsConfig';
import { ERC20, ERC20ABI } from '../../../../utils/contracts/ERC20';
import { Leverage, LeverageABI } from '../../../../utils/contracts/Leverage';
import { availableMarkets } from '../../../../utils/marketsAndNetworksConfig';
import { SpkAirdropNoteInline } from '../BorrowAssetsList/BorrowAssetsListItem';
import { ListAPRColumn } from '../ListAPRColumn';
import { ListButtonsColumn } from '../ListButtonsColumn';
import { ListItemWrapper } from '../ListItemWrapper';
import { ListValueColumn } from '../ListValueColumn';

export const BorrowedPositionsListItem = ({
  reserve,
  variableBorrows,
  variableBorrowsUSD,
  stableBorrows,
  stableBorrowsUSD,
  borrowRateMode,
  stableBorrowAPY,
}: DashboardReserve) => {
  const { reserves } = useAppDataContext();
  const { openBorrow, openRepay } = useModalContext();
  const { currentMarket } = useProtocolDataContext();
  const [isUnlooping, setIsUnlooping] = useState(false);
  const { library: provider } = useWeb3React<providers.Web3Provider>();
  const { currentAccount } = useWeb3Context();
  const router = useRouter();

  const { isActive, isFrozen, sIncentivesData, vIncentivesData, variableBorrowAPY } = reserve;

  const handleUnloopingAction = async () => {
    try {
      setIsUnlooping(true);
      const currentMarketData = marketsData[availableMarkets[0]];
      const signer = provider?.getSigner(currentAccount);
      const interestRateMode = 2;
      const leverageInstance = new Contract(
        currentMarketData.addresses.LEVERAGE!,
        LeverageABI,
        signer
      ) as Leverage;
      // unlooping;
      const aTokenAddress = reserves.filter((item) => item.symbol === 'wstXTZ')[0].aTokenAddress;
      const aTokenInstance = new Contract(aTokenAddress, ERC20ABI, signer) as ERC20;

      const approvalAmt = await aTokenInstance.allowance(
        currentAccount,
        currentMarketData.addresses.LEVERAGE!
      );
      if (approvalAmt.eq(BigNumber.from('0'))) {
        const aTokenTx = await aTokenInstance.approve(
          currentMarketData.addresses.LEVERAGE!,
          constants.MaxUint256.toString()
        );
        await aTokenTx.wait(2);
        console.log(aTokenTx);
      }

      const unloop = await leverageInstance.unLoop(
        BigNumber.from(parseEther('1')),
        currentAccount,
        interestRateMode
      );
      console.log(unloop);
      await unloop.wait(2);

      router.reload();
    } catch (error) {
      console.error('Error in doing the un looping action', error);
    }
    setIsUnlooping(false);
  };

  return (
    <ListItemWrapper
      symbol={reserve.symbol}
      iconSymbol={reserve.iconSymbol}
      name={reserve.name}
      detailsAddress={reserve.underlyingAsset}
      currentMarket={currentMarket}
      frozen={reserve.isFrozen}
      borrowEnabled={reserve.borrowingEnabled}
      data-cy={`dashboardBorrowedListItem_${reserve.symbol.toUpperCase()}_${borrowRateMode}`}
      showBorrowCapTooltips
    >
      <ListValueColumn
        symbol={reserve.symbol}
        value={Number(borrowRateMode === InterestRate.Variable ? variableBorrows : stableBorrows)}
        subValue={Number(
          borrowRateMode === InterestRate.Variable ? variableBorrowsUSD : stableBorrowsUSD
        )}
      />

      <ListAPRColumn
        value={Number(
          borrowRateMode === InterestRate.Variable ? variableBorrowAPY : stableBorrowAPY
        )}
        incentives={borrowRateMode === InterestRate.Variable ? vIncentivesData : sIncentivesData}
        symbol={reserve.symbol}
        tooltip={
          reserve.symbol === 'DAI' ? (
            <Trans>
              This rate is set by MakerDAO Governance and will not change based on usage unless
              Maker needs to reclaim capital.
            </Trans>
          ) : null
        }
      >
        {reserve.symbol === 'DAI' && <SpkAirdropNoteInline tokenAmount={24} />}
      </ListAPRColumn>

      <ListButtonsColumn>
        <Button
          disabled={true}
          // !isActive}
          variant="contained"
          onClick={() => openRepay(reserve.underlyingAsset, borrowRateMode, isFrozen)}
        >
          <Trans>Repay</Trans>
        </Button>
        <Button
          disabled={!isActive || isUnlooping}
          variant="contained"
          onClick={() => handleUnloopingAction()}
        >
          <Trans>Unloop</Trans>
        </Button>
        <Button
          disabled={true}
          // !isActive || !borrowingEnabled || isFrozen || borrowCap.isMaxed}
          variant="outlined"
          onClick={() => openBorrow(reserve.underlyingAsset)}
        >
          <Trans>Borrow</Trans>
        </Button>
      </ListButtonsColumn>
    </ListItemWrapper>
  );
};
