// import './style.css';
import Bank from './Bank.js';
import Stock from './Stock.js';
import {
  AAPL,GOOG,MARK
} from './HistoricalData.js';

const DEFAULT_MONEY = 10_000;

// 1 fake month / 1 real second
//Overall game should last 5 real minutes --> 25 fake years
const TIME_JUMP = 31 * 24 * 60 * 60;

const crashRate = 20;
let currentDay = 0;

let stocks = [
  new Stock('Pear', AAPL[0], 1),
  new Stock('Doodle', GOOG[0], 1.25),
  new Stock('Mass Academy', MARK[0], 0.8),
];

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isCrashed() {
  return Math.floor(Math.random() * crashRate) == 1;
}

const App = {
  data() {
    return {
      bank: new Bank(DEFAULT_MONEY),
      stocks: stocks,
    };
  },

  methods: {
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
  },
  mounted() {
    setInterval(() => {
      this.stocks[0].cost=AAPL[currentDay];
      this.stocks[1].cost=GOOG[currentDay];
      this.stocks[2].cost=MARK[currentDay];
      currentDay++;
    }, 700);
  },
};

Vue.createApp(App).mount('#app');
