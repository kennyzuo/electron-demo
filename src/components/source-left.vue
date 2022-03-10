<script setup>
import { ref, onMounted } from "vue"
import categorySelector from "./category-selector.vue"
import { fetchArticles } from "../api"

const articles = ref([])
const getArticles = async () => {
  articles.value = await fetchArticles()
}

defineProps({
  msg: String,
})

onMounted(getArticles)
</script>

<template>
  <div class="source-left">
    <div class="source-navbar">
      <div class="icon">
        <img
          src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg"
          alt=""
        />
      </div>

      <category-selector
        :data="['综合', '前端', '后端', 'IOS', 'Andriod', '人工智能']"
      ></category-selector>

      <div class="order-selector">
        <span class="hottest">推荐</span>
        <span class="divider"></span>
        <span class="latest">最新</span>
      </div>
    </div>

    <div class="article-list">
      <ul class="list">
        <li class="item" v-for="item in articles" :key="item.id">
          <div class="article-item">
            <div class="title">{{ item.title }}</div>
            <div class="meta-box">
              <div class="article-tags">
                <span class="article-tag" v-for="tag in item.tags" :key="tag">{{
                  tag
                }}</span>
              </div>
              <div class="extra-info">
                <span class="digg">{{ `赞 ${item.digg_count}` }}</span>
                <div class="dot"></div>
                <span class="comments">{{ `评论 ${item.comment_count}` }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.order-selector {
  display: flex;
  align-items: center;
  .hottest,
  .latest {
    width: 2.75rem;
    text-align: center;
    line-height: 1;
    cursor: pointer;
  }
  .divider {
    width: 1px;
    background: #e5e6eb;
    height: 0.875rem;
  }
}

.article-list {
  flex: 1 1 auto;
  overflow-y: hidden;
  position: relative;
  padding: 0 0.75rem;
  .list {
    .item {
      position: relative;
      cursor: pointer;
      padding-top: 0.5rem;
      padding-bottom: 0.25rem;
    }
  }

  .article-item {
    padding: 0.5rem 1.25rem;
    font-size: 0.75rem;
    color: #86909c;
    .title {
      font-size: 0.875rem;
      font-weight: 500;
      color: #1d2129;
    }
    .meta-box {
      display: flex;
      margin-top: 0.375rem;
      .article-tag {
        margin-right: 0.375rem;
      }
      .dot {
        margin: 0 0.375rem;
        width: 2px;
        height: 2px;
        margin: 0 6px;
        border-radius: 50%;
        background: #86909c;
      }
      .extra-info {
        display: flex;
        margin-left: auto;
        align-items: center;
      }
    }
  }
}
</style>
