const express = require('express');
const Router = express.Router();
const model = require('./module');
const User = model.getModel('user');
const utils = require('utility')

Router.get('/list', function(req, res){
  User.find({}, function(err, doc){
    return res.json(doc)
  })
})

Router.post('/login',function(req,res){
  const {name,password} = req.body;
  User.findOne({name,password:utils.md5(password)},function(err,doc){
    if (!doc) {
      return res.json({code:1,msg:'username or password wrong'})
    }
    return res.json({code:0,data:doc})
  })
})

Router.post('/register', function(req, res){
  console.log(req.body);
  const {name, password,type} = req.body;

  User.findOne({name}, function(err, doc){
    if (doc) {
      return res.json({code:1, msg:'name exist'})
    }
    User.create({name,password:utils.md5(password),type},function(e,d){
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