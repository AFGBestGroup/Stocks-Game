// import './style.css';
import Bank from './Bank.js';
import Stock from './Stock.js';

const DEFAULT_MONEY = 10_000;

// 5 days/second?
const TIME_JUMP = 5 * 24 * 60 * 60;

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

setInterval(updatePage, 50);

setInterval(() => {
  stocks[0].cost += rand(-5, 5);
}, 700);

window.buyPear = (amount) => {
  stocks[0].buy(amount, bank);
};

window.sellPear = (amount) => {
  stocks[0].sell(amount, bank);
};
