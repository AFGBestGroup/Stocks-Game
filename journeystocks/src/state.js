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
});

export default state;
var interval = setInterval(() => {
  state.currentDay++;
  state.stocks.pear.cost = AAPL[state.currentDay];
  state.stocks.doodle.cost = GOOG[state.currentDay];
  state.stocks.bsas.cost = T[state.currentDay];
  if(state.currentDay > 15){
    router.push('end_screen');
    clearInterval(interval)
  }
}, 1000);
