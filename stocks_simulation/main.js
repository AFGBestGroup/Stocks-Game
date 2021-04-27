// import './style.css';
import Bank from '../journeystocks/Bank.js';
import Stock from './Stock.js';
import DividendStock from '../journeystocks/DividendStock.js';
import { AAPL, GOOG, MARK, T } from './HistoricalData.js';

const DEFAULT_MONEY = 10_000;

// 1 fake month / 1 real second
//Overall game should last 5 real minutes --> 25 fake years
const TIME_JUMP = 31 * 24 * 60 * 60;

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let startDay = 0;
//let startDay = rand(0,885);
//885 = 1250 - 365
let endDay = 365;

let stocks = [
  new DividendStock('Pear', AAPL[startDay],0.21),
  new Stock('Doodle', GOOG[startDay]),
  new Stock('Mass Academy', MARK[startDay]),
  new DividendStock('BSAS', T[startDay], 0.52),
];

let salary = 150;

const App = {
  data() {
    return {
      bank: new Bank(DEFAULT_MONEY),
      stocks: stocks,
      currentDay: 0,
      imageIndex: 0,
    };
  },

  methods: {
    displayNumber(num) {
      return num.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },

    buy(amount, index) {
      this.stocks[index].buy(amount, this.bank);
    },
    sell(amount, index) {
      this.stocks[index].sell(amount, this.bank);
    },

    sellAll(index) {
      this.stocks[index].sellAll(this.bank);
    },
    buyAll(index) {
      this.stocks[index].buyAll(this.bank);
    },

    calcPortValue() {
      let totalStockValue = 0;
      for (var s of this.stocks) {
        totalStockValue += s.cost * s.shares;
      }
      return this.bank.balance + totalStockValue;
    },
  },
  mounted() {
    setInterval(() => {
      if (this.currentDay >= endDay) {
        window.location.replace('./EndScreen.html');
      } else {
        this.stocks[0].cost = AAPL[1 + this.currentDay + startDay];
        this.stocks[1].cost = GOOG[1 + this.currentDay + startDay];
        this.stocks[2].cost = MARK[1 + this.currentDay + startDay];
        this.stocks[3].cost = T[1 + this.currentDay + startDay];
        if (this.currentDay % 7 == 0 && this.currentDay != 0) {
          this.bank.balance += salary;
        }
        //On days 91, 182, 273, and 365, a certain amount of money will be added
        if (this.currentDay % Math.floor(365 / 4) == 0) {
          //Let user know what's going on
          for (var s of stocks) {
            if (s.isDividendStock()) this.bank.balance += s.getDividend();
          }
        }
        this.currentDay++;
        //this.currentDay=90;
      }
    }, 700);
  },
};

Vue.createApp(App).mount('#app');
