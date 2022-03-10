<script setup>
import sourceLeft from "./source-left.vue"
import sourceMain from "./source-main.vue"
import sourceAside from "./source-aside.vue"
</script>

<template>
  <div class="app-main">
    <source-left></source-left>
    <source-main></source-main>
    <!-- <source-aside></source-aside> -->
  </div>
</template>

<style lang="less">
.app-main {
  display: flex;
  flex: 1 1 auto;
  padding: 1rem 1rem 0;
  .source-left {
    background: #fff;
    flex: 0 0 25rem;
    margin-right: 0.75rem;
    border-radius: 0.125rem 0.125rem 0 0;
  }

  .source-main {
    background: #fff;
    flex: 1 1;
    border-radius: 0.125rem 0.125rem 0 0;
  }

  .source-aside {
    background: #fff;
    flex: 0 0 21rem;
    border-radius: 0.125rem 0.125rem 0 0;
  }

  .source-navbar {
    min-height: 2.75rem;
    border-radius: 2px 2px 0 0;
    z-index: 250;
    border-bottom: 1px solid #e5e6eb;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.75rem;
    font-size: 0.75rem;
    .icon {
      display: flex;
      width: 1.75rem;
      height: 1.75rem;
    }
  }
}
</style>
