// koa2 项目的入口文件
const Koa = require('koa2')
const router = require('./router')

// 创建项目实例
const app = new Koa()

// 使用中间件
app.use(router.routes(),router.allowedMethods())
//router.allowedMethods() 允许接收任何的请求类型 get post put ……

app.listen(5050,()=>{
  console.log('koa2 服务启动成功!');
})