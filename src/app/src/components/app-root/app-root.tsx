import { Component, h, JSX, State } from "@stencil/core"
import { Route, Router } from "@services/routes"
import WebSocket from "ws"

@Component({
  tag: "app-root",
  styleUrl: "app-root.pcss",
  shadow: true,
})
export class AppRoot {
  @State() webSocket?: any

  componentWillLoad(): void {
    this.startConnection()
  }

  render(): JSX.Element {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>
        <main>
          <Router.Switch>
            <Route path="/" render={() => <app-home />}></Route>
            {/* <Route
              path={match("/profile/:match")}
              render={({ match }) => <app-profile match={match} />}></Route> */}
          </Router.Switch>
        </main>
      </div>
    )
  }

  private startConnection() {
    this.webSocket = new WebSocket.Server({ host: "0.0.0.0", port: 20778 })

    this.webSocket.on("open", () => {
      this.webSocket.send(
        JSON.stringify({
          type: "connect",
          time: getTimeNow(),
          connection: true,
        })
      )
    })
  }
}

const getTimeNow = () => {
  const time = Date.now()
  const now = new Date(time)
  return now.toUTCString()
}
