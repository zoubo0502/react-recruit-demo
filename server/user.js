const express = require("express");
const Router = express.Router();
const model = require("./module");
const User = model.getModel("user");
const Chat = model.getModel("chat");
const utils = require("utility");

Router.get("/list", function(req, res) {
  const { type } = req.query;
  User.find({ type }, function(err, doc) {
    return res.json({ code: 0, data: doc });
  });
});

Router.post("/login", function(req, res) {
  const { name, password } = req.body;
  User.findOne({ name, password: utils.md5(password) }, function(err, doc) {
    if (!doc) {
      return res.json({ code: 1, msg: "username or password wrong" });
    }
    res.cookie("userid", doc.id);
    return res.json({ code: 0, data: doc });
  });
});

Router.post("/register", function(req, res) {
  const { name, password, type } = req.body;

  User.findOne({ name }, function(err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: "name exist" });
    }

    const userModel = new User({ name, type, password: utils.md5(password) });
    userModel.save(function(e, d) {
      if (e) {
        return res.json({ code: 1, msg: "bad backend" });
      }
      const { name, type, _id } = d;
      res.cookie("userid", _id);
      return res.json({ code: 0, data: { name, type, _id } });
    });
  });
});

Router.get("/info", function(req, res) {
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({ code: 1 });
  }
  User.findOne({ _id: userid }, function(err, doc) {
    if (err) {
      return res.json({ code: 1, msg: "backend down" });
    }
    if (doc) {
      return res.json({ code: 0, data: doc });
    }
  });
});

Router.post("/update", function(req, res) {
  const userid = req.cookies.userid;
  if (!userid) {
    return json.dumps({ code: 1 });
  }
  const body = req.body;
  User.findByIdAndUpdate(userid, body, function(err, doc) {
    const data = Object.assign(
      {},
      {
        user: doc.user,
        type: doc.type
      },
      body
    );
    return res.json({ code: 0, data });
  });
});

Router.get("/getmsglist", function(req, res) {
  const { userid } = req.cookies;
  Chat.find({}, function(err, doc) {
    if (!err) {
      return res.json({ code: 0, msgs: doc });
    }
  });
});

module.exports = Router;
