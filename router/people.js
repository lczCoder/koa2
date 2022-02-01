const Router = require("koa-router");

const people = new Router();

people.post("/", async (ctx) => {});

people.post("/boy", async (ctx) => {
  const { name, address } = ctx.request.body;
  ctx.body = {
    name,
    address,
  };
});

people.get("/girl", async (ctx) => {
  ctx.body = "女孩";
});

module.exports = people;
