<template>
  <div>
    <h1>Game Over!</h1>
    <p>
      Your final Portfolio Value is: ${{displayNumber(calcPortValue())}}
    </p>
    <p>
      You bought a total of {{sharesBought()}} shares.
   </p>

   <p>
      You sold a total of {{sharesSold()}} shares.
   </p>

   <p>
      You still own {{sharesBought()-sharesSold()}} shares after 1 year.
  </p>

    <button>
      <a href="/">Back to Homepage</a>
    </button>
    <button>
      <a href="/tutorial">Review Tutorial</a>
    </button>
    <button>
      <a href="/game">Try Again</a>
    </button>

    <p>
      Here are some links to try out if you want to learn more about the stock market:
      <span>
        <br>
        <br>
        <a href="https://www.edutopia.org/article/10-free-financial-literacy-games-high-school-students">10 Free Financial Literacy Games for High School Students</a>
        <br>
        <br>
        <a href="https://www.saveandinvest.org/educate-youth/lesson-plans-and-assessments">Financial Literacy Lesson Plans and Assessments</a>
    </span>
  </p>
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
