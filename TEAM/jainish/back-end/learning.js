// 0. Import the required modules.
const express = require("express");
const app = express();
const mysql = require("mysql");

// 1. Use middleware to parse JSON and URL-encoded data.
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// 2. Use the dotenv module to load environment variables from a.env file.
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// 3. Define the route for the home page.
app.get("/", function (req, res) {
  res.send("<h1> This is the home page.</h1>");
});

// 4. log the port number. 1000 is set to be default port if no PORT environment variable is provided.
PORT = process.env.PORT || 1000;

// 5. Start the server.
app.listen(PORT, function () {
  console.log(`I am here and the PORT is ${PORT}`);
});

// 6. Create a MySQL connection using the provided credentials.
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// 7. Connect to the MySQL database.
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL.");
});

// 8. Performing CRUD operations

//--Read Operations --------------------------------
app.get("/getUserList", (req, res) => {
  let query = "SELECT * FROM users;";
  db.query(query, (err, result) => {
    if (err) {
      res.json({ msg: err });
    } else {
      res.json({ Users: result });
    }
  });
});

//--Create Operations --------------------------------
app.post("/newUser", (req, res) => {
  query = "INSERT INTO users SET ?;";

  let postData = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
  };

  db.query(query, postData, (err, result) => {
    if (err) {
      res.json({ msg: err });
    } else {
      res.json({ msg: "User Created Successfully", user_id: result.insertId });
    }
  });
});

//--Update Operations --------------------------------
app.post("/updateUser/:id", (req, res) => {
  query = `UPDATE users SET name = '${req.body.name}', email = '${req.body.email}', mobile = ${req.body.mobile} WHERE id = ${req.params.id};`;

  db.query(query, (err, result) => {
    if (err) {
      res.json({ msg: err });
    } else {
      res.json({ msg: "User Updated Successfully", id: result.id });
    }
  });
});

//--Delete Operations --------------------------------
app.delete("/deleteUser/:id", (req, res) => {
  query = `DELETE FROM users WHERE id = ${req.params.id};`;

  db.query(query, (err, result) => {
    if (err) {
      res.json({ msg: err });
    } else {
      res.json({ msg: "User Deleted Successfully", id: result.id });
    }
  });
});