<script setup>
import appNavbar from "./components/app-navbar.vue"
import appSearch from "./components/app-search.vue"
import appMain from "./components/app-main.vue"
</script>

<template>
  <div class="app-layout">
    <app-navbar></app-navbar>
    <app-search></app-search>
    <app-main></app-main>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background-color: #f4f5f5;
}
.app-layout {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>
