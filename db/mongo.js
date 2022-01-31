// 连接mongodb数据库
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/fe-dev";
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});
