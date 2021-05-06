/**
 * This class models a Stock in the Stock Market.
 */

export default class Stock {
  /**
   * Parameter Constructor:
   * Creates a new Stock with a specified name and a specified cost.
   * Sets the number of shares owned to 0.
   * @param name The name of the Stock
   * @param cost The cost of the Stock at a moment in time
   */
  constructor(name, cost) {
    this.name = name;
    this.shares = 0;
    this.cost = cost;
    this.totSharesBought=0;
    this.totSharesSold=0;
  }

  get cost() {
    return this.currentCost;
  }

  set cost(amount) {
    this.lastPrice = this.cost;
    this.currentCost = amount;
  }

  /**
   * Buys a specified number of shares of the Stock.
   * @param amount The number of shares to buy
   * @param bank the Bank object needed to perform the transaction
   */
  buy(amount, bank) {
    this.totSharesBought+=amount;
    if (bank.withdraw(amount * this.cost)) {
      this.shares += amount;
    }
  }

  /**
   * Buys the maximum possible number of shares of the Stock.
   * @param bank the Bank object needed to perform the transaction
   */
  buyAll(bank) {
    let total = bank.balance;
    let amount = Math.floor(total / this.cost);
    this.totSharesBought+=amount;
    this.buy(amount, bank);
  }

  /**
   * Sells a specified number of shares of the Stock.
   * @param amount The number of shares to sell
   * @param bank the Bank object needed to perform the transaction
   */
  sell(amount, bank) {
    this.totSharesSold+=amount;
    if (amount <= this.shares) {
      this.shares -= amount;
      bank.deposit(amount * this.cost);
    }
  }

  /**
   * Sells all shares of the Stock.
   * @param bank the Bank object needed to perform the transaction
   */
  sellAll(bank) {
    this.totSharesSold+=this.shares;
    this.sell(this.shares, bank);
  }

  /**
   * Returns whether or not this stock is a Dividend Stock.
   * @return true if the stock is a Dividend Stock, false otherwise
   */
  isDividendStock() {
    return false;
  }
}
