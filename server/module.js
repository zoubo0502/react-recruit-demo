const mongoose = require('mongoose');

//连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/react-recruit-demo';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', ()=>console.log('mongo connect success'));

const models = {
  user: {
    'name':{type:String, require: true},
    'password':{type:String, require: true},
    'type':{type:String, require: true},
    'avatar':{type:String},
    'desc':{type:String},
    'tittle':{type:String},
    'company':{type:String},
    'money':{type:String}
  },
  chat: {

  }
}

for (const m in models) {
 mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function(name){
    return mongoose.model(name)
  }
}