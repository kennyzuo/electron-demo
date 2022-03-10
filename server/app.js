/**
 * @author zue
 * @description 创建 express 应用，解决接口跨域问题
 */

const express = require("express")
const cors = require("cors")
const router = require("./router")


const app = express()

// cors 跨域中间件
app.use(cors())

// 路由挂载
app.use('/api', router)

app.listen(9090, () => {
  console.log(`Server is running at http:localhost:9090`)
})