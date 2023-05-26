const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host:'localhost',
    database:'Employee',
    password:'root',
    user:'root'
})

connection.connect();

app.get('/getall',(req,res)=>{
    res.set('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    let query = 'select id,name,mobileNumber,email from Employee where isDeleted = ?';
    connection.query(query,[0],(error,data)=>{
        if(error){
            console.error(error);
        }else{
            res.json(data);
        }
        res.end();
    })
})

app.listen(3000,()=>{
    console.log('app runnig on port 3000');
})

