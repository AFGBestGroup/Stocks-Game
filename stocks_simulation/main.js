// import './style.css';
import Bank from './Bank.js';
import Stock from './Stock.js';

const DEFAULT_MONEY = 10_000;

// 5 days/second?
const TIME_JUMP = 5 * 24 * 60 * 60;

const crashRate = 20;

let stocks = [new Stock('Pear', 100)];
let bank = new Bank(DEFAULT_MONEY);

function updatePage() {
  let contentToUpdate = {
    '#balance': () => bank.balance,
    '#pear-cost': () => stocks[0].cost,
    '#pear-amount': () => stocks[0].shares,
  };

  for (var key in contentToUpdate) {
    if (document.querySelector(key))
      document.querySelector(key).innerHTML = contentToUpdate[key]();
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isCrashed() {
  return Math.floor(Math.random() * crashRate) == 1;
}

setInterval(updatePage, 50);

function updateStockPrice() {
  if (isCrashed()) stocks[0].cost += rand(-30, -10);
  else stocks[0].cost += rand(-5, 8);
}

setInterval(updateStockPrice, 700);

window.buy = function buy(amount, index) {
  stocks[index].buy(amount, bank);
};

window.sell = function sell(amount, index) {
  stocks[index].sell(amount, bank);
};

window.sellAll = function sellAll(index) {
  stocks[index].sellAll(bank);
};

window.buyAll = function buyAll(index) {
  stocks[index].buyAll(bank);
};
