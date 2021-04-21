import Stock from './Stock.js';
export default class DividendStock extends Stock {
  constructor(name, cost, rate){
    super(name,cost);
    this.rate=rate;
  }

  getDividend(){
    return this.shares*this.rate;
  }

  //@Override
  isDividendStock(){
    return true;
  }
}
