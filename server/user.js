const express = require('express');
const Router = express.Router();
const model = require('./module');
const User = model.getModel('user')

Router.get('/list', function(req, res){
  User.find({}, function(err, doc){
    return res.json(doc)
  })
})

Router.post('/register', function(req, res){
  console.log(req.body);
  const {name, password,type} = req.body;

  User.findOne({name}, function(err, doc){
    if (doc) {
      return res.json({code:1, msg:'name exist'})
    }
    User.create({name,password,type},function(e,d){
      if (e) {
        return res.json({code:1,msg:'bad backend'})
      }
      return res.json({code:0})
    })
  })
})

Router.get('/info',function(req,res){
  return res.json({code:1})
})

module.exports = Router