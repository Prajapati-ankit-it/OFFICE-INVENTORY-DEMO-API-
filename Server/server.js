const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//import section 
const purchase = require('./src/purchase');
const stock = require('./src/stock');
const assigment = require('./src/assignment');


// console.log(HOST)
const db = mysql.createConnection({

    host :"localhost",
    user : "root",
    database :"office_inventory_system" ,
    password : "root123"
});
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("mysql darabase connected successfully")
}); 

purchase(app,db);
stock(app,db);
assigment(app,db);

port = 3000;
app.listen(port,function() {
    console.log(`app listening on ${port}`);
});