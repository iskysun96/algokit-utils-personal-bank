/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^7
 */
import { type AlgorandClient } from '@algorandfoundation/algokit-utils/types/algorand-client'
import { ABIReturn, AppReturn, SendAppTransactionResult } from '@algorandfoundation/algokit-utils/types/app'
import { Arc56Contract, getArc56ReturnValue, getABIStructFromABITuple } from '@algorandfoundation/algokit-utils/types/app-arc56'
import {
  AppClient as _AppClient,
  AppClientMethodCallParams,
  AppClientParams,
  AppClientBareCallParams,
  CallOnComplete,
  AppClientCompilationParams,
  ResolveAppClientByCreatorAndName,
  ResolveAppClientByNetwork,
  CloneAppClientParams,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppFactory as _AppFactory, AppFactoryAppClientParams, AppFactoryResolveAppClientByCreatorAndNameParams, AppFactoryDeployParams, AppFactoryParams, CreateSchema } from '@algorandfoundation/algokit-utils/types/app-factory'
import { TransactionComposer, AppCallMethodCall, AppMethodCallTransactionArgument, SimulateOptions, RawSimulateOptions, SkipSignaturesSimulateOptions } from '@algorandfoundation/algokit-utils/types/composer'
import { SendParams, SendSingleTransactionResult, SendAtomicTransactionComposerResults } from '@algorandfoundation/algokit-utils/types/transaction'
import { Address, encodeAddress, modelsv2, OnApplicationComplete, Transaction, TransactionSigner } from 'algosdk'
import SimulateResponse = modelsv2.SimulateResponse

