const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: true,
});

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("message", ({ message, id, time, chatKey }) => {
    console.log(message, id, time, chatKey);
    io.emit("message", { message, id, time, chatKey });
  });
});

http.listen(4000, function () {
  console.log("listening on port 4000");
});
