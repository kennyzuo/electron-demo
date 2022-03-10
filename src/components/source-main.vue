<script setup>
import { ref, onMounted } from "vue"
import categorySelector from "./category-selector.vue"
import { fetchRepos } from "../api"

const repos = ref([])

const getRepos = async () => {
  repos.value = await fetchRepos()
}
onMounted(getRepos)

defineProps({
  msg: String,
})
</script>

<template>
  <div class="source-main">
    <div class="source-navbar">
      <div class="icon">
        <img
          src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/github.46c47564.png"
          alt=""
        />
      </div>

      <category-selector
        :data="['GitHub', 'Gitee', '博客园']"
      ></category-selector>

      <div class="right">
        <category-selector :data="['热门', '新生']"></category-selector>
        <category-selector :data="['今日', '本周', '本月']"></category-selector>
        <category-selector
          :data="['HTML', 'CSS', 'JavaScript']"
        ></category-selector>
      </div>
    </div>

    <div class="source-list">
      <ul class="list">
        <li class="item" v-for="repo in repos" :key="repo.id">
          <div class="repo">
            <div class="repo-header">
              {{ `${repo.username} / ${repo.reponame}` }}
            </div>
            <div class="repo-desc">
              {{ repo.description || "No description provide" }}
            </div>
            <div class="repo-meta">
              <span class="star">{{ `star ${repo.starCount}` }}</span>
              <span class="fork">{{ `fork ${repo.forkCount}` }}</span>
              <span class="lang">{{ repo.lang }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.right {
  display: flex;
}
.source-list {
  .list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.5rem;
    .item {
      width: 50%;
    }
  }

  .repo {
     margin: 0.5rem 0.5rem 0 0;
    padding: 0.5rem 0.75rem;
    background-color: rgba(244, 245, 245, 0.5);
    .repo-header {
      color: #1e80ff;
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    .repo-desc {
      color: #4e5969;
      font-size: 0.875rem;
      height: 2.75rem;
    }
    .repo-meta {
      color: #86909c;
      font-size: 0.75rem;
      margin-top: 0.5rem;
      .star, .fork {
        margin-right: 1.5rem;
      }
    }
  }
}
</style>
