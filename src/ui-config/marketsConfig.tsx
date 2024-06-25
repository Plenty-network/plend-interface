import { ReactNode } from 'react';

import { ChainId } from './networksConfig';

// Enable for premissioned market
// import { PermissionView } from 'src/components/transactions/FlowCommons/PermissionView';

export type MarketDataType = {
  v3?: boolean;
  marketTitle: string;
  // the network the market operates on
  chainId: ChainId;
  enabledFeatures?: {
    liquiditySwap?: boolean;
    staking?: boolean;
    governance?: boolean;
    faucet?: boolean;
    collateralRepay?: boolean;
    incentives?: boolean;
    permissions?: boolean;
  };
  isFork?: boolean;
  permissionComponent?: ReactNode;
  disableCharts?: boolean;
  addresses: {
    LENDING_POOL_ADDRESS_PROVIDER: string;
    LENDING_POOL: string;
    WETH_GATEWAY?: string;
    SWAP_COLLATERAL_ADAPTER?: string;
    REPAY_WITH_COLLATERAL_ADAPTER?: string;
    FAUCET?: string;
    PERMISSION_MANAGER?: string;
    WALLET_BALANCE_PROVIDER: string;
    L2_ENCODER?: string;
    UI_POOL_DATA_PROVIDER: string;
    UI_INCENTIVE_DATA_PROVIDER?: string;
    COLLECTOR?: string;
    CHAINLOG?: string;
    SAVINGS_DAI?: string;
    V3_MIGRATOR?: string;
    LEVERAGE?: string;
    WRAPPED_TOKEN?: string;
  };
  faucetUrl: string;
  /**
   * https://www.hal.xyz/ has integrated aave for healtfactor warning notification
   * the integration doesn't follow aave market naming & only supports a subset of markets.
   * When a halIntegration is specified a link to hal will be displayed on the ui.
   */
  halIntegration?: {
    URL: string;
    marketName: string;
  };
};

export enum CustomMarket {
  etherlink_testnet = 'etherlink_testnet',
}

export const marketsData: {
  [key in keyof typeof CustomMarket]: MarketDataType;
} = {
  [CustomMarket.etherlink_testnet]: {
    marketTitle: 'Etherlink Testnet',
    chainId: 128123, //ChainId.etherlink_testnet,
    v3: true,
    enabledFeatures: {
      liquiditySwap: false,
      collateralRepay: false,
      faucet: false,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0x8780b9f46123A151f8325E0bEE5e8B977DEFf1FA'.toLowerCase(),
      LENDING_POOL: '0xB3a5e66cF7Fd00C14E6DC9f57E4200BDd4d5ba8b',
      WALLET_BALANCE_PROVIDER: '0xaD66495fBb102Bb5420326C20F92592a1bddf0d9',
      UI_POOL_DATA_PROVIDER: '0x6A71659daBd47de688d5bD7eb18F7F599900c9a3',
      UI_INCENTIVE_DATA_PROVIDER: '0x65374686E598ae4AA22E2E4780436C029EEc6E3b',
      WETH_GATEWAY: '0xD9bf48dde1b08A6e13AA1b6F9E5Ac943898021E3',
      LEVERAGE: '0x00398eB80CD3090fbCfad86B162d875Ac2AC5035',
      WRAPPED_TOKEN: '0xc2ef9495272b43f5257b35a1b6dda78932839871',
    },
    faucetUrl: 'https://faucet.plend.finance/receiveFaucetTokens',
  },
} as const;
