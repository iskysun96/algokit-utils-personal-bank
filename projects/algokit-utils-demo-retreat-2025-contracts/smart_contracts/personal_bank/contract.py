from algopy import Txn, gtxn, Global, itxn, UInt64, Account, BoxMap, ARC4Contract
from algopy.arc4 import abimethod


class PersonalBank(ARC4Contract):

    def __init__(self)-> None:
        self.depositors = BoxMap(
            Account, UInt64, key_prefix=""
        ) 


    @abimethod()
    def deposit(self, pay_txn: gtxn.PaymentTransaction) -> UInt64:
        assert pay_txn.receiver == Global.current_application_address, "Receiver must be the contract address"
        assert pay_txn.amount > 0, "Deposit amount must be greater than zero"

        deposit_amt, deposited = self.depositors.maybe(pay_txn.sender)

        if deposited:
            self.depositors[pay_txn.sender] += pay_txn.amount
        else:
            self.depositors[pay_txn.sender] = pay_txn.amount

        return self.depositors[pay_txn.sender]

    @abimethod()
    def withdraw(self) -> UInt64:
        deposit_amt, deposited = self.depositors.maybe(Txn.sender)
        assert deposited, "No deposits found for this account"

        result = itxn.Payment(
            receiver=Txn.sender,
            amount=deposit_amt,
            fee=0,
        ).submit()

        self.depositors[Txn.sender] = UInt64(0)

        return result.amount
