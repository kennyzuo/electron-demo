<script setup>
import { ref } from "vue"

defineProps({
  msg: String,
})
</script>

<template>
  <div class="app-navbar">
    <div class="logo"></div>
    <div class="book-banner">
      <span class="title">掘金小册</span>
      <div class="panel">
        <div class="panel-inner">
          <div class="book-info"></div>
          <div class="consume"></div>
        </div>
      </div>
    </div>
    <div class="download-button">
      <span class="title">下载掘金APP</span>
      <div class="panel">
        <div class="pannel-inner"></div>
      </div>
    </div>
    <div class="channel-selector">
      <div class="curr">
        <div class="title">前端</div>
        <div class="arrow"></div>
      </div>
      <div class="channel-list"></div>
    </div>
    <ul class="tool-list">
      <li class="tool-item">
        <svg
          class="icon-night"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-6d1f5b88=""
        >
          <path
            d="M13 2C13.6567 2 14.3059 2.06344 14.9409 2.18842L16.488 2.49289L15.553 3.76254C14.5494 5.12552 14 6.7699 14 8.5C14 12.3391 16.725 15.617 20.4453 16.3492L21.9921 16.6536L21.0575 17.9232C19.1853 20.4667 16.2196 22 13 22C7.47715 22 3 17.5228 3 12C3 6.47715 7.47715 2 13 2Z"
            data-v-6d1f5b88=""
          ></path>
        </svg>
      </li>
      <li class="tool-item">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-1a1f1e0b=""
        >
          <path
            d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V8H2V3Z"
            data-v-1a1f1e0b=""
          ></path>
          <path
            d="M9 22L3 22C2.44772 22 2 21.5523 2 21L2 9.99993L9 9.99994L9 22Z"
            data-v-1a1f1e0b=""
          ></path>
          <path
            d="M22 21C22 21.5523 21.5523 22 21 22L11 22L11 9.99993L22 9.99993L22 21Z"
            data-v-1a1f1e0b=""
          ></path>
        </svg>
      </li>
      <li class="tool-item">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-8e6f4044=""
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0001 1.09094C12.809 1.09094 13.607 1.17997 14.3838 1.35486L14.832 1.45578L16.2299 4.64258L19.6717 4.26633L19.9828 4.60521C21.072 5.79163 21.8893 7.20671 22.3684 8.75213L22.5034 9.18779L22.2349 9.55649L20.4554 12L22.5034 14.8123L22.3684 15.2479C21.8893 16.7934 21.072 18.2084 19.9828 19.3949L19.6717 19.7337L16.2299 19.3575L14.832 22.5443L14.3838 22.6452C13.607 22.8201 12.809 22.9091 12.0001 22.9091C11.191 22.9091 10.3928 22.8201 9.61586 22.6451L9.16756 22.5441L8.98302 22.1233L7.77022 19.3575L4.32851 19.7337L4.01738 19.3949C2.928 18.2083 2.11072 16.793 1.63163 15.2474L1.49658 14.8117L1.76517 14.443L3.54473 12L1.49658 9.18838L1.63163 8.75267C2.11072 7.20704 2.928 5.79177 4.01738 4.60521L4.32851 4.26633L7.77022 4.64258L9.16756 1.45593L9.61586 1.35498C10.3928 1.18001 11.191 1.09094 12.0001 1.09094ZM12.0001 7.45457C14.5019 7.45457 16.5282 9.49061 16.5282 12C16.5282 14.5094 14.5019 16.5455 12.0001 16.5455C9.49827 16.5455 7.47192 14.5094 7.47192 12C7.47192 9.49061 9.49827 7.45457 12.0001 7.45457ZM9.29004 12C9.29004 10.4928 10.5043 9.27277 12 9.27277C13.4957 9.27277 14.71 10.4928 14.71 12C14.71 13.5072 13.4957 14.7273 12 14.7273C10.5043 14.7273 9.29004 13.5072 9.29004 12Z"
            data-v-8e6f4044=""
          ></path>
        </svg>
      </li>
      <li class="tool-item">
        <svg
          class="signin"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-027ef3d4=""
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.78735 2.14772C7.70669 2.10458 7.62668 2.0816 7.40602 2.0816H6.69515C6.4745 2.0816 6.39448 2.10458 6.31382 2.14772C6.23315 2.19086 6.16984 2.25417 6.1267 2.33483C6.08356 2.4155 6.06059 2.49551 6.06059 2.71617V3.5666H3.09059C2.54382 3.5666 2.10059 4.00984 2.10059 4.5566V21.3866C2.10059 21.9334 2.54382 22.3766 3.09059 22.3766H20.9106C21.4573 22.3766 21.9006 21.9334 21.9006 21.3866V4.5566C21.9006 4.00984 21.4573 3.5666 20.9106 3.5666H17.9406V2.71617C17.9406 2.49551 17.9176 2.4155 17.8745 2.33483C17.8313 2.25417 17.768 2.19086 17.6874 2.14772C17.6067 2.10458 17.5267 2.0816 17.306 2.0816H16.5951C16.3745 2.0816 16.2945 2.10458 16.2138 2.14772C16.1332 2.19086 16.0698 2.25417 16.0267 2.33483C15.9836 2.4155 15.9606 2.49551 15.9606 2.71617V3.5666H8.04059V2.71617C8.04059 2.49551 8.01761 2.4155 7.97447 2.33483C7.93133 2.25417 7.86802 2.19086 7.78735 2.14772ZM5.58301 11.4C5.58301 11.1239 5.80687 10.9 6.08301 10.9H7.83301C8.10915 10.9 8.33301 11.1239 8.33301 11.4V12.6C8.33301 12.8762 8.10915 13.1 7.83301 13.1H6.08301C5.80687 13.1 5.58301 12.8762 5.58301 12.6V11.4ZM10.625 11.4C10.625 11.1239 10.8489 10.9 11.125 10.9H12.875C13.1511 10.9 13.375 11.1239 13.375 11.4V12.6C13.375 12.8762 13.1511 13.1 12.875 13.1H11.125C10.8489 13.1 10.625 12.8762 10.625 12.6V11.4ZM6.08301 14.5667C5.80687 14.5667 5.58301 14.7906 5.58301 15.0667V16.2667C5.58301 16.5429 5.80687 16.7667 6.08301 16.7667H7.83301C8.10915 16.7667 8.33301 16.5429 8.33301 16.2667V15.0667C8.33301 14.7906 8.10915 14.5667 7.83301 14.5667H6.08301ZM10.625 15.0667C10.625 14.7906 10.8489 14.5667 11.125 14.5667H12.875C13.1511 14.5667 13.375 14.7906 13.375 15.0667V16.2667C13.375 16.5429 13.1511 16.7667 12.875 16.7667H11.125C10.8489 16.7667 10.625 16.5429 10.625 16.2667V15.0667ZM16.167 10.9C15.8909 10.9 15.667 11.1239 15.667 11.4V12.6C15.667 12.8762 15.8909 13.1 16.167 13.1H17.917C18.1931 13.1 18.417 12.8762 18.417 12.6V11.4C18.417 11.1239 18.1931 10.9 17.917 10.9H16.167ZM15.667 15.0667C15.667 14.7906 15.8909 14.5667 16.167 14.5667H17.917C18.1931 14.5667 18.417 14.7906 18.417 15.0667V16.2667C18.417 16.5429 18.1931 16.7667 17.917 16.7667H16.167C15.8909 16.7667 15.667 16.5429 15.667 16.2667V15.0667Z"
            data-v-027ef3d4=""
          ></path>
        </svg>
      </li>
    </ul>
    <a class="avatar" href="https://juejin.cn/user/1398234519967422"></a>
  </div>