export const APP_SPEC: Arc56Contract = {"name":"PersonalBank","structs":{},"methods":[{"name":"deposit","args":[{"type":"pay","name":"pay_txn"}],"returns":{"type":"uint64"},"actions":{"create":[],"call":["NoOp"]},"readonly":false,"events":[],"recommendations":{}},{"name":"withdraw","args":[],"returns":{"type":"uint64"},"actions":{"create":[],"call":["NoOp"]},"readonly":false,"events":[],"recommendations":{}}],"arcs":[22,28],"networks":{},"state":{"schema":{"global":{"ints":0,"bytes":0},"local":{"ints":0,"bytes":0}},"keys":{"global":{},"local":{},"box":{}},"maps":{"global":{},"local":{},"box":{"depositors":{"keyType":"AVMBytes","valueType":"AVMUint64","prefix":""}}}},"bareActions":{"create":["NoOp"],"call":[]},"sourceInfo":{"approval":{"sourceInfo":[{"pc":[111],"errorMessage":"Deposit amount must be greater than zero"},{"pc":[162],"errorMessage":"No deposits found for this account"},{"pc":[43,60],"errorMessage":"OnCompletion is not NoOp"},{"pc":[105],"errorMessage":"Receiver must be the contract address"},{"pc":[92],"errorMessage":"can only call when creating"},{"pc":[46,63],"errorMessage":"can only call when not creating"},{"pc":[130,142],"errorMessage":"check self.depositors entry exists"},{"pc":[73],"errorMessage":"transaction type is pay"}],"pcOffsetMethod":"none"},"clear":{"sourceInfo":[],"pcOffsetMethod":"none"}},"source":{"approval":"I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBzbWFydF9jb250cmFjdHMucGVyc29uYWxfYmFuay5jb250cmFjdC5QZXJzb25hbEJhbmsuX19hbGdvcHlfZW50cnlwb2ludF93aXRoX2luaXQoKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMSAwCiAgICBieXRlY2Jsb2NrIDB4MTUxZjdjNzUKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9wZXJzb25hbF9iYW5rL2NvbnRyYWN0LnB5OjUKICAgIC8vIGNsYXNzIFBlcnNvbmFsQmFuayhBUkM0Q29udHJhY3QpOgogICAgdHhuIE51bUFwcEFyZ3MKICAgIGJ6IG1haW5fYmFyZV9yb3V0aW5nQDcKICAgIHB1c2hieXRlc3MgMHgzMjk4ZTdjMCAweDNhMzk1ZjJiIC8vIG1ldGhvZCAiZGVwb3NpdChwYXkpdWludDY0IiwgbWV0aG9kICJ3aXRoZHJhdygpdWludDY0IgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAogICAgbWF0Y2ggbWFpbl9kZXBvc2l0X3JvdXRlQDUgbWFpbl93aXRoZHJhd19yb3V0ZUA2CgptYWluX2FmdGVyX2lmX2Vsc2VAOToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9wZXJzb25hbF9iYW5rL2NvbnRyYWN0LnB5OjUKICAgIC8vIGNsYXNzIFBlcnNvbmFsQmFuayhBUkM0Q29udHJhY3QpOgogICAgaW50Y18xIC8vIDAKICAgIHJldHVybgoKbWFpbl93aXRoZHJhd19yb3V0ZUA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MjcKICAgIC8vIEBhYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICBjYWxsc3ViIHdpdGhkcmF3CiAgICBpdG9iCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgptYWluX2RlcG9zaXRfcm91dGVANToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9wZXJzb25hbF9iYW5rL2NvbnRyYWN0LnB5OjEzCiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6NQogICAgLy8gY2xhc3MgUGVyc29uYWxCYW5rKEFSQzRDb250cmFjdCk6CiAgICB0eG4gR3JvdXBJbmRleAogICAgaW50Y18wIC8vIDEKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMCAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9wZXJzb25hbF9iYW5rL2NvbnRyYWN0LnB5OjEzCiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgZGVwb3NpdAogICAgaXRvYgogICAgYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKbWFpbl9iYXJlX3JvdXRpbmdANzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9wZXJzb25hbF9iYW5rL2NvbnRyYWN0LnB5OjUKICAgIC8vIGNsYXNzIFBlcnNvbmFsQmFuayhBUkM0Q29udHJhY3QpOgogICAgdHhuIE9uQ29tcGxldGlvbgogICAgYm56IG1haW5fYWZ0ZXJfaWZfZWxzZUA5CiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgIQogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBjcmVhdGluZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy5wZXJzb25hbF9iYW5rLmNvbnRyYWN0LlBlcnNvbmFsQmFuay5kZXBvc2l0KHBheV90eG46IHVpbnQ2NCkgLT4gdWludDY0OgpkZXBvc2l0OgogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MTMtMTQKICAgIC8vIEBhYmltZXRob2QoKQogICAgLy8gZGVmIGRlcG9zaXQoc2VsZiwgcGF5X3R4bjogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IFVJbnQ2NDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MTUKICAgIC8vIGFzc2VydCBwYXlfdHhuLnJlY2VpdmVyID09IEdsb2JhbC5jdXJyZW50X2FwcGxpY2F0aW9uX2FkZHJlc3MsICJSZWNlaXZlciBtdXN0IGJlIHRoZSBjb250cmFjdCBhZGRyZXNzIgogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBSZWNlaXZlcgogICAgZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKICAgID09CiAgICBhc3NlcnQgLy8gUmVjZWl2ZXIgbXVzdCBiZSB0aGUgY29udHJhY3QgYWRkcmVzcwogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MTYKICAgIC8vIGFzc2VydCBwYXlfdHhuLmFtb3VudCA+IDAsICJEZXBvc2l0IGFtb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvIgogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBBbW91bnQKICAgIGR1cAogICAgYXNzZXJ0IC8vIERlcG9zaXQgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9wZXJzb25hbF9iYW5rL2NvbnRyYWN0LnB5OjE4CiAgICAvLyBkZXBvc2l0X2FtdCwgZGVwb3NpdGVkID0gc2VsZi5kZXBvc2l0b3JzLm1heWJlKHBheV90eG4uc2VuZGVyKQogICAgZnJhbWVfZGlnIC0xCiAgICBndHhucyBTZW5kZXIKICAgIGR1cAogICAgYm94X2dldAogICAgYnVyeSAxCiAgICAvLyBzbWFydF9jb250cmFjdHMvcGVyc29uYWxfYmFuay9jb250cmFjdC5weToyMAogICAgLy8gaWYgZGVwb3NpdGVkOgogICAgYnogZGVwb3NpdF9lbHNlX2JvZHlAMgogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MjEKICAgIC8vIHNlbGYuZGVwb3NpdG9yc1twYXlfdHhuLnNlbmRlcl0gKz0gcGF5X3R4bi5hbW91bnQKICAgIGZyYW1lX2RpZyAxCiAgICBkdXAKICAgIGJveF9nZXQKICAgIHN3YXAKICAgIGJ0b2kKICAgIHN3YXAKICAgIGFzc2VydCAvLyBjaGVjayBzZWxmLmRlcG9zaXRvcnMgZW50cnkgZXhpc3RzCiAgICBmcmFtZV9kaWcgMAogICAgKwogICAgaXRvYgogICAgYm94X3B1dAoKZGVwb3NpdF9hZnRlcl9pZl9lbHNlQDM6CiAgICAvLyBzbWFydF9jb250cmFjdHMvcGVyc29uYWxfYmFuay9jb250cmFjdC5weToyNQogICAgLy8gcmV0dXJuIHNlbGYuZGVwb3NpdG9yc1twYXlfdHhuLnNlbmRlcl0KICAgIGZyYW1lX2RpZyAxCiAgICBib3hfZ2V0CiAgICBzd2FwCiAgICBidG9pCiAgICBzd2FwCiAgICBhc3NlcnQgLy8gY2hlY2sgc2VsZi5kZXBvc2l0b3JzIGVudHJ5IGV4aXN0cwogICAgZnJhbWVfYnVyeSAwCiAgICByZXRzdWIKCmRlcG9zaXRfZWxzZV9ib2R5QDI6CiAgICAvLyBzbWFydF9jb250cmFjdHMvcGVyc29uYWxfYmFuay9jb250cmFjdC5weToyMwogICAgLy8gc2VsZi5kZXBvc2l0b3JzW3BheV90eG4uc2VuZGVyXSA9IHBheV90eG4uYW1vdW50CiAgICBmcmFtZV9kaWcgMAogICAgaXRvYgogICAgZnJhbWVfZGlnIDEKICAgIHN3YXAKICAgIGJveF9wdXQKICAgIGIgZGVwb3NpdF9hZnRlcl9pZl9lbHNlQDMKCgovLyBzbWFydF9jb250cmFjdHMucGVyc29uYWxfYmFuay5jb250cmFjdC5QZXJzb25hbEJhbmsud2l0aGRyYXcoKSAtPiB1aW50NjQ6CndpdGhkcmF3OgogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MjkKICAgIC8vIGRlcG9zaXRfYW10LCBkZXBvc2l0ZWQgPSBzZWxmLmRlcG9zaXRvcnMubWF5YmUoVHhuLnNlbmRlcikKICAgIHR4biBTZW5kZXIKICAgIGJveF9nZXQKICAgIHN3YXAKICAgIGJ0b2kKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9wZXJzb25hbF9iYW5rL2NvbnRyYWN0LnB5OjMwCiAgICAvLyBhc3NlcnQgZGVwb3NpdGVkLCAiTm8gZGVwb3NpdHMgZm91bmQgZm9yIHRoaXMgYWNjb3VudCIKICAgIHN3YXAKICAgIGFzc2VydCAvLyBObyBkZXBvc2l0cyBmb3VuZCBmb3IgdGhpcyBhY2NvdW50CiAgICAvLyBzbWFydF9jb250cmFjdHMvcGVyc29uYWxfYmFuay9jb250cmFjdC5weTozMi0zNgogICAgLy8gcmVzdWx0ID0gaXR4bi5QYXltZW50KAogICAgLy8gICAgIHJlY2VpdmVyPVR4bi5zZW5kZXIsCiAgICAvLyAgICAgYW1vdW50PWRlcG9zaXRfYW10LAogICAgLy8gICAgIGZlZT0wLAogICAgLy8gKS5zdWJtaXQoKQogICAgaXR4bl9iZWdpbgogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MzMKICAgIC8vIHJlY2VpdmVyPVR4bi5zZW5kZXIsCiAgICB0eG4gU2VuZGVyCiAgICBpdHhuX2ZpZWxkIFJlY2VpdmVyCiAgICBpdHhuX2ZpZWxkIEFtb3VudAogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MzIKICAgIC8vIHJlc3VsdCA9IGl0eG4uUGF5bWVudCgKICAgIGludGNfMCAvLyBwYXkKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9wZXJzb25hbF9iYW5rL2NvbnRyYWN0LnB5OjM1CiAgICAvLyBmZWU9MCwKICAgIGludGNfMSAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MzItMzYKICAgIC8vIHJlc3VsdCA9IGl0eG4uUGF5bWVudCgKICAgIC8vICAgICByZWNlaXZlcj1UeG4uc2VuZGVyLAogICAgLy8gICAgIGFtb3VudD1kZXBvc2l0X2FtdCwKICAgIC8vICAgICBmZWU9MCwKICAgIC8vICkuc3VibWl0KCkKICAgIGl0eG5fc3VibWl0CiAgICBpdHhuIEFtb3VudAogICAgLy8gc21hcnRfY29udHJhY3RzL3BlcnNvbmFsX2JhbmsvY29udHJhY3QucHk6MzgKICAgIC8vIHNlbGYuZGVwb3NpdG9yc1tUeG4uc2VuZGVyXSA9IFVJbnQ2NCgwKQogICAgdHhuIFNlbmRlcgogICAgaW50Y18xIC8vIDAKICAgIGl0b2IKICAgIGJveF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9wZXJzb25hbF9iYW5rL2NvbnRyYWN0LnB5OjQwCiAgICAvLyByZXR1cm4gcmVzdWx0LmFtb3VudAogICAgcmV0c3ViCg==","clear":"I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBhbGdvcHkuYXJjNC5BUkM0Q29udHJhY3QuY2xlYXJfc3RhdGVfcHJvZ3JhbSgpIC0+IHVpbnQ2NDoKbWFpbjoKICAgIHB1c2hpbnQgMSAvLyAxCiAgICByZXR1cm4K"},"byteCode":{"approval":"CiACAQAmAQQVH3x1MRtBAEOCAgQymOfABDo5Xys2GgCOAgATAAIjQzEZFEQxGESIAGoWKExQsCJDMRkURDEYRDEWIglJOBAiEkSIABIWKExQsCJDMRlA/80xGBREIkOKAQGL/zgHMgoSRIv/OAhJRIv/OABJvkUBQQAXiwFJvkwXTESLAAgWv4sBvkwXTESMAImLABaLAUy/Qv/sMQC+TBdMRLExALIHsggishAjsgGztAgxACMWv4k=","clear":"CoEBQw=="},"compilerInfo":{"compiler":"puya","compilerVersion":{"major":4,"minor":6,"patch":1}},"events":[],"templateVariables":{}} as unknown as Arc56Contract

