import algosdk from 'algosdk'
import { algo, AlgorandClient } from '@algorandfoundation/algokit-utils'

async function main() {
  const algorand = AlgorandClient.defaultLocalNet()
  const algodClient = algorand.client.algod
  const acct = await algorand.account.random()
  const acct2 = await algorand.account.random()

  // Step 1: Create a payment transaction
  const suggestedParams = await algodClient.getTransactionParams().do()
  const ptxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    sender: acct.addr,
    suggestedParams,
    receiver: acct2.addr,
    amount: 1000000,
    note: algosdk.coerceToBytes('hello world'),
  })
  // Step 2: Sign the transaction
  const signedTxn = ptxn.signTxn(acct.account.sk)

  // Step 3: Submit the transaction
  const { txid } = await algodClient.sendRawTransaction(signedTxn).do()

  // Step 4: Wait for the transaction to be confirmed
  const result = await algosdk.waitForConfirmation(algodClient, txid, 4)
  console.log(result)
  console.log(`Transaction Information: ${algosdk.stringifyJSON(result.txn)}`)
  console.log(`Decoded Note: ${new TextDecoder('utf-8').decode(result.txn.txn.note)}`)
}

main()
