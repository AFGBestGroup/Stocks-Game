<template>
  <div>
    <p>
      Day Count: <br />
      {{ state.currentDay }}
    </p>
    <br />
    <h1>Balances</h1>

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <p>Portfolio Value:</p>
        </div>
        <div class="col-sm">
          <p>Money available for trading:</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <p>${{ displayNumber(state.bank.balance) }}</p>
        </div>
        <div class="col-sm">
          <p>${{ displayNumber(calcPortValue()) }}</p>
        </div>
      </div>
    </div>
    <p>
      Welcome to Journey. Journey is a simple, interactive stock simulation
      designed to assist in educating the user in how to navigate investments
      and increase their financial literacy. Through this simulation you will be
      guided through building and managing your own personal stock portfolio. In
      addition to this, you will have to manage real world situations such as
      receiving active vs. passive income, and possible financial necessities
      that could drain your bank account. Don’t worry. We’ll start you off easy.
      Good luck and have fun!
    </p>
    <div class="container">
      <div class="row">
        <Stock name="pear" />
        <Stock name="bsas" />
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <!--  -->
    <p>Here's how both stocks performed</p>
    <!-- <Chart stock=pear />
  <Chart stock=BSAS /> -->
  </div>
</template>


<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Stock from "./components/Stock.vue";
</script>
<script>
import state from "./state";
import { displayNumber } from "./util";
export default {
  data() {
    return { state };
  },
  methods: {
    displayNumber,
    calcPortValue() {
      let totalStockValue = 0;
      for (var [_, s] of Object.entries(this.state.stocks)) {
        totalStockValue += s.cost * s.shares;
      }
      return this.state.bank.balance + totalStockValue;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #c6e2f0;
  margin: 0px;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

p {
  font-family: "Maven Pro", Calibri, Helvetica;
  font-size: 1.25em;
  padding: 2% 2%;
  margin: auto 2%;
}

input {
  width: 5em;
}
.inline {
  margin: 0px;
  display: inline;
}

.floatright {
  float: right;
}
</style>
