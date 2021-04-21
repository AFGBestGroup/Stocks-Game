// import './style.css';
import Bank from './Bank.js';
import Stock from './Stock.js';
import { AAPL, GOOG, MARK } from './HistoricalData.js';

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

let stocks = [
  new Stock('Pear', AAPL[startDay]),
  new Stock('Doodle', GOOG[startDay]),
  new Stock('Mass Academy', MARK[startDay]),
];

let salary = 150;



const App = {
  data() {
    return {
      bank: new Bank(DEFAULT_MONEY),
      stocks: stocks,
      currentDay: 0,
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

    calcPortValue(){
      let totalStockValue = 0;
      for(var s of this.stocks){
        totalStockValue += s.cost * s.shares;
      }
      return this.bank.balance+totalStockValue;
    }
  },
  mounted() {
    setInterval(() => {
      this.stocks[0].cost = AAPL[1+this.currentDay+startDay];
      this.stocks[1].cost = GOOG[1+this.currentDay+startDay];
      this.stocks[2].cost = MARK[1+this.currentDay+startDay];
      if(this.currentDay % 7 == 0 && this.currentDay != 0){
        this.bank.balance+=salary;
      }
      this.currentDay++;
    }, 700);
  },
};

Vue.createApp(App).mount('#app');
