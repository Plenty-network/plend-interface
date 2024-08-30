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
  etherlink = 'etherlink',
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
      LENDING_POOL_ADDRESS_PROVIDER: '0x124834E658E37255CfB7f30206683B5C5078B0Cc'.toLowerCase(),
      LENDING_POOL: '0xB0462c142FE3dEEDA33C6Dad2528C509A009136D',
      WALLET_BALANCE_PROVIDER: '0x2143Cc5C199321b442D5eEC2687947B182536482',
      UI_POOL_DATA_PROVIDER: '0x68847Cb5f83f958BBEC56f80C3D9b84001d8D487',
      UI_INCENTIVE_DATA_PROVIDER: '0x9aed80ddDd6fd4d137F6e503eF04e173d5695dBA',
      WETH_GATEWAY: '0xaAD875F5115Bb4705909468539067398156170cF',
      COLLECTOR: '0x250fB04547404729D22Eb8f9C498Da13E9980f2D',
    },
    faucetUrl: 'https://faucet.etherlink.com',
    },
    [CustomMarket.etherlink]: {
      marketTitle: 'Etherlink',
      chainId: 42793, //ChainId.etherlink,
      v3: true,
      enabledFeatures: {
        liquiditySwap: false,
        collateralRepay: false,
        faucet: false,
      },
      addresses: {
        LENDING_POOL_ADDRESS_PROVIDER: '0x33cf76bcff795d3C3522B9EF539c10877D3C32dE'.toLowerCase(),
        LENDING_POOL: '0xb12Ec57a854C2D6beE878ac803d84624f525226A',
        WALLET_BALANCE_PROVIDER: '0xAB6e6CbCeA13870c809B93e1134747c0239c9B75',
        UI_POOL_DATA_PROVIDER: '0xa412ab4428c6E5543661e463987485121a898943',
        UI_INCENTIVE_DATA_PROVIDER: '0x8d254ECDb2FF209e00771A006814D5D74fbFf28C',
        WETH_GATEWAY: '0x0d2304c30Fca9781dF8a4DC06A44f3f7c475dD1A',
        COLLECTOR: '0x78466b9DC7023Ad14b955dCDf8BffD2888BCfcF0',
      },
      faucetUrl: 'https://faucet.etherlink.com',
  },
} as const;