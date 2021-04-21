export default class Stock {
  constructor(name, cost) {
    this.name = name;
    this.shares = 0;
    this.cost = cost;
  }

  buy(amount, bank) {
    if (bank.withdraw(amount * this.cost)) {
      this.shares += amount;
    }
  }

  buyAll(bank) {
    let total = bank.balance;
    let amount = Math.floor(total / this.cost);
    this.buy(amount, bank);
  }

  sell(amount, bank) {
    if (amount <= this.shares) {
      this.shares -= amount;
      bank.deposit(amount * this.cost);
    }
  }

  sellAll(bank) {
    this.sell(this.shares, bank);
  }
}
