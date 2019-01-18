const express = require("express");
const userRouter = require("./user");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", function(socket) {
  console.log("user login");
  socket.on("sendmsg", function(data) {
    console.log(data);
    io.emit("recvmsg", data);
  });
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", userRouter);

server.listen(9030, () => console.log("node app start at port 9030"));
