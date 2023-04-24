const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret",
  database: "auth_sample",
});

module.exports = db;
