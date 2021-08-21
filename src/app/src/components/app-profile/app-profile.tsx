import { Component, Prop, h } from "@stencil/core"

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.pcss",
  shadow: true,
})
export class AppProfile {
  @Prop() match?: string

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase()
    }
    return ""
  }

  render() {
    if (this.match) {
      return (
        <div class="app-profile">
          <p>
            Hello! My name is {this.normalize(this.match)}. My name was passed
            in through a route param!
          </p>
        </div>
      )
    }
  }
}