/**
 * A state record containing binary data
 */
export interface BinaryState {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array | undefined
  /**
   * Gets the state value as a string
   */
  asString(): string | undefined
}

class BinaryStateValue implements BinaryState {
  constructor(private value: Uint8Array | undefined) {}

  asByteArray(): Uint8Array | undefined {
    return this.value
  }

  asString(): string | undefined {
    return this.value !== undefined ? Buffer.from(this.value).toString('utf-8') : undefined
  }
}

/**
 * Expands types for IntelliSense so they are more human readable
 * See https://stackoverflow.com/a/69288824
 */
export type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
    ? { [K in keyof O]: O[K] }
    : never


/**
 * The argument types for the PersonalBank contract
 */
export type PersonalBankArgs = {
  /**
   * The object representation of the arguments for each method
   */
  obj: {
    'deposit(pay)uint64': {
      payTxn: AppMethodCallTransactionArgument
    }
    'withdraw()uint64': Record<string, never>
  }
  /**
   * The tuple representation of the arguments for each method
   */
  tuple: {
    'deposit(pay)uint64': [payTxn: AppMethodCallTransactionArgument]
    'withdraw()uint64': []
  }
}

/**
 * The return type for each method
 */
export type PersonalBankReturns = {
  'deposit(pay)uint64': bigint
  'withdraw()uint64': bigint
}

