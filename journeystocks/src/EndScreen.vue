<template>
  <div>
    <h1>Game Over!</h1>
    <p>
      Your final Portfolio Value is: ${{displayNumber(calcPortValue())}}
    </p>
    <p>
      You bought a total of: {{sharesBought()}} shares.
   </p>

   <p>
      You sold a total of: {{sharesSold()}} shares.
   </p>

   <p>
      You still own: {{sharesBought()-sharesSold()}} shares.
  </p>

    <button>
      <a href="/tutorial">Review Tutorial</a>
    </button>
    <button>
      <a href="/game">Try Again</a>
    </button>
  </div>
</template>

<script>
import {displayNumber} from './util.js';
import state from './state.js';


export default {
  methods: {
    displayNumber,
    calcPortValue() {
      let totalStockValue = 0;
      for (var [_, s] of Object.entries(state.stocks)) {
        totalStockValue += s.cost * s.shares;
      }
      return state.bank.balance + totalStockValue;
    },
    sharesBought() {
      let totalSharesBought = 0;
      for (var [_, s] of Object.entries(state.stocks)) {
        totalSharesBought += s.totSharesBought;
      }
      return totalSharesBought;
    },
    sharesSold() {
      let totalSharesSold = 0;
      for (var [_, s] of Object.entries(state.stocks)) {
        totalSharesSold += s.totSharesSold;
      }
      return totalSharesSold;
    },
  },
}
</script>
