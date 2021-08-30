import { Component, h, JSX } from "@stencil/core"
import { Route, Router } from "@services/routes"

@Component({
  tag: "app-root",
  styleUrl: "app-root.pcss",
  shadow: true,
})
export class AppRoot {
  render(): JSX.Element {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>
        <main>
          <Router.Switch>
            <Route path="/" render={() => <app-home />} />
            {/* <Route
              path={match("/profile/:match")}
              render={({ match }) => <app-profile match={match} />}></Route> */}
            <Route
              path="/classification"
              render={() => <f1-module-classification />}
            />
          </Router.Switch>
        </main>
      </div>
    )
  }
}
