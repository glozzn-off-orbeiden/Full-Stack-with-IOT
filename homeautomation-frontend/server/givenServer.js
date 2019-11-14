const express = require("express");
const app = express(); //givenServer
const server = require("http").Server(app); //givenServer
const io = require("socket.io")(server);

server.listen(4000); //we ve to change app.listen(80) to our port No.!

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
io.on("connection", function(socket) {
  console.log("server.js of socket.io is connected & id No. is : ", socket.id);
  socket.on("update_content", () => {
    console.log("update_content");
    io.emit("update_content");
  });
});

/* io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
}); */

/* app.get("/", function(req, res, next) {
res.sendFile(__dirname + "/index.html");
}); */
