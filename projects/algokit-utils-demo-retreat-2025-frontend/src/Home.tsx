// src/components/Home.tsx
import { useWallet } from '@txnlab/use-wallet-react'
import React, { useState } from 'react'
import ConnectWallet from './components/ConnectWallet'
import DeployApp from './components/DeployApp'
import Deposit from './components/Deposit'
import Transact from './components/Transact'
import Withdraw from './components/Withdraw'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [deployAppModal, setDeployAppModal] = useState<boolean>(false)
  const [depositModal, setDepositsModal] = useState<boolean>(false)
  const [withdrawModal, setWithdrawModal] = useState<boolean>(false)

  const { activeAddress } = useWallet()

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  const toggleDemoModal = () => {
    setOpenDemoModal(!openDemoModal)
  }

  const toggleDeployAppModal = () => {
    setDeployAppModal(!deployAppModal)
  }

  const toggleDepositModal = () => {
    setDepositsModal(!depositModal)
  }

  const toggleWithdrawModal = () => {
    setWithdrawModal(!withdrawModal)
  }

  return (
    <div className="hero min-h-screen bg-indigo-300">
      <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white mx-auto">
        <div className="max-w-md">
          <h1 className="text-4xl">
            Use <div className="font-bold">AlgoKit Utils! 😤</div>
          </h1>
          <p className="py-6">
            Chris built this demo app while listening to Cosimos talking about xASA. That's how easy it is to use AlgoKit Utils!
          </p>

          <div className="grid">
            <a
              data-test-id="getting-started"
              className="btn btn-primary m-2"
              target="_blank"
              href="https://github.com/algorandfoundation/algokit-utils-ts"
            >
              Getting started with AlgoKit Utils
            </a>

            <div className="divider" />
            <button data-test-id="connect-wallet" className="btn m-2" onClick={toggleWalletModal}>
              {(activeAddress && 'Disconnect Wallet') || 'Connect Wallet'}
            </button>
            {activeAddress && <div className="divider" />}
            {activeAddress && (
              <button data-test-id="transactions-demo" className="btn m-2" onClick={toggleDemoModal}>
                💸 Donate to a random account
              </button>
            )}

            {activeAddress && (
              <button data-test-id="appcalls-demo" className="btn m-2" onClick={toggleDeployAppModal}>
                🏦 Deploy Personal Bank Contract
              </button>
            )}
            {activeAddress && <div className="divider" />}
            {activeAddress && (
              <button data-test-id="appcalls-demo" className="btn m-2" onClick={toggleDepositModal}>
                Deposit ALGO
              </button>
            )}

            {activeAddress && (
              <button data-test-id="appcalls-demo" className="btn m-2" onClick={toggleWithdrawModal}>
                Withdraw your deposits
              </button>
            )}
          </div>

          <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
          <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
          <DeployApp openModal={deployAppModal} setModalState={toggleDeployAppModal} />
          <Deposit openModal={depositModal} setModalState={toggleDepositModal} />
          <Withdraw openModal={withdrawModal} setModalState={toggleWithdrawModal} />
        </div>
      </div>
    </div>
  )
}

export default Home
