const Router = require("koa-router");
const db = require("../db");
const path = require('path');

const people = new Router();

people.post("/", async (ctx) => {});

// 处理json默认数据
people.post("/boy", async (ctx) => {
  let sql = "INSERT INTO info (name,age) VALUES(?,?)";
  let sqlParams = ["zz", "24"];
  db.query(sql, sqlParams, (error, results) => {
    if (error) throw error;
    console.log("数据库插入成功", results);
    db.end();
  });

  const { name, address } = ctx.request.body;
  ctx.body = {
    name,
    address,
  };
});

// 处理formdata格式的数据
people.post("/girl", async (ctx) => {
  const { age } = ctx.request.body;
  ctx.body = {
    age
  };
});

people.post('/file',async (ctx)=>{
  const file = ctx.request.files.imgs;
  const basename = path.basename(file.path);
  ctx.body = { url: `${ctx.origin}/uploads/${basename}` };
})


module.exports = people;
