// koa2 路由配置入口文件
const Router = require('koa-router')

// 创建路由表
const router = new Router()

router.get('/',async (ctx)=>{
  ctx.body = '首页'
})

router.get('/list',async (ctx)=>{
  ctx.body = '列表页面'
})

module.exports = router