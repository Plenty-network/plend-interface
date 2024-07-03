import { Trans } from '@lingui/macro';
import { Button } from '@mui/material';
import { useAppDataContext } from 'src/hooks/app-data-provider/useAppDataProvider';
import { useAssetCaps } from 'src/hooks/useAssetCaps';
import { useModalContext } from 'src/hooks/useModal';
import { DashboardReserve } from 'src/utils/dashboardSortUtils';

import { ListColumn } from '../../../../components/lists/ListColumn';
import { useProtocolDataContext } from '../../../../hooks/useProtocolDataContext';
import { isFeatureEnabled } from '../../../../utils/marketsAndNetworksConfig';
import { SpkAirdropNoteInline } from '../BorrowAssetsList/BorrowAssetsListItem';
import { ListAPRColumn } from '../ListAPRColumn';
import { ListButtonsColumn } from '../ListButtonsColumn';
import { ListItemUsedAsCollateral } from '../ListItemUsedAsCollateral';
import { ListItemWrapper } from '../ListItemWrapper';
import { ListValueColumn } from '../ListValueColumn';
import { useWeb3React } from '@web3-react/core';
import { BigNumber, constants, Contract, providers } from 'ethers';
import { useWeb3Context } from 'src/libs/hooks/useWeb3Context';
import { PortalSend, PortalSendABI } from '../../../../utils/contracts/PortalSend';
import { ERC20, ERC20ABI } from '../../../../utils/contracts/ERC20';
import { ChainId } from 'src/ui-config/networksConfig';

export const SuppliedPositionsListItem = ({
  reserve,
  underlyingBalance,
  underlyingBalanceUSD,
  usageAsCollateralEnabledOnUser,
  underlyingAsset,
}: DashboardReserve) => {
  const { user } = useAppDataContext();
  const { isIsolated, aIncentivesData, isFrozen, isActive } = reserve;
  const { currentMarketData, currentMarket } = useProtocolDataContext();
  const { openSupply, openWithdraw, openCollateralChange, openSwap } = useModalContext();
  const { debtCeiling } = useAssetCaps();
  const isSwapButton = isFeatureEnabled.liquiditySwap(currentMarketData);
  const { library: provider } = useWeb3React<providers.Web3Provider>();
  const { currentAccount } = useWeb3Context();
  const { reserves } = useAppDataContext();

  const canBeEnabledAsCollateral =
    !debtCeiling.isMaxed &&
    reserve.reserveLiquidationThreshold !== '0' &&
    ((!reserve.isIsolated && !user.isInIsolationMode) ||
      user.isolatedReserve?.underlyingAsset === reserve.underlyingAsset ||
      (reserve.isIsolated && user.totalCollateralMarketReferenceCurrency === '0'));

  const doPortalSend = async (underlyingAsset: string) => {
    console.log("underlyingAsset", underlyingAsset);
    const portalSender = currentMarketData.addresses.PORTAL_SENDER;
    console.log("portalSender", portalSender);
    const signer = provider?.getSigner(currentAccount);
    const portalSendContract = new Contract(
      portalSender!,
      PortalSendABI,
      signer
    ) as PortalSend;

    const aTokenAddress = reserves.filter((item) => item.symbol === 'WETH')[0].aTokenAddress;
    const asset_address = reserves.filter((item) => item.symbol === 'WETH')[0].underlyingAsset;

    console.log("aTokenAddress", aTokenAddress);
    console.log("asset_address", asset_address);

    const aTokenInstance = new Contract(aTokenAddress, ERC20ABI, signer) as ERC20;


    const approvalAmt = await aTokenInstance.allowance(
      currentAccount,
      portalSender!
    );

    // console.log("approvalAmt", approvalAmt);
    if (approvalAmt.eq(BigNumber.from('0'))) {
      console.log("approvalAmt is 0");
      const aTokenTx = await aTokenInstance.approve(
        portalSender!,
        constants.MaxUint256.toString()
      );
      await aTokenTx.wait(1);
      // console.log(aTokenTx);
    }



    const sendAmount = 0.01 * Math.pow(10, 18);
    const relayFees = 0.000001 * Math.pow(10, 18);

    // console.log("sendAmount", sendAmount);
    // console.log("relayFees", relayFees);

    // log all params
    // console.log("ChainId", currentMarketData.chainId === ChainId.amoy ?
    //   "Arbitrum" : "Amoy");
    // console.log("asset_address", asset_address);
    // console.log("sendAmount", sendAmount.toString());
    // console.log("relayFees", relayFees.toString());
    // console.log("currentAccount", currentAccount);

    const tx = await portalSendContract.bridgeTokens(
      currentMarketData.chainId === ChainId.amoy ?
        "Arbitrum" : "Amoy",
      currentAccount,
      asset_address.trim(),
      sendAmount.toString(),
      relayFees.toString(),
    );

    console.log("tx", tx);

    await tx.wait(1);
    console.log(tx);

    // const portalSend = getPortalSend(underlyingAsset);
    // portalSend.withdraw();
  }

  return (
    <ListItemWrapper
      symbol={reserve.symbol}
      iconSymbol={reserve.iconSymbol}
      name={reserve.name}
      detailsAddress={underlyingAsset}
      currentMarket={currentMarket}
      frozen={reserve.isFrozen}
      data-cy={`dashboardSuppliedListItem_${reserve.symbol.toUpperCase()}_${canBeEnabledAsCollateral && usageAsCollateralEnabledOnUser ? 'Collateral' : 'NoCollateral'
        }`}
      showSupplyCapTooltips
      showDebtCeilingTooltips
    >
      <ListValueColumn
        symbol={reserve.iconSymbol}
        value={Number(underlyingBalance)}
        subValue={Number(underlyingBalanceUSD)}
        disabled={Number(underlyingBalance) === 0}
      />

      <ListAPRColumn
        value={Number(reserve.supplyAPY)}
        incentives={aIncentivesData}
        symbol={reserve.symbol}
      >
        {reserve.symbol === 'ETH' && <SpkAirdropNoteInline tokenAmount={6} />}
      </ListAPRColumn>

      <ListColumn>
        <ListItemUsedAsCollateral
          isIsolated={isIsolated}
          usageAsCollateralEnabledOnUser={usageAsCollateralEnabledOnUser}
          canBeEnabledAsCollateral={canBeEnabledAsCollateral}
          onToggleSwitch={() => openCollateralChange(underlyingAsset)}
          data-cy={`collateralStatus`}
        />
      </ListColumn>

      <ListButtonsColumn>
        <Button
          disabled={!isActive}
          variant="contained"
          onClick={() => openWithdraw(underlyingAsset)}
        >
          <Trans>Withdraw</Trans>
        </Button>

        {(reserve.symbol === 'ETH' || reserve.symbol === 'WETH') && (
          <Button
            disabled={!isActive || isFrozen}
            variant="outlined"
            onClick={() => doPortalSend(underlyingAsset)}
            data-cy={`swapButton`}
          >
            <Trans>Move</Trans>
          </Button>
        )}

        {isSwapButton ? (
          <Button
            disabled={!isActive || isFrozen}
            variant="outlined"
            onClick={() => openSwap(underlyingAsset)}
            data-cy={`swapButton`}
          >
            <Trans>Swap</Trans>
          </Button>
        ) : (
          <Button
            disabled={!isActive || isFrozen}
            variant="outlined"
            onClick={() => openSupply(underlyingAsset)}
          >
            <Trans>Deposit</Trans>
          </Button>
        )}
      </ListButtonsColumn>
    </ListItemWrapper>
  );
};
