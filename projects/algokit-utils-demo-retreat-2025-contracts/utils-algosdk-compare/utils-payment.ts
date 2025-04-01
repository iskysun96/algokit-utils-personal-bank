import { algo, AlgorandClient } from '@algorandfoundation/algokit-utils'

async function main() {
  const algorand = AlgorandClient.defaultLocalNet()
  const acct = await algorand.account.random()
  const acct2 = await algorand.account.random()

  // Step 1: Directly send the payment transaction
  const result = await algorand.send.payment({
    amount: algo(1),
    receiver: acct2.addr,
    sender: acct.addr,
    signer: acct,
  })

  console.log(result)
}

main()
