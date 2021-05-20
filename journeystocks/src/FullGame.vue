<style>
slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

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
          <p>
            ${{ displayNumber(state.bank.balance) }}
            <transition name="slide-fade" appear>
              <span
                :key="changeInBalance"
                v-bind:style="[
                  'font-size: 80%',
                  state.bank.balance - state.bank.lastBalance > 0
                    ? 'color: green;'
                    : 'color: red;',
                ]"
                >{{ changeInBalance }}
              </span>
            </transition>
          </p>
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
          <!-- <Chart name="pear" /> -->
        </div>
        <div class="col-sm stock">
          <Stock name="doodle" />
          <!-- <Chart name="doodle" /> -->
        </div>
        <div class="col-sm stock">
          <Stock name="bsas" />
          <!-- <Chart name="bsas" /> -->
        </div>
      </div>
    </div>
    <RandomEvents />
  </div>
</template>


<script setup>
import Stock from "./components/Stock.vue";
// import Chart from "./components/Chart.vue";
import RandomEvents from "./components/RandomEvents.vue";
</script>

<script>
import state from "./state";
import { displayNumber, calcPortValue } from "./util";
export default {
  data() {
    return {
      state,
    };
  },
  computed: {
    changeInBalance() {
      let change = state.bank.balance - state.bank.lastBalance;

      if (change == 0) return;
      if (change > 0) return "+$" + displayNumber(change);
      else return "-$" + displayNumber(change).slice(1);
    },
  },
  methods: {
    displayNumber,
    calcPortValue,
  },
};
</script>


