// mysql数据库入口
let mysql = require("mysql");

// 数据库配置项
let connection = mysql.createConnection({
  host: "localhost",
  port: "3306", // 默认为3306
  user: "root",
  password: "lcz19971109",
  database: "fe-dev",
});

// 连接数据库
connection.connect((err)=> {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('数据库启动成功!');
});
// connection.query("SELECT * FROM user", function (error, results) {
//   if (error) throw error;
//   console.log("数据库连接成功", results);
// });

// 导出
module.exports = connection;