import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { Event, EventFilter } from 'ethers';

export interface TypedEvent<TArgsArray extends Array<any> = any, TArgsObject = any> extends Event {
  args: TArgsArray & TArgsObject;
}

export interface TypedEventFilter<_TEvent extends TypedEvent> extends EventFilter {}

export interface TypedListener<TEvent extends TypedEvent> {
  (...listenerArg: [...__TypechainArgsArray<TEvent>, TEvent]): void;
}

type __TypechainArgsArray<T> = T extends TypedEvent<infer U> ? U : never;

export interface OnEvent<TRes> {
  <TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
    listener: TypedListener<TEvent>
  ): TRes;
  (eventName: string, listener: Listener): TRes;
}

export type MinEthersFactory<C, ARGS> = {
  deploy(...a: ARGS[]): Promise<C>;
};

export type GetContractTypeFromFactory<F> = F extends MinEthersFactory<infer C, any> ? C : never;

export type GetARGsTypeFromFactory<F> = F extends MinEthersFactory<any, any>
  ? Parameters<F['deploy']>
  : never;

export type PromiseOrValue<T> = T | Promise<T>;

export interface PortalSendInterface extends utils.Interface {
  functions: {
    'aavePool()': FunctionFragment;
    'addAssets(string,address[],address[])': FunctionFragment;
    'addChainData(string,uint256,address,address[],address[])': FunctionFragment;
    'bridgeTokens(string,address,address,uint256,uint256)': FunctionFragment;
    'customHandlersMap(string)': FunctionFragment;
    'deleteChainData(string)': FunctionFragment;
    'modifyAavePool(address)': FunctionFragment;
    'modifyChainData(string,uint256,address)': FunctionFragment;
    'modifyOwner(address)': FunctionFragment;
    'modifySpokePool(address)': FunctionFragment;
    'originChainId()': FunctionFragment;
    'owner()': FunctionFragment;
    'removeAssets(string,address[])': FunctionFragment;
    'sourceChainName()': FunctionFragment;
    'spokePool()': FunctionFragment;
    'withdraw()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'aavePool'
      | 'addAssets'
      | 'addChainData'
      | 'bridgeTokens'
      | 'customHandlersMap'
      | 'deleteChainData'
      | 'modifyAavePool'
      | 'modifyChainData'
      | 'modifyOwner'
      | 'modifySpokePool'
      | 'originChainId'
      | 'owner'
      | 'removeAssets'
      | 'sourceChainName'
      | 'spokePool'
      | 'withdraw'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'aavePool', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'addAssets',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[], PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'addChainData',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'bridgeTokens',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'customHandlersMap', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'deleteChainData', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'modifyAavePool', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'modifyChainData',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'modifyOwner', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'modifySpokePool', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'originChainId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'removeAssets',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(functionFragment: 'sourceChainName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'spokePool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'aavePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addAssets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addChainData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bridgeTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'customHandlersMap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deleteChainData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'modifyAavePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'modifyChainData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'modifyOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'modifySpokePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'originChainId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeAssets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sourceChainName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'spokePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

//   events: {
//     'PbReceiveEvent(uint16,uint16,address,address,address,uint256,bytes)': EventFragment;
//     'PbSendEvent(uint256,uint256,address,address,address,uint256,bytes)': EventFragment;
//     'AddressEmptyCode(address)': EventFragment;
//     'AddressInsufficientBalance(address)': EventFragment;
//     'FailedInnerCall()': EventFragment;
//     'SafeERC20FailedOperation(address)': EventFragment;
//   };

//   getEvent(nameOrSignatureOrTopic: 'PbReceiveEvent'): EventFragment;
//   getEvent(nameOrSignatureOrTopic: 'PbSendEvent'): EventFragment;
//   getEvent(nameOrSignatureOrTopic: 'AddressEmptyCode'): EventFragment;
//   getEvent(nameOrSignatureOrTopic: 'AddressInsufficientBalance'): EventFragment;
//   getEvent(nameOrSignatureOrTopic: 'FailedInnerCall'): EventFragment;
//   getEvent(nameOrSignatureOrTopic: 'SafeERC20FailedOperation'): EventFragment;
}

export interface PortalSend extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PortalSendInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    aavePool(overrides?: CallOverrides): Promise<[string]>;

