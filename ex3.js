function BankAccount(owner, balance) { this.owner = owner; this.balance = balance }

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
}
BankAccount.prototype.withdraw = function (amount) {
    if (amount < this.balance) {
        this.balance -= amount
    }
}
BankAccount.prototype.checkBalance = function () {
    console.log('balance: ',this.balance)
}
const myAcount = new BankAccount("shilat",1000 )
myAcount.deposit(500)
myAcount.withdraw(50)
myAcount.checkBalance()

