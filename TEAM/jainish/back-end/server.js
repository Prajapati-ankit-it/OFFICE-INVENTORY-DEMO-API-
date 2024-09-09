const express = require("express");
const app = express();
const mysql = require("mysql");
const crud = require("./routes/router");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

if (process.env.NODE_ENV !== "production") require("dotenv").config();

app.get("/", function (req, res) {
  res.send(
    "<h1> This is the home page.</h1>  <a href='http://127.0.0.1:2000/getUserList'>Get User List</a>"
  );
});

PORT = process.env.PORT || 1000;

app.listen(PORT, function () {
  console.log(`I am here and the PORT is ${PORT}`);
});

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL.");
});

crud(app, db);
