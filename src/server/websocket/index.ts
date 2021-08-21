import express = require("express")
import http = require("http")
import WebSocket = require("ws")
import { connectWS } from "../config/config.env.json";

const SERVER = http.createServer(express);
const wss = new WebSocket.Server({ server: SERVER })

wss.on("connection", (ws) => {
  ws.on("open", (open: WebSocket) => {
    console.log("Server is OPEN")
    console.log(open)
  })

  ws.on("message", (message: WebSocket) => {
    console.log(`Message Client: ${message}`)
    wss.clients.forEach((client: WebSocket) => {
      if(client.readyState === WebSocket.OPEN) {
        console.log("JIJIJIJIJIJIJ")
        client.send(message)
      }
    })
  })

  ws.on("error", (error: WebSocket) => {
    console.log("[ERROR]: :(")
    console.log(error)
  })

  ws.on("close", (close) => {
    console.log("Client has disconnected!")
    console.log(close)
  })
})

SERVER.listen(connectWS.port, () =>  {
  console.log(`Server is listening on PORT: ${connectWS.port}`)
})

