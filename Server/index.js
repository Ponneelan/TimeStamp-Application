const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const connection = mysql.createConnection({
    host:'localhost',
    database:'Employee',
    user:'root',
    password:'root'
});

connection.connect();

const app = express();
app.use(cors());

app.get('/getall',(req,res)=>{
    res.set('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = 'select id,name,mobileNumber,email from Employee where isDeleted = ?'
    connection.query(sql,[0],(error,result)=>{
        if(error){
            console.warn(error);
        }else{
            res.json(result);
        }
        res.end();
    })
});

app.listen(3000, () => {
    console.log(`Server started on port:3000`);
});