/**
 * Defines the types of available calls and state of the PersonalBank smart contract.
 */
export type PersonalBankTypes = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'deposit(pay)uint64' | 'deposit', {
      argsObj: PersonalBankArgs['obj']['deposit(pay)uint64']
      argsTuple: PersonalBankArgs['tuple']['deposit(pay)uint64']
      returns: PersonalBankReturns['deposit(pay)uint64']
    }>
    & Record<'withdraw()uint64' | 'withdraw', {
      argsObj: PersonalBankArgs['obj']['withdraw()uint64']
      argsTuple: PersonalBankArgs['tuple']['withdraw()uint64']
      returns: PersonalBankReturns['withdraw()uint64']
    }>
  /**
   * Defines the shape of the state of the application.
   */
  state: {
    box: {
      keys: {}
      maps: {
        depositors: Map<Uint8Array | string, bigint>
      }
    }
  }
}

/**
 * Defines the possible abi call signatures.
 */
export type PersonalBankSignatures = keyof PersonalBankTypes['methods']
/**
 * Defines the possible abi call signatures for methods that return a non-void value.
 */
export type PersonalBankNonVoidMethodSignatures = keyof PersonalBankTypes['methods'] extends infer T ? T extends keyof PersonalBankTypes['methods'] ? MethodReturn<T> extends void ? never : T  : never : never
/**
 * Defines an object containing all relevant parameters for a single call to the contract.
 */