</template>

<style lang="less" scoped>
.app-navbar {
  display: flex;
  align-items: center;
  flex: 0 0 3.375rem;
  user-select: none;
  cursor: default;
  padding: 0 1.5rem;
  background: #fff;
  .title {
    cursor: pointer;
    color: #86909c;
  }
}

.logo {
  height: 1.75rem;
  width: 7.35rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/brand.82c24770.svg);
}

.book-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2.5rem;
}

.channel-selector {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin-left: auto;
  margin-right: 1.25rem;
  background: rgb(30, 128, 255);
  font-size: 0.875rem;
  border-radius: 0.125rem;
  .curr {
    display: flex;
    align-items: center;
    text-align: center;
    height: 2rem;
    .title {
      color: #fff;
      width: 5.25rem;
    }
    .arrow {
      width: 1.75rem;
      height: 100%;
      border-left: 1px solid #388eff;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url(https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/arrow.93c83c94.svg);
      background-size: unset;
    }
  }
}

.tool-list {
  display: flex;
  list-style: none;
  align-items: center;
  margin-right: 0.25rem;
  padding: 0;
  .tool-item {
    display: flex;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 20px;
    }
    svg {
      fill: rgb(30, 128, 255);
    }
  }
}
.avatar {
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://p9-passport.byteacctimg.com/img/mosaic-legacy/3792/5112637127~300x300.image);
}
</style>
