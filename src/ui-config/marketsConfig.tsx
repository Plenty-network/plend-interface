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
  arb_sepolia = 'arb_sepolia',
  polygon_amoy = 'polygon_amoy',
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
      LENDING_POOL_ADDRESS_PROVIDER: '0x5e580E0FF1981E7c916D6D9a036A8596E35fCE31'.toLowerCase(),
      LENDING_POOL: '0x837286C1d05735448F7d1942144eE98602206773',
      WALLET_BALANCE_PROVIDER: '0xAE0f454b171dA3C0e3B8a75c92A449964f90f7fd',
      UI_POOL_DATA_PROVIDER: '0xA69C04756c604b63514cBF13466eCE70a5BF755b',
      UI_INCENTIVE_DATA_PROVIDER: '0xdfe6cC78B0A1ed393246B9151c83036AD3e165b8',
      WETH_GATEWAY: '0x2ae2308F17667980582c6580556317EBdb61cc68',
    },
    faucetUrl: 'https://faucet.plend.finance/receiveFaucetTokens',
  },
  [CustomMarket.arb_sepolia]: {
    marketTitle: 'Arbitrum Sepolia',
    chainId: 421614, //ChainId.etherlink_testnet,
    v3: true,
    enabledFeatures: {
      liquiditySwap: false,
      collateralRepay: false,
      faucet: false,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0xfAF21dcB6185571128306B2ffAdef9600cF6E922',
      LENDING_POOL: '0xa8b69d6fE496554d0292D058aDd7DC858CA95E5F',
      WALLET_BALANCE_PROVIDER: '0xBAF39030C44Ef4E959aFb47F1B7820F562F4CC94',
      UI_POOL_DATA_PROVIDER: '0x9C937bf9377Cf90Eea5Dbe3aA2F101E286958509',
      UI_INCENTIVE_DATA_PROVIDER: '0xeFcDF7327c897812f2e09442a579Db942F2486ba',
      WETH_GATEWAY: '0xC947242338Eb580E2F8212586755F36D20449153',
    },
    faucetUrl: 'https://faucet.plend.finance/receiveFaucetTokens',
  },
  [CustomMarket.polygon_amoy]: {
    marketTitle: 'Polygon Amoy',
    chainId: 80002, //ChainId.etherlink_testnet,
    v3: true,
    enabledFeatures: {
      liquiditySwap: false,
      collateralRepay: false,
      faucet: false,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0xb764c672f31A83B3929845E737DB6F20928890C9',
      LENDING_POOL: '0x1fe68e15Ec31894501667129615117f5AA37fa68',
      WALLET_BALANCE_PROVIDER: '0x14D5EA200025011533cB5A5954Ab3e08116EddDC',
      UI_POOL_DATA_PROVIDER: '0x1b8A658e134883194A16c85622Ad35ceE14c46F8',
      UI_INCENTIVE_DATA_PROVIDER: '0x855FEEf492CA6Da186a4F4F98e9D5B8b689E7aAA',
      WETH_GATEWAY: '0x56130f7f03600FC86aa3c49C72d7e3C7C3b3394E',
    },
    faucetUrl: 'https://faucet.plend.finance/receiveFaucetTokens',
  },
} as const;
