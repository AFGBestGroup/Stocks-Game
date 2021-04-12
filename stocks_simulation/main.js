// import './style.css';
import Bank from './Bank.js';
import Stock from './Stock.js';

const DEFAULT_MONEY = 10_000;

// 5 days/second?
const TIME_JUMP = 5 * 24 * 60 * 60;

const crashRate = 20;

let stocks = [new Stock('Pear', 100, 1), new Stock('Doodle', 150, 1.25), new Stock('Mass Academy', 125, 0.8)];
let bank = new Bank(DEFAULT_MONEY);

function updatePage() {
  let contentToUpdate = {
    '#balance': () => bank.balance,
  };
  document.querySelector('#stocks').innerHTML="";
  document.querySelector('#stocks').appendChild(buildHTML());
  for (var key in contentToUpdate) {
    if (document.querySelector(key))
      document.querySelector(key).innerHTML = contentToUpdate[key]();
  }
}

function buildHTML(){
  var div = document.createElement("div");

  for (var stock of stocks) {
    var labelElement = document.createElement("p"); // <p> </p>
    var label = document.createTextNode(stock.name); // label
    labelElement.appendChild(label); // <p> label </p

    var costElement = document.createElement("p"); // <p> </p>
    var cost = document.createTextNode(stock.cost); // cost
    costElement.appendChild(cost); // <p> cost </p>

    var amountElement = document.createElement("p"); // <p> </p>
    var amount = document.createTextNode(stock.shares); // amount
    amountElement.appendChild(amount); // <p> amount </p>

    div.appendChild(labelElement);
    div.appendChild(costElement);
    div.appendChild(amountElement);

  }
  return div;

}


function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Happens at constant rate, for now
function isCrashed() {
  return Math.floor(Math.random() * crashRate) == 1;
}

setInterval(updatePage, 100);

function updateStockPrice() {
  for(var s of stocks){
    if (s.cost<=30*s.growthRate)
      s.cost += rand(0,8*s.growthRate);
    else if (isCrashed())
      s.cost += rand(-30*s.growthRate, -15*s.growthRate);
    else
      s.cost += rand(-5*s.growthRate, 8*s.growthRate);
  }

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
