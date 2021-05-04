<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/game">Full Game</router-link>

    <router-view></router-view>
  </div>
</template>

<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
</script>

<style>
.p-padding {
  padding: 2% 2%;
  margin: auto 2%;
}

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

.floatleft{
  float: left;
}
</style>