const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

app.use(cors());

const db = mysql.createConnection({

    host :"localhost",
    user : "Jadav Surbhi",
    database :"student" ,
    password : "Surbhi_Jadav_2831"
    
});
app.get("/", (req,res) => {
     const sql = "SELECT * FROM student";
     db.query(sql,(err,data) => {
         if(err) return res.json("error");
         return res.json(data);
     })
    res.json("Hello from Back-End")
}); 

// console.log(db);
// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log("mysql database connected successfully")
// });

app.listen(8081,()=>{
    console.log("listening");
})