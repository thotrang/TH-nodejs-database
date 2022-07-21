const mysql=require('mysql');
const http= require('http');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'demo',
    charset:'utf8_general_ci'
})
connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connect success');
    }

});
const sqlSelect='select * from product';
connection.query(sqlSelect,(err,results,filed)=>{
    if(err){
        console.log(err);
    }else{
        console.log(results);
    }
});
const sqlWhere='select * from product where id>2 limit 2';
connection.query(sqlWhere,(err,results)=>{
    if(err){
        console.log(err);
    }else{
        console.log(results);
    }
})

