import Bank from './Bank';
import Stock from './Stock';
import DividendStock from './DividendStock';
import { AAPL, GOOG, T } from './HistoricalData';
import { reactive } from 'Vue';

let DEFAULT_MONEY = 10_000;
let state = reactive({
  bank: new Bank(DEFAULT_MONEY),
  currentDay: 0,
  stocks: {
    pear: new Stock('Pear', AAPL[0]),
    doodle: new Stock('Doodle', GOOG[0]),
    bsas: new DividendStock('BSAS', T[0], 0.52),
  },
});

export default state;
setInterval(() => {
  state.currentDay++;
  state.stocks.pear.cost = AAPL[state.currentDay];
  state.stocks.doodle.cost = GOOG[state.currentDay];
  state.stocks.bsas.cost = T[state.currentDay];
}, 1000);
