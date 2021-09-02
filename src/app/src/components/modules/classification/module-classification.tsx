import { Component, h } from "@stencil/core"

@Component({
  tag: "f1-module-classification",
  styleUrl: "module-classification.pcss",
  scoped: true,
})
export class F1ModuleClassification {
  render() {
    return (
      <table>
        <thead>
          <tr class="tr-head">
            <th colSpan={6} class="f1-text-normal">
              Classification
            </th>
          </tr>
        </thead>
        <tbody class="f1-text-normal">
          <tr>
            <td class="position">
              <span class="square f1-text-bold">1</span>
            </td>
            <td>
              <span class="color-team" />
            </td>
            <td>
              Max <span class="f1-text-bold">VERSTAPPEN</span>
            </td>
            <td>NET</td>
            <td>Red Bull Racing Honda</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/redbull.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <span class="square f1-text-bold">2</span>
            </td>
            <td>
              <span class="color-team" />
            </td>
            <td>
              Sergio <span class="f1-text-bold">PEREZ</span>
            </td>
            <td>NET</td>
            <td>Red Bull Racing Honda</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/redbull.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">3</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Fernando <span class="f1-text-bold">ALONSO</span>
            </td>
            <td>ES</td>
            <td>Alpine Renault</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/alpine.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">4</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Esteban <span class="f1-text-bold">OCON</span>
            </td>
            <td>FRA</td>
            <td>Alpine Renault</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/alpine.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">5</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Carlos <span class="f1-text-bold">SAINZ</span>
            </td>
            <td>ES</td>
            <td>Ferrari</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/ferrari.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">6</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Charles <span class="f1-text-bold">LECLERC</span>
            </td>
            <td>FRA</td>
            <td>Ferrari</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/ferrari.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">7</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Lando <span class="f1-text-bold">NORRIS</span>
            </td>
            <td>GB</td>
            <td>Mclaren Mercedes</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/mclaren.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">8</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Daniel <span class="f1-text-bold">RICCIARDO</span>
            </td>
            <td>ITA</td>
            <td>Mclaren Mercedes</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/mclaren.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">9</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Lewis <span class="f1-text-bold">HAMILTON</span>
            </td>
            <td>GB</td>
            <td>Mercedes</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/mercedes.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">10</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Valteri <span class="f1-text-bold">BOTTAS</span>
            </td>
            <td>NRW</td>
            <td>Mercedes</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/mercedes.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">11</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Kimi <span class="f1-text-bold">RAIKKONEN</span>
            </td>
            <td>GB</td>
            <td>Alfa Romeo</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/alfa-romeo.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">12</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Antonio <span class="f1-text-bold">GIOVINAZZI</span>
            </td>
            <td>NRW</td>
            <td>Alfa Romeo</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/alfa-romeo.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">13</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Mick <span class="f1-text-bold">Haas</span>
            </td>
            <td>GB</td>
            <td>Haas</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/haas.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">14</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Nikita <span class="f1-text-bold">MAZEPIN</span>
            </td>
            <td>NRW</td>
            <td>Haas</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/haas.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">15</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Yuki <span class="f1-text-bold">TSUNODA</span>
            </td>
            <td>GB</td>
            <td>Alpha Tauri</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/alpha-tauri.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">16</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Pierre <span class="f1-text-bold">GASLY</span>
            </td>
            <td>NRW</td>
            <td>Alpha Tauri</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/alpha-tauri.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">17</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              George <span class="f1-text-bold">RUSELL</span>
            </td>
            <td>GB</td>
            <td>Williams</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/williams.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">18</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Nicholas <span class="f1-text-bold">Latify</span>
            </td>
            <td>NRW</td>
            <td>Williams</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/williams.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">19</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Sebastian <span class="f1-text-bold">VETTEL</span>
            </td>
            <td>GB</td>
            <td>Aston Martin</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/aston-martin.jpg" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">20</span>
            </td>
            <td>
              {" "}
              <span class="color-team" />
            </td>
            <td>
              Lance <span class="f1-text-bold">STROLL</span>
            </td>
            <td>NRW</td>
            <td>Aston Martin</td>
            <td class="logo-team">
              <img src="/assets/img/teams/final/aston-martin.jpg" />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
