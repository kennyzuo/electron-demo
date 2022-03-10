const express = require("express")
const axios = require("axios")

const router = express.Router()

const getArticles = async (req, res) => {
  const config = {
    method: "post",
    url: "https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      cate_id: "6809637776263217160",
      client_type: 6587,
      cursor: "0",
      id_type: 2,
      limit: 20,
      sort_type: 300,
    }),
  }

  const data = await axios(config).then((res) => res.data.data)

  res.status(200).json({
    msg: "ok",
    data: data.map(({ article_id, article_info, tags }) => {
      return {
        id: article_id,
        title: article_info.title,
        digg_count: article_info.digg_count,
        comment_count: article_info.comment_count,
        tags: tags.map((tag) => tag.tag_name),
      }
    }),
  })
}

const getRepos = async (req, res, next) => {
  const config = {
    method: "post",
    url: "https://e.juejin.cn/resources/github",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      category: "upcome",
      lang: "javascript",
      limit: 30,
      offset: 0,
      period: "month",
    }),
  }

  const data = await axios(config).then((res) => res.data.data)

  console.log(data)

  res.status(200).json({
    msg: "ok",
    data,
  })
}

router.get("/articles", getArticles)

router.get("/repos", getRepos)

module.exports = router
