import express = require("express")
import http = require("http")
import * as socketio from "socket.io";
import { connectWS } from "../config/config.env.json";

const server = http.createServer(express);
const io = new socketio.Server(server, { transports : ['websocket'] })

io.on("connection", (socket) => {
  console.log("Client is connected")

  socket.on("message", (message) => {
    socket.broadcast.emit("message", message)
  })

  socket.on("error", (error) => {
    console.log("[ERROR]: :(")
    console.log(error)
  })

  socket.on("disconnect", () => {
    console.log("Client has disconnected!")
  })
})

server.listen({port: connectWS.port, server: connectWS.address}, () =>  {
  console.log(`Server is listening on PORT: ${connectWS.address}:${connectWS.port}`);
})

