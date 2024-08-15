// Import the required modules.
const express = require("express");
const app = express();
const mysql = require("mysql");
const crud = require('./routes/router');

// Use middleware to parse JSON and URL-encoded data.
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Use the dotenv module to load environment variables from a.env file.
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// Define the route for the home page.
app.get("/", function (req, res) {
  res.send("<h1> This is the home page.</h1>");
});

// Start the server and log the port number. 1000 is set to be default port if no PORT environment variable is provided.
PORT = process.env.PORT || 1000;

// Start the server.
app.listen(PORT, function () {
  console.log(`I am here and the PORT is ${PORT}`);
});

// Create a MySQL connection using the provided credentials.
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Connect to the MySQL database.
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL.");
});

crud(app, db);