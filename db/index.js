// 连接mysql数据库
let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  port: '3306',// 默认为3306
  user: "root",
  password: "lcz19971109",
  database: "fe-dev",
});

connection.connect();

connection.query("SELECT * FROM user", function (error, results, fields) {
  if (error) throw error;
  console.log('数据库连接成功！');
});

