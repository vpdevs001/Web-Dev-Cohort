const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let items = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  checked: false,
}));

io.on("connection", (socket) => {
  socket.on("toggle_item", (id) => {
    id = Number(id);

    if (!items[id]) return;

    items[id].checked = !items[id].checked;

    io.emit("item_toggled", {
      id,
      checked: items[id].checked,
    });
  });
});

server.listen(3000, () => {
  console.log("server running on 3000");
});
