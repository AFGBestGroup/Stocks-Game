/**
 * This class models a Bank Account.
 */
export default class Bank {
  /**
   * Constructs a new Bank Account with a given starting balance.
   * @param initialBalance the initial balance of the Bank Account
   */
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  /**
   * Withdraws a specified amount of money from the Bank Account, if there are sufficient funds.
   * @param amount The amount of money to withdraw
   * @return Whether or not the user had the specified amount of funds, and the transaction was complete or not.
  */
  withdraw(amount) {
    if (amount > this.balance) return false;

    this.balance -= amount;
    return true;
  }

  /**
   * Deposits a specified amount of money into the Bank Account.
   * @param amount The amount of money to deposit
  */
  deposit(amount) {
    this.balance += amount;
  }
}
