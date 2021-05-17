<template>
  <div>
    <a href="/">Home</a>
    <a class="navbar-item" href="/tutorial">Tutorial</a>
    <a class="navbar-item" href="/game">Full Game</a>
    <router-view></router-view>
  </div>
</template>

<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "vue-neat-modal/dist/vue-neat-modal.css";
</script>

<style>
.navbar-item {
  margin-left: 10px;
}
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
  margin: 2em;
}

body {
  background: #baeff8;
  margin: 0px;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
}

h3{
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

img {
  margin-left: 20px;
  margin-right: 20px;
}

.smallImg {
  width: 20%;
  height: 20%;
}
.inline {
  margin: 0px;
  display: inline;
}

.floatright {
  float: right;
}

.floatleft {
  float: left;
}

.blackborder {
	border-style: solid;
	border-width: 3px;
	border-color: black;
	border-radius: 5px;

}

.clearfix{
	overflow: auto;
}
</style>