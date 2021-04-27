<template>
  <div>
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
    <Stock name="pear" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <Stock name="bsas" />
    <p>Here's how both stocks performed</p>
    <!-- <Chart stock=pear />
  <Chart stock=BSAS /> -->
  </div>
</template>

<script setup>
import Stock from "./components/Stock.vue";
import state from "./state";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
