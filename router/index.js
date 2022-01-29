// koa2 路由配置入口文件
const Router = require('koa-router')
const people = require('./people')

// 创建路由表
const router = new Router()

router.use('/people',people.routes(),people.allowedMethods())

module.exports = router