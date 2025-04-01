import { Config, ensureFunded } from '@algorandfoundation/algokit-utils'
import { registerDebugEventHandlers } from '@algorandfoundation/algokit-utils-debug'
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing'
import { Account } from 'algosdk'
import { TransactionSignerAccount } from '@algorandfoundation/algokit-utils/types/account'
import { beforeAll, beforeEach, describe, expect, test } from '@jest/globals'
import { PersonalBankFactory } from '../smart_contracts/artifacts/personal_bank/PersonalBankClient'
import { AlgoAmount } from '@algorandfoundation/algokit-utils/types/amount'

describe('personal bank contract', () => {
  const localnet = algorandFixture()
  beforeAll(() => {
    Config.configure({
      debug: true,
    })
    registerDebugEventHandlers()
  })
  beforeEach(localnet.newScope)

  const deploy = async (account: Account & TransactionSignerAccount) => {
    const factory = localnet.algorand.client.getTypedAppFactory(PersonalBankFactory, {
      defaultSender: account.addr,
      defaultSigner: account.signer,
    })

    const { appClient } = await factory.deploy({ onUpdate: 'append', onSchemaBreak: 'append', suppressLog: true })
    return { client: appClient }
  }

  test('deposit', async () => {
    const { testAccount, algorand } = localnet.context
    const { client } = await deploy(testAccount)

    const pay_txn = await algorand.createTransaction.payment({
      sender: testAccount.addr,
      receiver: client.appAddress,
      amount: AlgoAmount.Algos(1),
    })

    const result = await client.send.deposit({ args: { payTxn: pay_txn }, populateAppCallResources: true })

    expect(result.return).toBe(1000000n)
  })

  test('deposit & withdraw', async () => {
    const { testAccount, algorand } = localnet.context
    const { client } = await deploy(testAccount)

    const dispenser = await algorand.account.localNetDispenser()

    await algorand.account.ensureFunded(client.appAddress, dispenser, AlgoAmount.Algos(1))

    const pay_txn = await algorand.createTransaction.payment({
      sender: testAccount.addr,
      receiver: client.appAddress,
      amount: AlgoAmount.Algos(1),
    })

    await client.send.deposit({ args: { payTxn: pay_txn }, populateAppCallResources: true })

    const result = await client.send.withdraw({
      args: {},
      coverAppCallInnerTransactionFees: true,
      maxFee: AlgoAmount.MicroAlgo(3000),
    })

    expect(result.return).toBe(1000000n)
  })
})
