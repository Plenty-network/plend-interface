export type ExplorerLinkBuilderProps = {
  tx?: string;
  address?: string;
};

export type ExplorerLinkBuilderConfig = {
  baseUrl: string;
  addressPrefix?: string;
  txPrefix?: string;
};

export type NetworkConfig = {
  name: string;
  privateJsonRPCUrl?: string; // private rpc will be used for rpc queries inside the client. normally has private api key and better rate
  privateJsonRPCWSUrl?: string;
  publicJsonRPCUrl: readonly string[]; // public rpc used if not private found, and used to add specific network to wallets if user don't have them. Normally with slow rates
  publicJsonRPCWSUrl?: string;
  // protocolDataUrl: string;
  // https://github.com/aave/aave-api
  ratesHistoryApiUrl?: string;
  // cachingServerUrl?: string;
  // cachingWSServerUrl?: string;
  baseUniswapAdapter?: string;
  /**
   * When this is set withdrawals will automatically be unwrapped
   */
  wrappedBaseAssetSymbol?: string;
  baseAssetSymbol: string;
  // needed for configuring the chain on metemask when it doesn't exist yet
  baseAssetDecimals: number;
  // usdMarket?: boolean;
  // function returning a link to etherscan et al
  explorerLink: string;
  explorerLinkBuilder: (props: ExplorerLinkBuilderProps) => string;
  // set this to show faucets and similar
  isTestnet?: boolean;
  // get's automatically populated on fork networks
  isFork?: boolean;
  networkLogoPath: string;
  // contains the forked off chainId
  underlyingChainId?: number;
  bridge?: {
    icon: string;
    name: string;
    url: string;
  };
};

export type BaseNetworkConfig = Omit<NetworkConfig, 'explorerLinkBuilder'>;

export enum ChainId {
  mainnet = 1,
  etherlink_testnet = 128123,
  etherlink = 42793,
}

export const ChainIdToNetwork: Record<number, string> = {
  1: 'mainnet',
  128123: 'etherlink_testnet',
  42793: 'etherlink',
};

export const networkConfigs: Record<string, BaseNetworkConfig> = {
  [ChainId.mainnet]: {
    name: 'Ethereum',
    // privateJsonRPCUrl: 'https://eth-mainnet.gateway.pokt.network/v1/lb/62b3314e123e6f00397f19ca',
    publicJsonRPCUrl: [
      'https://rpc.ankr.com/eth',
      'https://rpc.flashbots.net',
      'https://eth-mainnet.public.blastapi.io',
      'https://cloudflare-eth.com/v1/mainnet',
    ],
    publicJsonRPCWSUrl: 'wss://eth-mainnet.alchemyapi.io/v2/demo',
    // cachingServerUrl: 'https://cache-api-1.aave.com/graphql',
    // cachingWSServerUrl: 'wss://cache-api-1.aave.com/graphql',
    // protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
    baseUniswapAdapter: '0xc3efa200a60883a96ffe3d5b492b121d6e9a1f3f',
    baseAssetSymbol: 'ETH',
    wrappedBaseAssetSymbol: 'WETH',
    baseAssetDecimals: 18,
    explorerLink: 'https://etherscan.io',
    //ratesHistoryApiUrl: 'https://aave-api-v2.aave.com/data/rates-history',
    networkLogoPath: '/icons/networks/ethereum.svg',
  },
  [ChainId.etherlink_testnet]: {
    name: 'Etherlink Testnet',
    publicJsonRPCUrl: [
      'https://node.ghostnet.etherlink.com',
    ],
    baseUniswapAdapter: '0x0',
    baseAssetSymbol: 'XTZ',
    wrappedBaseAssetSymbol: 'WXTZ',
    baseAssetDecimals: 18,
    explorerLink: 'https://testnet.explorer.etherlink.com',
    isTestnet: true,
    networkLogoPath: '/icons/networks/etherlink.svg',
  },
  [ChainId.etherlink]: {
    name: 'Etherlink',
    publicJsonRPCUrl: [
      'https://rpc.superlend.xyz',
      'https://plend-etherlink-mainnet-djs2w.zeeve.net/TuychDxGCScIED1nCk0m/rpc',
      'https://node.mainnet.etherlink.com'
    ],
    baseUniswapAdapter: '0x0',
    baseAssetSymbol: 'XTZ',
    wrappedBaseAssetSymbol: 'WXTZ',
    baseAssetDecimals: 18,
    explorerLink: 'https://explorer.etherlink.com',
    isTestnet: false,
    networkLogoPath: '/icons/networks/etherlink.svg',
  },
} as const;
