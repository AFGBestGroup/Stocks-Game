<template>
  <div>
    <p>
      <b>{{ stock.name }}</b>
    </p>
    <p>Cost: ${{ displayNumber(stock.cost) }}</p>
    <div v-if="stock.isDividendStock()">
      <p>Dividend per Share: ${{ displayNumber(stock.rate) }}</p>
    </div>
    <p v-if="stock.shares > 0">Shares owned: {{ stock.shares }}</p>
    <button v-on:click="buy(1)">Buy 1</button>
    <button v-on:click="buy(10)">Buy 10</button>
    <button v-on:click="buyAll()">Buy All</button>
    <br />
    <button v-on:click="sell(1)">Sell 1</button>
    <button v-on:click="sell(10)">Sell 10</button>
    <button v-on:click="sellAll()">Sell All</button>
    <br />
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