    addAssets(
      chainName: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      aAssets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addChainData(
      chainName: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      handler: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      aAssets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bridgeTokens(
      destinationChainName: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _totalRelayFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    customHandlersMap(
      chainName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    deleteChainData(
      chainName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    modifyAavePool(
      _aavePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    modifyChainData(
      chainName: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      handler: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    modifyOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    modifySpokePool(
      _spokePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    originChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeAssets(
      chainName: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sourceChainName(overrides?: CallOverrides): Promise<[string]>;

    spokePool(overrides?: CallOverrides): Promise<[string]>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;
  };

  aavePool(overrides?: CallOverrides): Promise<string>;

  addAssets(
    chainName: PromiseOrValue<string>,
    assets: PromiseOrValue<string>[],
    aAssets: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addChainData(
    chainName: PromiseOrValue<string>,
    chainId: PromiseOrValue<BigNumberish>,
    handler: PromiseOrValue<string>,
    assets: PromiseOrValue<string>[],
    aAssets: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bridgeTokens(
    destinationChainName: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _totalRelayFees: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  customHandlersMap(
    chainName: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string]>;

  deleteChainData(
    chainName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  modifyAavePool(
    _aavePool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  modifyChainData(
    chainName: PromiseOrValue<string>,
    chainId: PromiseOrValue<BigNumberish>,
    handler: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  modifyOwner(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  modifySpokePool(
    _spokePool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  originChainId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAssets(
    chainName: PromiseOrValue<string>,
    assets: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sourceChainName(overrides?: CallOverrides): Promise<string>;

  spokePool(overrides?: CallOverrides): Promise<string>;

  withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  callStatic: {
    aavePool(overrides?: CallOverrides): Promise<string>;

    addAssets(
      chainName: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      aAssets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    addChainData(
      chainName: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      handler: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      aAssets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    bridgeTokens(
      destinationChainName: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _totalRelayFees: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    customHandlersMap(
      chainName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    deleteChainData(chainName: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    modifyAavePool(_aavePool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    modifyChainData(
      chainName: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      handler: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    modifyOwner(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    modifySpokePool(_spokePool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    originChainId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAssets(
      chainName: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    sourceChainName(overrides?: CallOverrides): Promise<string>;

    spokePool(overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

//   filters: {
//     'PbReceiveEvent(uint16,uint16,address,address,address,uint256,bytes)': EventFragment;
//     'PbSendEvent(uint256,uint256,address,address,address,uint256,bytes)': EventFragment;
//     'AddressEmptyCode(address)': EventFragment;
//     'AddressInsufficientBalance(address)': EventFragment;
//     'FailedInnerCall()': EventFragment;
//     'SafeERC20FailedOperation(address)': EventFragment;
//   };

  estimateGas: {
    aavePool(overrides?: CallOverrides): Promise<BigNumber>;

    addAssets(
      chainName: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      aAssets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addChainData(
      chainName: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      handler: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      aAssets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bridgeTokens(
      destinationChainName: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _totalRelayFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    customHandlersMap(chainName: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    deleteChainData(
      chainName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    modifyAavePool(
      _aavePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    modifyChainData(
      chainName: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      handler: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    modifyOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    modifySpokePool(
      _spokePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    originChainId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAssets(
      chainName: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sourceChainName(overrides?: CallOverrides): Promise<BigNumber>;

    spokePool(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    aavePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAssets(
      chainName: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      aAssets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

        addChainData(
      chainName: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      handler: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      aAssets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bridgeTokens(
      destinationChainName: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _totalRelayFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    customHandlersMap(
      chainName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deleteChainData(
      chainName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    modifyAavePool(
      _aavePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    modifyChainData(
      chainName: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      handler: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    modifyOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    modifySpokePool(
      _spokePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    originChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAssets(
      chainName: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sourceChainName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    spokePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

export const PortalSendABI = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_originChainId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_aavePool',
        type: 'address',
        internalType: 'address payable',
      },
      {
        name: '_spokePool',
        type: 'address',
        internalType: 'address payable',
      },
      {
        name: '_sourceChainName',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'aavePool',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address payable',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'addAssets',
    inputs: [
      {
        name: 'chainName',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'assets',
        type: 'address[]',
        internalType: 'address[]',
      },
      {
        name: 'aAssets',
        type: 'address[]',
        internalType: 'address[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'addChainData',
    inputs: [
      {
        name: 'chainName',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'chainId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'handler',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'assets',
        type: 'address[]',
        internalType: 'address[]',
      },
      {
        name: 'aAssets',
        type: 'address[]',
        internalType: 'address[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'bridgeTokens',
    inputs: [
      {
        name: 'destinationChainName',
        type: 'string',
        internalType: 'string',
      },
      {
        name: '_recipient',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_asset',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_amount',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_totalRelayFees',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'customHandlersMap',
    inputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    outputs: [
      {
        name: 'destinationChainId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'customHandler',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'deleteChainData',
    inputs: [
      {
        name: 'chainName',
        type: 'string',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'modifyAavePool',
    inputs: [
      {
        name: '_aavePool',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'modifyChainData',
    inputs: [
      {
        name: 'chainName',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'chainId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'handler',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'modifyOwner',
    inputs: [
      {
        name: '_newOwner',
        type: 'address',
        internalType: 'address payable',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'modifySpokePool',
    inputs: [
      {
        name: '_spokePool',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'originChainId',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'owner',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address payable',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'removeAssets',
    inputs: [
      {
        name: 'chainName',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'assets',
        type: 'address[]',
        internalType: 'address[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'sourceChainName',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'spokePool',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address payable',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'withdraw',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'PbReceiveEvent',
    inputs: [
      {
        name: 'destinationChainId',
        type: 'uint16',
        indexed: false,
        internalType: 'uint16',
      },
      {
        name: 'originChainId',
        type: 'uint16',
        indexed: false,
        internalType: 'uint16',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'recipient',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'asset',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'data',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'PbSendEvent',
    inputs: [
      {
        name: 'destinationChainId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'originChainId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'recipient',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'asset',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'data',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AddressEmptyCode',
    inputs: [
      {
        name: 'target',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'AddressInsufficientBalance',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'FailedInnerCall',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SafeERC20FailedOperation',
    inputs: [
      {
        name: 'token',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
];
