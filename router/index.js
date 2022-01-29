// koa2 路由配置入口文件
const Router = require("koa-router");
const people = require("./people");

// 创建路由表
const router = new Router();

// 路由模块
router.use("/people", people.routes(), people.allowedMethods());

// 路由重定向
router.redirect("/", "/people");

module.exports = router;
