import Bank from './Bank';
import Stock from './Stock';
import DividendStock from './DividendStock';
import { AAPL, GOOG, T } from './HistoricalData';
import { reactive } from 'vue';
import router from './router.js';

let DEFAULT_MONEY = 10_000;

/**
 * Sets up the stocks so the HTML can access them.
 */
let state = reactive({
  bank: new Bank(DEFAULT_MONEY),
  currentDay: 0,
  stocks: {
    pear: new DividendStock('Pear', AAPL[0], 0.21),
    doodle: new Stock('Doodle', GOOG[0]),
    bsas: new DividendStock('BSAS', T[0], 0.52),
  },

  paused: false,
});

export default state;
var interval = setInterval(() => {
  if (state.paused) return;
  state.currentDay++;
  state.stocks.pear.cost = AAPL[state.currentDay];
  state.stocks.doodle.cost = GOOG[state.currentDay];
  state.stocks.bsas.cost = T[state.currentDay];
  if (state.currentDay % 91 == 0 && state.currentDay != 0) {
    let payout = 0;
    for (const [_, stock] of Object.entries(state.stocks)) {
      if (stock.isDividendStock()) {
        payout += stock.getDividend();
      }
    }

    state.bank.deposit(payout);
  }

  if (state.currentDay % 7 && state.currentDay != 0) {
    state.bank.deposit(100);
  }

  if (state.currentDay > 365) {
    router.push('end_screen');
    clearInterval(interval);
  }
}, 1000);
