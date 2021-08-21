import { Router } from "./routes"

class RouterService {
  async go(route = "/") {
    Router.push(route)
  }
}

export const routerService = new RouterService()
