import Stock from './Stock.js';
export default class DividendStock extends Stock {

  /** 
   * Parameter Constructor:
   * Creates a new DividendStock with a specified name, a specified cost, and a specified Dividend per share rate..
   * Sets the number of shares owned to 0.
   * @param name The name of the Stock
   * @param cost The cost of the Stock at a moment in time
   * @param rate The Dividend per Share of the stock, paid quarterly.
  */
  constructor(name, cost, rate){
    super(name,cost);
    this.rate=rate;
  }

  /**
   * Gets the total Dividend, which is the number of Shares times the Dividend Per Share.
   */
  getDividend(){
    return this.shares*this.rate;
  }

  /** 
   * Returns whether or not this stock is a Dividend Stock.
   * @return true if the stock is a Dividend Stock, false otherwise
   * @override
  */
  isDividendStock(){
    return true;
  }
}
