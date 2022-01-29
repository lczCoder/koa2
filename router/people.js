const Router = require("koa-router");

const people = new Router();

people.get("/", async (ctx) => {
  ctx.body = "人类";
});

people.get("/boy", async (ctx) => {
  ctx.body = "男孩";
});

people.get("/girl", async (ctx) => {
  ctx.body = "女孩";
});

module.exports = people;
