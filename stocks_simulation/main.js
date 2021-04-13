// import './style.css';
import Bank from './Bank.js';
import Stock from './Stock.js';

const DEFAULT_MONEY = 10_000;

// 1 month/second
const TIME_JUMP = 31 * 24 * 60 * 60;

const crashRate = 20;

let stocks = [
  new Stock('Pear', 100, 1),
  new Stock('Doodle', 150, 1.25),
  new Stock('Mass Academy', 125, 0.8),
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
      for (var s of this.stocks) {
        if (s.cost <= 30 * s.growthRate)
          s.cost += rand(0, 8 * s.growthRate);
        else if (isCrashed())
          s.cost += rand(-30 * s.growthRate, -15 * s.growthRate);
        else s.cost += rand(-5 * s.growthRate, 8 * s.growthRate);
      }
    }, 700);
  },
};

Vue.createApp(App).mount('#app');
