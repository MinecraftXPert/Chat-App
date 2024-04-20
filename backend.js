const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname, "index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log("the user has disconnected");
  });
});

server.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
