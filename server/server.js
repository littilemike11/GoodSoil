import express from "express";
const app = express();
import cors from "cors";
const PORT = 3000;
// socket.io setup
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const io = new Server(server, {
  cors: {
    // host react runs on
    origin: `http://localhost:5173`,
  },
});

// app.get("/", (req, res) => {
//   res.sendFile("/frontend/index.html", { root: ".." });
// });

io.on("connection", (socket) => {
  console.log(`${socket.id}a user connected`);
  socket.on("send_message", (data) => {
    console.log(data);
    socket.broadcast.emit("receive_message", data);
  });
  socket.on("disconnect", () => {
    console.log(`${socket.id} user disconnected`);
  });
});

server.listen(PORT, async () => {
  //   await connectDb().catch(console.dir);
  console.log(`Express API started: http://localhost:${PORT}`);
});
