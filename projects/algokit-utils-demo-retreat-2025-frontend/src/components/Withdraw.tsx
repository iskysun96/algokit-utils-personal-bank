import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { AlgoAmount } from '@algorandfoundation/algokit-utils/types/amount'
import { useWallet } from '@txnlab/use-wallet-react'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { PersonalBankClient } from '../contracts/PersonalBank'
import { getAlgodConfigFromViteEnvironment, getIndexerConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'

interface AppCallsInterface {
  openModal: boolean
  setModalState: (value: boolean) => void
}

const Withdraw = ({ openModal, setModalState }: AppCallsInterface) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { enqueueSnackbar } = useSnackbar()
  const { transactionSigner, activeAddress } = useWallet()

  const algodConfig = getAlgodConfigFromViteEnvironment()
  const indexerConfig = getIndexerConfigFromViteEnvironment()
  const algorand = AlgorandClient.fromConfig({
    algodConfig,
    indexerConfig,
  })

  algorand.setDefaultSigner(transactionSigner)

  const sendAppCall = async () => {
    setLoading(true)

    const appId = JSON.parse(localStorage.getItem('deployed-app-id') ?? '0')
    if (!appId) {
      enqueueSnackbar('No app id found', { variant: 'error' })
      setLoading(false)
      return
    }
    const appClient = await algorand.client.getTypedAppClientById(PersonalBankClient, {
      appId: appId,
      defaultSender: activeAddress!,
    })

    const response = await appClient.send
      .withdraw({ args: {}, coverAppCallInnerTransactionFees: true, maxFee: AlgoAmount.MicroAlgo(3000) })
      .catch((e: Error) => {
        enqueueSnackbar(`Error calling the contract: ${e.message}`, { variant: 'error' })
        setLoading(false)
        return undefined
      })

    if (!response) {
      return
    }

    enqueueSnackbar(`Successfully withdrew: ${Number(response.return!) / 1000000} algos`, { variant: 'success' })

    setLoading(false)
  }

  return (
    <dialog id="appcalls_modal" className={`modal ${openModal ? 'modal-open' : ''} bg-slate-200`}>
      <form method="dialog" className="modal-box">
        {}
        <h3 className="font-bold text-lg">Withdraw your deposits</h3>
        <br />
        <div className="modal-action ">
          <button className="btn" onClick={() => setModalState(!openModal)}>
            Close
          </button>
          <button className={`btn`} onClick={sendAppCall}>
            {loading ? <span className="loading loading-spinner" /> : 'Send application call'}
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default Withdraw
