const express = require('express');
const mongoose = require('mongoose');
//连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/react-recruit';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', ()=>console.log('mongo connect success'))
//类似mysql的表，mongo有文档和字段概念
const User = mongoose.model('user', new mongoose.Schema({
    username: {type: String, required: true},
    age: {type: Number, required: true}
}))
//新增数据
// User.create({
//     username: 'berg',
//     age: 18
// }, (err,doc)=>{
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })

const app = express();

app.get('/', function(req,res){
    res.send('<h1>hello</h1>')
})

app.get('/data',function(req,res){
   User.find({},(err,doc)=>{
       res.json(doc)
   })
})

app.listen(9030,()=>console.log('node app start at port 9030'))