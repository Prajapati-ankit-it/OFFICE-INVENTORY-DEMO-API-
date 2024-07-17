// ---------------------------------STOCK ---------------------------------------------------------------------//

function stock(app,db){
//stock get request 
app.get('/GS',(req,res) => {
    let query = "SELECT * FROM Stock";
    db.query(query,(err,result)=> {
        if(err){
            res.json({msg: err});
        }
        else
        {
            res.json(result);
        }
    })
});

//stock get by id request
app.get('/GS/:id',(req,res) => {
    let query = `SELECT * FROM stock WHERE stock_id = ${req.params.id}`;
    console.log(query);
    db.query(query,(err,result)=> {
        if(err){
            res.json({msg: err});
        }
        else
        {
            res.json(result);
        }
    })
});

//stock post request
app.post('/PS',(req,res) => {
    let query =req.body;
    console.log(query);
    db.query("insert into stock set ?",query,(err,result)=> {
        if(err){
            res.json({msg: err});
        }
        else
        {
            res.json(result);
        }
    })
});

//stock put request
app.put('/PUTS',(req,res) => {
    let query =req.body;
    console.log(query);
    db.query("insert into stock set ?",query,(err,result)=> {
        if(err){
            res.json({msg: err});
        }
        else
        {
            res.json(result);
        }
    })
});

//stock delete request
app.delete('/DS/:id',(req,res) => {
    let query =req.params.id;
    db.query("DELETE FROM stock WHERE stock_id = ?",query,(err,result) => {
        if(err){
        res.json({msg: err});
        }
        else{
            res.json(result);
        }
    })
});

//stock update request
app.post("/US/:id",(req, res) =>{

    let query = `update stock set item_name = '${req.body.item_name}', quantity= '${req.body.quantity}' where stock_id=${req.params.id}`;
    console.log(query)
    let postData = req.body;
    db.query(query,postData,(err,result)=>{
        if(err){
            res.json({msg: err});
        }
        else{
            res.json({msg: "updated successfully"});
        }
    });
});
}

module.exports = stock;