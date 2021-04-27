<template>
  <div>
    <p><b>{{stock.name}}</b></p>
          <p>Cost: ${{displayNumber(stock.cost)}}</p>
          <div v-if="stock.isDividendStock()">
            <p>Dividend per Share: ${{displayNumber(stock.rate)}}</p>
          </div>
          <div v-else>
            <br> <br>
          </div>

          <p v-if="stock.shares > 0">Shares owned: {{stock.shares}}</p>

          <button v-on:click="buy(sharesToBuy, index)">Buy</button>
          <input type="number" id="sharesToBuy" name="Number of shares" onkeypress="return event.charCode >=48" min="0"><br>
          <div v-if="sharesToBuy!=0">
            <p>That will cost: {{stock.cost*sharesToBuy}}</p>
          </div>
          <div v-else>
            <br>
          </div>
          <br>
          <button v-on:click="sell(sharesToSell, index)">Sell</button>
          <input type="number" id="sharesToSell" name="Number of shares" onkeypress="return event.charCode >=48" min="0"><br>
          <div v-if="sharesToSell!=0">
            <p>You will earn: {{stock.cost*sharesToSell}}</p>
          </div>
          <div v-else>
            <br>
          </div>
          <br>
  </div>
</template>

<script>
import state from "../state";
import { displayNumber } from "../util";

export default {
  props: ["name"],
  data() {
    return { state };
  },

  computed: {
    stock: function () {
      return state.stocks[this.name];
    },
  },

  methods: {
    displayNumber,
    buy(amount) {
      this.stock.buy(amount, this.state.bank);
    },
    sell(amount) {
      this.stock.sell(amount, this.state.bank);
    },
    sellAll() {
      this.stock.sellAll(this.state.bank);
    },
    buyAll(index) {
      this.stock.buyAll(this.state.bank);
    },
  },
};
</script>
