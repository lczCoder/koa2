// koa2 项目的入口文件
const Koa = require('koa2')
// 创建项目实例
const app = new Koa()
// 使用中间件
app.use(async(ctx)=>{
  ctx.response.body = 'hello, koa2'
})

app.listen(5050,()=>{
  console.log('koa2 服务启动成功!');
})