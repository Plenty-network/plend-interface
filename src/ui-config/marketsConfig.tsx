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
      LENDING_POOL_ADDRESS_PROVIDER: '0x171A93836687ceE2892c7185B03391187a3f5a55'.toLowerCase(),
      LENDING_POOL: '0x9a9fA5B9F1b98585235D040cb30BfFd3734A5d9b',
      WALLET_BALANCE_PROVIDER: '0x6cAec669dB4C5f548A147B50c01f85696F71Ecbb',
      UI_POOL_DATA_PROVIDER: '0x93E1497Bf67e89C9a7bdB6128cc98533B8627637',
      UI_INCENTIVE_DATA_PROVIDER: '0xdf56fB6a781413D6Bd8309C7a630A4d57bC74c44',
      WETH_GATEWAY: '0xb92A8614C5463948D75401910f84D7E8bA076140',
      COLLECTOR: '0x250fB04547404729D22Eb8f9C498Da13E9980f2D',
    },
    faucetUrl: 'https://faucet.etherlink.com',
  },
} as const;
