const mongoose = require("mongoose");

//连接mongo
const DB_URL = "mongodb://127.0.0.1:27017/react-recruit-demo";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => console.log("mongo connect success"));

const models = {
  user: {
    name: { type: String, require: true },
    password: { type: String, require: true },
    type: { type: String, require: true },
    avatar: { type: String },
    desc: { type: String },
    title: { type: String },
    company: { type: String },
    money: { type: String }
  },
  chat: {}
};

for (const m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name);
  }
};

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
