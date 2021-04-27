export default class Bank {
  constructor(initialBalance) {
    // integer: cents
    this.balance = initialBalance;
  }

  withdraw(amount) {
    if (amount > this.balance) return false;

    this.balance -= amount;
    return true;
  }

  deposit(amount) {
    this.balance += amount;
  }
}
