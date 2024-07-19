// --------------------------------- PURCHASE ---------------------------------------------------------------------//

function purchase(app,db){
// purchase GET request
    app.get('/GP', (req, res) => {
        let query = "SELECT * FROM Purchase";

        db.query(query,(err,result)=> {
            if(err){
                res.json({msg: err});
            }
            else
            {
                res.json(result);
            }
        })    
    })

    // purchaase GetBy: Id//
    app.get('/GPI/:id', (req, res) => {
        let query = `SELECT * FROM Purchase WHERE purchase_id = ${req.params.id}`;
        console.log(query);
        db.query(query,(err,result)=> {
            if(err){
                res.json({msg: err});
            }
            else{
            res.json(result);
            }
        })    
    })

//purchase post request
    app.post("/PP", (req, res) => {
        let query = req.body;

        console.log(query);
        db.query("insert into Purchase set ?",query,(err,result)=>{
        if(err){
            res.json({msg: err});
          }
        else{
            res.json(result);
        }
    })
});

//purchase put request
app.put("/PPUT", (req, res) => {
    let query = req.body;

    console.log(query);
    db.query("insert into Purchase set ?",query,(err,result)=>{
        if(err){
            res.json({msg: err});
        }
        else{
            res.json(result);
        }
    })
});

//purchase delete request
app.delete('/PDELETE/:id', (req,res) => {
    let query =  "DELETE FROM Purchase WHERE purchase_id = ?";
    db.query(query,[req.params.id],(err,result)=> {
        if(err){
            res.json({msg: err});
        }
        else
        {
            res.json(result);
        }
    })
});

//purchase update request
app.post("/UP/:id",(req, res) =>{

    let query = `update purchase set item_name = '${req.body.item_name}', quantity= '${req.body.quantity}', purchase_date = '${req.body.purchase_date}',vendor_name = '${req.body.vendor_name}',purchase_price = '${req.body.purchase_price}' where purchase_id=${req.params.id}`;
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
module.exports = purchase;