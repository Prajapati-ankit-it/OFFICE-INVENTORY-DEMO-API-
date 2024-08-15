// Performing CRUD operations
function crud_operations(app, db) {
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
        res.json({
          msg: "User Created Successfully",
          user_id: result.insertId,
        });
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
  app.get("/deleteUser/:id", (req, res) => {
    query = `DELETE FROM users WHERE id = ${req.params.id};`;

    db.query(query, (err, result) => {
      if (err) {
        res.json({ msg: err });
      } else {
        res.json({ msg: "User Deleted Successfully", id: result.id });
      }
    });
  });
}

// Exporting CRUD operations function
module.exports = crud_operations;