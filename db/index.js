let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lcz19971109",
  database: "fe-dev",
});

connection.connect();

connection.query("SELECT * FROM user", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results, fields);
});
