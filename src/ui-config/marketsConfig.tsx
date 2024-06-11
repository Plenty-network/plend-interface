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
      LENDING_POOL_ADDRESS_PROVIDER: '0x7f36C4d3c9Ed38A47f811ed92f02D1a05434a949'.toLowerCase(),
      LENDING_POOL: '0x3cF9B455ffA217c1Ac413cb3CB188a937471F26E',
      WALLET_BALANCE_PROVIDER: '0x6F9e7A5dad56E49Eb3E8d9b2E9433CB08Ac075Da',
      UI_POOL_DATA_PROVIDER: '0x2C8a7bfe1Af70110c0f7a4Bf0AfC66863d423fF7',
      UI_INCENTIVE_DATA_PROVIDER: '0x827Cf1Fc0470a4cf562B37CA7280782D92354Cca',
      WETH_GATEWAY: '0x2979Dc0452E6E4d9D7175E4668De3e38e881ec67',
    },
    faucetUrl: 'https://faucet.plend.finance/receiveFaucetTokens',
  },
} as const;
