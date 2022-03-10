<script setup>
import { ref } from "vue"

defineProps({
  msg: String,
})
</script>

<template>
  <div class="app-search">
    <div class="search-input">
      <input type="text" class="search-input-inner" placeholder="请输入关键字搜索"/>
      <div class="search-selector">
        <img
          src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/bing.efab636f.png"
          class="logo curr"
        />
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-search {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(30, 128, 255);
}
.search-input {
  position: relative;
  display: flex;
  align-items: center;
  height: 2.5rem;
  box-sizing: border-box;
  margin: 1.5rem 0;
  width: 40%;
}
input.search-input-inner {
  height: 100%;
  width: 100%;
  border: none;
  border: none;
  padding: 0;
  outline: 0;
  border-radius: 0.125rem;
  padding-left: 3rem;
  padding-right: 0.725rem;
}
.search-selector {
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center; 
  .logo {
    width: 1.75rem;
    height: 1.75rem;
  }
}
</style>
