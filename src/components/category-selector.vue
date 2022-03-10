<script setup>
import { ref } from "vue"
import vClickOutside from "../directives/click-outside.js"

defineProps({
  msg: String,
  data: Array,
})

const active = ref(false)
const curr = ref("")

const show = () => {
  active.value = !active.value
}

const hide = () => {
  active.value = false
}

const change = (item) => {
  curr.value = item
}
</script>

<template>
  <div class="category-box" :class="{ active: active }">
    <div v-click-outside="hide" class="category-selector" @click="show">
      <div class="curr">
        <span class="title">{{ curr || data[0] }}</span>
        <div class="arrow">
          <svg
            class="arrow-icon"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-259a63e5=""
          >
            <path
              d="M5.34919 5.71075C5.15303 5.91082 4.83089 5.91082 4.63494 5.71075L0.627304 1.61875C0.317409 1.30233 0.541867 0.768799 0.984877 0.768799L9.0045 0.7688C9.44751 0.7688 9.6714 1.30233 9.36117 1.61875L5.34919 5.71075Z"
              data-v-259a63e5=""
            ></path>
          </svg>
        </div>
      </div>
      <ul class="category-list">
        <li
          class="category-item"
          v-for="item in data"
          :key="item"
          @click="change(item)"
        >
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
.category-box {
  flex: 1 1;
  margin-left: 0.75rem;
  user-select: none;
  font-size: 0.75rem;
  .category-selector {
    display: flex;
    align-items: center;
    position: relative;
    height: 1.5rem;
    width: 4.75rem;
    .curr {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      background: #e8f3ff;
      padding: 0 0.5rem;
      box-sizing: border-box;
      cursor: pointer;
      .title {
        line-height: 1;
        color: #1e80ff;
      }
      .arrow {
        margin-left: auto;
        display: flex;
        align-items: center;
        height: 1.125rem;
        transition: transform 0.15s linear;
        svg {
          fill: #1e80ff;
        }
      }
    }
  }

  .category-list {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(34 42 48 / 10%);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    z-index: 500;
    .category-item {
      display: flex;
      align-items: center;
      height: 1.875rem;
      color: #86909c;
      padding-left: 0.675rem;
      &:hover {
        background: #e8f3ff;
      }
    }
  }

  &.active {
    .arrow {
      transform: scaleY(-1);
    }

    .category-list {
      display: block;
    }
  }
}
</style>
