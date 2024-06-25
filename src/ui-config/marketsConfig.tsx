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
      LENDING_POOL_ADDRESS_PROVIDER: '0xB58cF2e8BBBE691f27f96eA32F54A21E7F75fD0C'.toLowerCase(),
      LENDING_POOL: '0x717E0e99E4c71d896804bD2cF0532d3112ffd5D5',
      WALLET_BALANCE_PROVIDER: '0x6B92955469e184F1eeF5567748f6F12D608bB698',
      UI_POOL_DATA_PROVIDER: '0x325C2184D59bcB687eb777fd5FbB192fb8dD6CEB',
      UI_INCENTIVE_DATA_PROVIDER: '0x65374686E598ae4AA22E2E4780436C029EEc6E3b',
      WETH_GATEWAY: '0xB39537551422D916e6B0013Ef7Dd257D07a17FE3',
      LEVERAGE: '0xd4864b20bfA721c7201E53E6AF52b1c3498EB5E6',
      WRAPPED_TOKEN: '0xc2ef9495272b43f5257b35a1b6dda78932839871',
    },
    faucetUrl: 'https://faucet.plend.finance/receiveFaucetTokens',
  },
} as const;
