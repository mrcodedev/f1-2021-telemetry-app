import { Component, ComponentInterface, State } from "@stencil/core"
import io from "socket.io-client"

@Component({
  tag: "f1-websocket",
})
export class WebSocket implements ComponentInterface {
  @State() connection: boolean = false
  @State() triangulo: boolean = false
  private data?: any

  componentWillLoad(): void {
    if (this.connection) {
      this.connection = false
    }

    this.startConnection()
  }

  render() {
    return this.connection ? "CONECTADO" : "DESCONECTADO"
  }

  private startConnection() {
    const socket = io("ws://localhost:20778", { transports: ["websocket"] })

    socket.on("connect", () => {
      socket.emit("server", "Client connected to the Server!!!")
      this.connection = true
    })

    socket.on("message", data => {
      this.data = data
      console.log(JSON.parse(this.data))
    })

    socket.on("disconnect", () => {
      socket.emit("server", "Client disconnected to the Server!!!")
      this.connection = false
    })
  }
}
