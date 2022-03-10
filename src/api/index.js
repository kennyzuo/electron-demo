import axios from "axios"
export const fetchArticles = () => {
  return axios.get("http://localhost:9090/api/articles").then(res => {
    return res.data.data
  })
}

export const fetchRepos = () => {
  return axios.get("http://localhost:9090/api/repos").then(res => {
    return res.data.data
  })
}