export type CallParams<TArgs> = Expand<
  Omit<AppClientMethodCallParams, 'method' | 'args' | 'onComplete'> &
    {
      /** The args for the ABI method call, either as an ordered array or an object */
      args: Expand<TArgs>
    }
>
/**
 * Maps a method signature from the PersonalBank smart contract to the method's arguments in either tuple or struct form
 */
export type MethodArgs<TSignature extends PersonalBankSignatures> = PersonalBankTypes['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the PersonalBank smart contract to the method's return type
 */
export type MethodReturn<TSignature extends PersonalBankSignatures> = PersonalBankTypes['methods'][TSignature]['returns']

/**
 * Defines the shape of the keyed box state of the application.
 */
export type BoxKeysState = PersonalBankTypes['state']['box']['keys']


/**
 * Defines supported create method params for this smart contract
 */
export type PersonalBankCreateCallParams =
  | Expand<AppClientBareCallParams & {method?: never} & {onComplete?: OnApplicationComplete.NoOpOC} & CreateSchema>
/**
 * Defines arguments required for the deploy method.
 */
export type PersonalBankDeployParams = Expand<Omit<AppFactoryDeployParams, 'createParams' | 'updateParams' | 'deleteParams'> & {
  /**
   * Create transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  createParams?: PersonalBankCreateCallParams
}>


/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the PersonalBank smart contract
 */
export abstract class PersonalBankParamsFactory {
  /**
   * Constructs a no op call for the deposit(pay)uint64 ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static deposit(params: CallParams<PersonalBankArgs['obj']['deposit(pay)uint64'] | PersonalBankArgs['tuple']['deposit(pay)uint64']> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'deposit(pay)uint64' as const,
      args: Array.isArray(params.args) ? params.args : [params.args.payTxn],
    }
  }
  /**
   * Constructs a no op call for the withdraw()uint64 ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static withdraw(params: CallParams<PersonalBankArgs['obj']['withdraw()uint64'] | PersonalBankArgs['tuple']['withdraw()uint64']> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'withdraw()uint64' as const,
      args: Array.isArray(params.args) ? params.args : [],
    }
  }
}

/**
 * A factory to create and deploy one or more instance of the PersonalBank smart contract and to create one or more app clients to interact with those (or other) app instances
 */
export class PersonalBankFactory {
  /**
   * The underlying `AppFactory` for when you want to have more flexibility
   */
  public readonly appFactory: _AppFactory

  /**
   * Creates a new instance of `PersonalBankFactory`
   *
   * @param params The parameters to initialise the app factory with
   */
  constructor(params: Omit<AppFactoryParams, 'appSpec'>) {
    this.appFactory = new _AppFactory({
      ...params,
      appSpec: APP_SPEC,
    })
  }
  
  /** The name of the app (from the ARC-32 / ARC-56 app spec or override). */
  public get appName() {
    return this.appFactory.appName
  }
  
  /** The ARC-56 app spec being used */
  get appSpec() {
    return APP_SPEC
  }
  
  /** A reference to the underlying `AlgorandClient` this app factory is using. */
  public get algorand(): AlgorandClient {
    return this.appFactory.algorand
  }
  
  /**
   * Returns a new `AppClient` client for an app instance of the given ID.
   *
   * Automatically populates appName, defaultSender and source maps from the factory
   * if not specified in the params.
   * @param params The parameters to create the app client
   * @returns The `AppClient`
   */
  public getAppClientById(params: AppFactoryAppClientParams) {
    return new PersonalBankClient(this.appFactory.getAppClientById(params))
  }
  
  /**
   * Returns a new `AppClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   *
   * Automatically populates appName, defaultSender and source maps from the factory
   * if not specified in the params.
   * @param params The parameters to create the app client
   * @returns The `AppClient`
   */
  public async getAppClientByCreatorAndName(
    params: AppFactoryResolveAppClientByCreatorAndNameParams,
  ) {
    return new PersonalBankClient(await this.appFactory.getAppClientByCreatorAndName(params))
  }

  /**
   * Idempotently deploys the PersonalBank smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public async deploy(params: PersonalBankDeployParams = {}) {
    const result = await this.appFactory.deploy({
      ...params,
    })
    return { result: result.result, appClient: new PersonalBankClient(result.appClient) }
  }

  /**
   * Get parameters to create transactions (create and deploy related calls) for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
   */
  readonly params = {
    /**
     * Gets available create methods
     */
    create: {
      /**
       * Creates a new instance of the PersonalBank smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The params for a create call
       */
      bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC}>) => {
        return this.appFactory.params.bare.create(params)
      },
    },

  }

  /**
   * Create transactions for the current app
   */
  readonly createTransaction = {
    /**
     * Gets available create methods
     */
    create: {
      /**
       * Creates a new instance of the PersonalBank smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The transaction for a create call
       */
      bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC}>) => {
        return this.appFactory.createTransaction.bare.create(params)
      },
    },

  }

  /**
   * Send calls to the current app
   */
  readonly send = {
    /**
     * Gets available create methods
     */
    create: {
      /**
       * Creates a new instance of the PersonalBank smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The create result
       */
      bare: async (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & SendParams & {onComplete?: OnApplicationComplete.NoOpOC}>) => {
        const result = await this.appFactory.send.bare.create(params)
        return { result: result.result, appClient: new PersonalBankClient(result.appClient) }
      },
    },

  }

}
/**
 * A client to make calls to the PersonalBank smart contract
 */
