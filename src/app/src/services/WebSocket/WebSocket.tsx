import { Component, ComponentInterface, State, h, Host } from "@stencil/core"
import io from "socket.io-client"

@Component({
  tag: "f1-websocket",
})
export class WebSocket implements ComponentInterface {
  @State() connection: boolean = false

  componentWillLoad(): void {
    if (this.connection) {
      this.connection = false
    }

    this.startConnection()
  }

  render() {
    return (
      <Host>
        <div>
          Server Status: {this.connection ? "Conectado" : "Desconectado"}
        </div>
      </Host>
    )
  }

  private startConnection() {
    const socket = io("ws://localhost:20778", { transports: ["websocket"] })

    socket.on("connect", () => {
      socket.emit("server", "Client connected to the Server!!!")
      this.connection = true
    })

    socket.on("message", data => {
      console.log(JSON.parse(data))
    })

    socket.on("disconnect", () => {
      socket.emit("server", "Client disconnected to the Server!!!")
      this.connection = false
    })
  }
}
