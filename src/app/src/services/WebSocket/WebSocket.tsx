import { Component, ComponentInterface, State } from "@stencil/core"

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
    const ws = new window.WebSocket("ws://localhost:20778")

    ws.onopen = () => {
      this.connection = true
    }

    ws.onmessage = data => {
      this.data = data.data
      console.log(JSON.parse(this.data))
    }

    ws.onclose = () => {
      console.log("CERRADO :(")
    }
  }
}
