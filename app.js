const express = require("express");
const cors = require("cors"); // cho phép bên ngoài truy cập vào cái api bên trong app
const app = express();
const connectDb = require("./db");
const port = 5000;
const http = require("http");
const router_weather = require("./routes");

// create new server
const server = http.createServer(app);

// socket io realtime
const { Server } = require("socket.io");

// init new server socket
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// test connection
io.on("connection", (socket) => {
  console.log("a user connected");
  io.sockets.emit("hi", "everyone");
});

app.use(cors());
app.use(express.json()); // format dữ liệu gửi lên qua dạng json
app.use(express.urlencoded());
app.use(router_weather);

app.get("/event-add-new-weather", (req, res) => {
  try {
    io.emit("new-weather", { success: true });

    res.send("hello");
  } catch (error) {
    io.emit("new-weather", { success: false });
  }
});

server.listen(port, () => {
  connectDb();
  console.log(`Server listening on port ${port}`);
});
