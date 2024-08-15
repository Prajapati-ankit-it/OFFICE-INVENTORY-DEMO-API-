const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
// app.use()
const db = mysql.createConnection({

    host :"localhost",
    user : "root",
    database :"CURD_NODE" ,
    password : "root123"
});
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("mysql darabase connected successfully")
});

app.get("/", (req,res) => {
    const sql = "SELECT * FROM student";
    db.query(sql,(err,data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
    res.json("Hello from Back-End")
}); 

port = 4000;
app.listen(port,() => {
    console.log(`Server started on port ${port}`);
})