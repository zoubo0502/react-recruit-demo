const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('<h1>hello</h1>')
})

app.listen(9030,()=>console.log('node app start at port 9030'))