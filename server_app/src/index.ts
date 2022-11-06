import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
const PORT = 8080;
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("user is connected ");
  socket.on("disconnect", () => {
    console.log("user disonnected");
  });
});
server.listen(PORT, () => {
  console.log(`listen to server on PORT ${PORT}`);
});
