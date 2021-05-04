<template>
  <div>
    <h1>Game Over!</h1>
    <p>
      Your final Portfolio Value is: ${{displayNumber(calcPortValue())}}
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
  },
}
</script>
