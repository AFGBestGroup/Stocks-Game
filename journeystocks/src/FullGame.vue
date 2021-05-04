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
          <p>Money available for trading:</p>
        </div>
        <div class="col-sm">
          <p>Portfolio Value:</p>
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
    <div class="container">
      <div class="row">
        <div class="col-sm stock">
          <Stock name="pear" />
        </div>
        <div class="col-sm stock">
          <Stock name="doodle" />
        </div>
        <div class="col-sm stock">
          <Stock name="bsas" />
        </div>
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
    <p>Here's how both stocks performed</p>
  </div>
</template>


<script setup>
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


