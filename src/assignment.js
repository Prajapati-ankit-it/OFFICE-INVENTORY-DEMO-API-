// --------------------------------- ASSIGNMENT ---------------------------------------------------------------------//

//assignment get request
function assignment(app,db){
app.get('/GA',(req,res) => {
    let query = "SELECT * FROM Assignment";
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

//assignment get by id request
app.get('/GA/:id',(req,res) => {
    let query = `SELECT * FROM Assignment where assignment_id =${req.params.id} `;
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

// assignment post request
app.post('/PA',(req,res) => {
    let query = req.body;
    // console.log(query);
    db.query("insert into Assignment set?",query,(err,result)=> {
        if(err){
            res.json({msg: err});
        }
        else
        {
            res.json(result);
        }
    })
});

//assignment put request
app.put('/PutA',(req,res) => {
    let query = req.body;
    // console.log(query);
    db.query("insert into Assignment set?",query,(err,result)=> {
        if(err){
            res.json({msg: err});
        }
        else
        {
            res.json(result);
        }
    })
});

//assigment delete request by id
app.delete('/DA/:id',(req,res) => {
    let query =req.params.id;
    db.query("DELETE FROM assignment WHERE assignment_id = ?",query,(err,result) => {
        if(err){
        res.json({msg: err});
        }
        else{
            res.json(result);
        }
    })
});

//assignment update request
app.post('/UA/:id',(req, res) =>{

    let query = `update stock set item_name = '${req.body.item_name}', assigned_to= '${req.body.assigned_to}',expected_return_date= '${req.body.expected_return_date}', return_date= '${req.body.return_date}', status= '${req.body.status}' where assignment_id=${req.params.id}`;
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

module.exports = assignment;