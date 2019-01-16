const express = require('express');
const userRouter = require('./user')

//类似mysql的表，mongo有文档和字段概念
// const User = mongoose.model('user', new mongoose.Schema({
//     username: {type: String, required: true},
//     age: {type: Number, required: true}
// }))
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
app.use('/user',userRouter)

app.listen(9030,()=>console.log('node app start at port 9030'))