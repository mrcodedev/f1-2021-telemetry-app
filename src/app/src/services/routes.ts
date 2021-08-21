import { FunctionalComponent } from "@stencil/core"
import { createRouter } from "@altafonte/router"
export { InternalRouterState } from "@altafonte/router/dist/types"
export { href, match, Route } from "@altafonte/router"

export type RouterSwitch = FunctionalComponent<Record<string, unknown>>

export const Router = createRouter()
