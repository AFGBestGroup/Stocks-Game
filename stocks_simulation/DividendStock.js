export class DividendStock extends Stock {
  constructor(name, cost, rate){
    this.name=name;
    this.cost=cost;
    this.shares=0;
    this.rate=rate;
  }

  getDividend(){
    return shares*rate;
  }

  //@Override
  isDividendStock(){
    return true;
  }
}