export class PersonalBankClient {
  /**
   * The underlying `AppClient` for when you want to have more flexibility
   */
  public readonly appClient: _AppClient

  /**
   * Creates a new instance of `PersonalBankClient`
   *
   * @param appClient An `AppClient` instance which has been created with the PersonalBank app spec
   */
  constructor(appClient: _AppClient)
  /**
   * Creates a new instance of `PersonalBankClient`
   *
   * @param params The parameters to initialise the app client with
   */
  constructor(params: Omit<AppClientParams, 'appSpec'>)
  constructor(appClientOrParams: _AppClient | Omit<AppClientParams, 'appSpec'>) {
    this.appClient = appClientOrParams instanceof _AppClient ? appClientOrParams : new _AppClient({
      ...appClientOrParams,
      appSpec: APP_SPEC,
    })
  }
  
  /**
   * Checks for decode errors on the given return value and maps the return value to the return type for the given method
   * @returns The typed return value or undefined if there was no value
   */
  decodeReturnValue<TSignature extends PersonalBankNonVoidMethodSignatures>(method: TSignature, returnValue: ABIReturn | undefined) {
    return returnValue !== undefined ? getArc56ReturnValue<MethodReturn<TSignature>>(returnValue, this.appClient.getABIMethod(method), APP_SPEC.structs) : undefined
  }
  
  /**
   * Returns a new `PersonalBankClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   * @param params The parameters to create the app client
   */
  public static async fromCreatorAndName(params: Omit<ResolveAppClientByCreatorAndName, 'appSpec'>): Promise<PersonalBankClient> {
    return new PersonalBankClient(await _AppClient.fromCreatorAndName({...params, appSpec: APP_SPEC}))
  }
  
  /**
   * Returns an `PersonalBankClient` instance for the current network based on
   * pre-determined network-specific app IDs specified in the ARC-56 app spec.
   *
   * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
   * @param params The parameters to create the app client
   */
  static async fromNetwork(
    params: Omit<ResolveAppClientByNetwork, 'appSpec'>
  ): Promise<PersonalBankClient> {
    return new PersonalBankClient(await _AppClient.fromNetwork({...params, appSpec: APP_SPEC}))
  }
  
  /** The ID of the app instance this client is linked to. */
  public get appId() {
    return this.appClient.appId
  }
  
  /** The app address of the app instance this client is linked to. */
  public get appAddress() {
    return this.appClient.appAddress
  }
  
  /** The name of the app. */
  public get appName() {
    return this.appClient.appName
  }
  
  /** The ARC-56 app spec being used */
  public get appSpec() {
    return this.appClient.appSpec
  }
  
  /** A reference to the underlying `AlgorandClient` this app client is using. */
  public get algorand(): AlgorandClient {
    return this.appClient.algorand
  }

  /**
   * Get parameters to create transactions for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
   */
  readonly params = {
    /**
     * Makes a clear_state call to an existing instance of the PersonalBank smart contract.
     *
     * @param params The params for the bare (raw) call
     * @returns The clearState result
     */
    clearState: (params?: Expand<AppClientBareCallParams>) => {
      return this.appClient.params.bare.clearState(params)
    },

    /**
     * Makes a call to the PersonalBank smart contract using the `deposit(pay)uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call params
     */
    deposit: (params: CallParams<PersonalBankArgs['obj']['deposit(pay)uint64'] | PersonalBankArgs['tuple']['deposit(pay)uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.params.call(PersonalBankParamsFactory.deposit(params))
    },

    /**
     * Makes a call to the PersonalBank smart contract using the `withdraw()uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call params
     */
    withdraw: (params: CallParams<PersonalBankArgs['obj']['withdraw()uint64'] | PersonalBankArgs['tuple']['withdraw()uint64']> & {onComplete?: OnApplicationComplete.NoOpOC} = {args: []}) => {
      return this.appClient.params.call(PersonalBankParamsFactory.withdraw(params))
    },

  }

  /**
   * Create transactions for the current app
   */
  readonly createTransaction = {
    /**
     * Makes a clear_state call to an existing instance of the PersonalBank smart contract.
     *
     * @param params The params for the bare (raw) call
     * @returns The clearState result
     */
    clearState: (params?: Expand<AppClientBareCallParams>) => {
      return this.appClient.createTransaction.bare.clearState(params)
    },

    /**
     * Makes a call to the PersonalBank smart contract using the `deposit(pay)uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call transaction
     */
    deposit: (params: CallParams<PersonalBankArgs['obj']['deposit(pay)uint64'] | PersonalBankArgs['tuple']['deposit(pay)uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.createTransaction.call(PersonalBankParamsFactory.deposit(params))
    },

    /**
     * Makes a call to the PersonalBank smart contract using the `withdraw()uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call transaction
     */
    withdraw: (params: CallParams<PersonalBankArgs['obj']['withdraw()uint64'] | PersonalBankArgs['tuple']['withdraw()uint64']> & {onComplete?: OnApplicationComplete.NoOpOC} = {args: []}) => {
      return this.appClient.createTransaction.call(PersonalBankParamsFactory.withdraw(params))
    },

  }

  /**
   * Send calls to the current app
   */
  readonly send = {
    /**
     * Makes a clear_state call to an existing instance of the PersonalBank smart contract.
     *
     * @param params The params for the bare (raw) call
     * @returns The clearState result
     */
    clearState: (params?: Expand<AppClientBareCallParams & SendParams>) => {
      return this.appClient.send.bare.clearState(params)
    },

    /**
     * Makes a call to the PersonalBank smart contract using the `deposit(pay)uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    deposit: async (params: CallParams<PersonalBankArgs['obj']['deposit(pay)uint64'] | PersonalBankArgs['tuple']['deposit(pay)uint64']> & SendParams & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      const result = await this.appClient.send.call(PersonalBankParamsFactory.deposit(params))
      return {...result, return: result.return as unknown as (undefined | PersonalBankReturns['deposit(pay)uint64'])}
    },

    /**
     * Makes a call to the PersonalBank smart contract using the `withdraw()uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    withdraw: async (params: CallParams<PersonalBankArgs['obj']['withdraw()uint64'] | PersonalBankArgs['tuple']['withdraw()uint64']> & SendParams & {onComplete?: OnApplicationComplete.NoOpOC} = {args: []}) => {
      const result = await this.appClient.send.call(PersonalBankParamsFactory.withdraw(params))
      return {...result, return: result.return as unknown as (undefined | PersonalBankReturns['withdraw()uint64'])}
    },

  }

  /**
   * Clone this app client with different params
   *
   * @param params The params to use for the the cloned app client. Omit a param to keep the original value. Set a param to override the original value. Setting to undefined will clear the original value.
   * @returns A new app client with the altered params
   */
  public clone(params: CloneAppClientParams) {
    return new PersonalBankClient(this.appClient.clone(params))
  }

  /**
   * Methods to access state for the current PersonalBank app
   */
  state = {
    /**
     * Methods to access box state for the current PersonalBank app
     */
    box: {
      /**
       * Get all current keyed values from box state
       */
      getAll: async (): Promise<Partial<Expand<BoxKeysState>>> => {
        const result = await this.appClient.state.box.getAll()
        return {
        }
      },
      /**
       * Get values from the depositors map in box state
       */
      depositors: {
        /**
         * Get all current values of the depositors map in box state
         */
        getMap: async (): Promise<Map<Uint8Array, bigint>> => { return (await this.appClient.state.box.getMap("depositors")) as Map<Uint8Array, bigint> },
        /**
         * Get a current value of the depositors map by key from box state
         */
        value: async (key: Uint8Array | string): Promise<bigint | undefined> => { return await this.appClient.state.box.getMapValue("depositors", key) as bigint | undefined },
      },
    },
  }

  public newGroup(): PersonalBankComposer {
    const client = this
    const composer = this.algorand.newGroup()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: ABIReturn | undefined) => any)> = []
    return {
      /**
       * Add a deposit(pay)uint64 method call against the PersonalBank contract
       */
      deposit(params: CallParams<PersonalBankArgs['obj']['deposit(pay)uint64'] | PersonalBankArgs['tuple']['deposit(pay)uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.deposit(params)))
        resultMappers.push((v) => client.decodeReturnValue('deposit(pay)uint64', v))
        return this
      },
      /**
       * Add a withdraw()uint64 method call against the PersonalBank contract
       */
      withdraw(params: CallParams<PersonalBankArgs['obj']['withdraw()uint64'] | PersonalBankArgs['tuple']['withdraw()uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.withdraw(params)))
        resultMappers.push((v) => client.decodeReturnValue('withdraw()uint64', v))
        return this
      },
      /**
       * Add a clear state call to the PersonalBank contract
       */
      clearState(params: AppClientBareCallParams) {
        promiseChain = promiseChain.then(() => composer.addAppCall(client.params.clearState(params)))
        return this
      },
      addTransaction(txn: Transaction, signer?: TransactionSigner) {
        promiseChain = promiseChain.then(() => composer.addTransaction(txn, signer))
        return this
      },
      async composer() {
        await promiseChain
        return composer
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await (!options ? composer.simulate() : composer.simulate(options))
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val) : val.returnValue)
        }
      },
      async send(params?: SendParams) {
        await promiseChain
        const result = await composer.send(params)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val) : val.returnValue)
        }
      }
    } as unknown as PersonalBankComposer
  }
}
export type PersonalBankComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the deposit(pay)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  deposit(params?: CallParams<PersonalBankArgs['obj']['deposit(pay)uint64'] | PersonalBankArgs['tuple']['deposit(pay)uint64']>): PersonalBankComposer<[...TReturns, PersonalBankReturns['deposit(pay)uint64'] | undefined]>

  /**
   * Calls the withdraw()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  withdraw(params?: CallParams<PersonalBankArgs['obj']['withdraw()uint64'] | PersonalBankArgs['tuple']['withdraw()uint64']>): PersonalBankComposer<[...TReturns, PersonalBankReturns['withdraw()uint64'] | undefined]>

  /**
   * Makes a clear_state call to an existing instance of the PersonalBank smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(params?: AppClientBareCallParams): PersonalBankComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn A transaction to add to the transaction group
   * @param signer The optional signer to use when signing this transaction.
   */
  addTransaction(txn: Transaction, signer?: TransactionSigner): PersonalBankComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  composer(): Promise<TransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(): Promise<PersonalBankComposerResults<TReturns> & { simulateResponse: SimulateResponse }>
  simulate(options: SkipSignaturesSimulateOptions): Promise<PersonalBankComposerResults<TReturns> & { simulateResponse: SimulateResponse }>
  simulate(options: RawSimulateOptions): Promise<PersonalBankComposerResults<TReturns> & { simulateResponse: SimulateResponse }>
  /**
   * Sends the transaction group to the network and returns the results
   */
  send(params?: SendParams): Promise<PersonalBankComposerResults<TReturns>>
}
export type PersonalBankComposerResults<TReturns extends [...any[]]> = Expand<SendAtomicTransactionComposerResults & {
  returns: TReturns
}>

