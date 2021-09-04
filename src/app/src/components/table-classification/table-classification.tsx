import { DataClassification } from "@components/modules/classification/module-classification"
import { Component, ComponentInterface, h, Prop } from "@stencil/core"

@Component({
  tag: "f1-table-classification",
  styleUrl: "table-classification.pcss",
  scoped: true,
})
export class F1TableClassification implements ComponentInterface {
  @Prop() readonly tableTitle?: string = ""
  @Prop() readonly data?: DataClassification[] = []

  render() {
    return (
      <table>
        <thead>
          <tr class="tr-head">
            <th colSpan={6} class="f1-text-normal">
              {this.tableTitle}
            </th>
          </tr>
        </thead>
        <tbody class="f1-text-normal">
          <tr>
            <td class="position">
              <div class="square f1-text-bold">1</div>
            </td>
            <td class="team-color">
              <div class="color redbull" />
            </td>
            <td class="driver-name">
              Max <span class="f1-text-bold">VERSTAPPEN</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/netherlands.jpg" />
            </td>
            <td class="driver-team">Red Bull Racing Honda</td>
            <td class="logo-team">
              <img src="/assets/img/teams/red-bull.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">2</div>
            </td>
            <td class="team-color">
              <div class="color redbull" />
            </td>
            <td class="driver-name">
              Sergio <span class="f1-text-bold">PEREZ</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/mexico.jpg" />
            </td>
            <td class="driver-team">Red Bull Racing Honda</td>
            <td class="logo-team">
              <img src="/assets/img/teams/red-bull.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">3</div>
            </td>
            <td class="team-color">
              <div class="color alpine" />
            </td>
            <td class="driver-name">
              Fernando <span class="f1-text-bold">ALONSO</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/spain.jpg" />
            </td>
            <td class="driver-team">Alpine Renault</td>
            <td class="logo-team">
              <img src="/assets/img/teams/alpine.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">4</div>
            </td>
            <td class="team-color">
              <div class="color alpine" />
            </td>
            <td class="driver-name">
              Esteban <span class="f1-text-bold">OCON</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/france.jpg" />
            </td>
            <td class="driver-team">Alpine Renault</td>
            <td class="logo-team">
              <img src="/assets/img/teams/alpine.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">5</div>
            </td>
            <td class="team-color">
              <div class="color ferrari" />
            </td>
            <td class="driver-name">
              Carlos <span class="f1-text-bold">SAINZ</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/spain.jpg" />
            </td>
            <td class="driver-team">Ferrari</td>
            <td class="logo-team">
              <img src="/assets/img/teams/ferrari.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">6</div>
            </td>
            <td class="team-color">
              <div class="color ferrari" />
            </td>
            <td class="driver-name">
              Charles <span class="f1-text-bold">LECLERC</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/monaco.jpg" />
            </td>
            <td class="driver-team">Ferrari</td>
            <td class="logo-team">
              <img src="/assets/img/teams/ferrari.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">7</div>
            </td>
            <td class="team-color">
              <div class="color mclaren" />
            </td>
            <td class="driver-name">
              Lando <span class="f1-text-bold">NORRIS</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/great-britain.jpg" />
            </td>
            <td class="driver-team">Mclaren Mercedes</td>
            <td class="logo-team">
              <img src="/assets/img/teams/mclaren.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">8</div>
            </td>
            <td class="team-color">
              <div class="color mclaren" />
            </td>
            <td class="driver-name">
              Daniel <span class="f1-text-bold">RICCIARDO</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/australia.jpg" />
            </td>
            <td class="driver-team">Mclaren Mercedes</td>
            <td class="logo-team">
              <img src="/assets/img/teams/mclaren.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">9</div>
            </td>
            <td class="team-color">
              <div class="color mercedes" />
            </td>
            <td class="driver-name">
              Lewis <span class="f1-text-bold">HAMILTON</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/great-britain.jpg" />
            </td>
            <td class="driver-team">Mercedes</td>
            <td class="logo-team">
              <img src="/assets/img/teams/mercedes.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">10</div>
            </td>
            <td class="team-color">
              <div class="color mercedes" />
            </td>
            <td class="driver-name">
              Valteri <span class="f1-text-bold">BOTTAS</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/finland.jpg" />
            </td>
            <td class="driver-team">Mercedes</td>
            <td class="logo-team">
              <img src="/assets/img/teams/mercedes.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">11</div>
            </td>
            <td class="team-color">
              <div class="color alfa-romeo" />
            </td>
            <td class="driver-name">
              Kimi <span class="f1-text-bold">RAIKKONEN</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/finland.jpg" />
            </td>
            <td class="driver-team">Alfa Romeo</td>
            <td class="logo-team">
              <img src="/assets/img/teams/alfa-romeo.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">12</div>
            </td>
            <td class="team-color">
              <div class="color alfa-romeo" />
            </td>
            <td class="driver-name">
              Antonio <span class="f1-text-bold">GIOVINAZZI</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/italy.jpg" />
            </td>
            <td class="driver-team">Alfa Romeo</td>
            <td class="logo-team">
              <img src="/assets/img/teams/alfa-romeo.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">13</div>
            </td>
            <td class="team-color">
              <div class="color haas" />
            </td>
            <td class="driver-name">
              Mick <span class="f1-text-bold">SCHUMACHER</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/germany.jpg" />
            </td>
            <td class="driver-team">Haas</td>
            <td class="logo-team">
              <img src="/assets/img/teams/haas.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">14</div>
            </td>
            <td class="team-color">
              <div class="color haas" />
            </td>
            <td class="driver-name">
              Nikita <span class="f1-text-bold">MAZEPIN</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/russia.jpg" />
            </td>
            <td class="driver-team">Haas</td>
            <td class="logo-team">
              <img src="/assets/img/teams/haas.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">15</div>
            </td>
            <td class="team-color">
              <div class="color alpha-tauri" />
            </td>
            <td class="driver-name">
              Yuki <span class="f1-text-bold">TSUNODA</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/japan.jpg" />
            </td>
            <td class="driver-team">Alpha Tauri</td>
            <td class="logo-team">
              <img src="/assets/img/teams/alpha-tauri.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">16</div>
            </td>
            <td class="team-color">
              <div class="color alpha-tauri" />
            </td>
            <td class="driver-name">
              Pierre <span class="f1-text-bold">GASLY</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/france.jpg" />
            </td>
            <td class="driver-team">Alpha Tauri</td>
            <td class="logo-team">
              <img src="/assets/img/teams/alpha-tauri.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">17</div>
            </td>
            <td class="team-color">
              <div class="color williams" />
            </td>
            <td class="driver-name">
              George <span class="f1-text-bold">RUSELL</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/great-britain.jpg" />
            </td>
            <td class="driver-team">Williams</td>
            <td class="logo-team">
              <img src="/assets/img/teams/williams.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">18</div>
            </td>
            <td class="team-color">
              <div class="color williams" />
            </td>
            <td class="driver-name">
              Nicholas <span class="f1-text-bold">Latify</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/canada.jpg" />
            </td>
            <td class="driver-team">Williams</td>
            <td class="logo-team">
              <img src="/assets/img/teams/williams.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">19</div>
            </td>
            <td class="team-color">
              <div class="color aston-martin" />
            </td>
            <td class="driver-name">
              Sebastian <span class="f1-text-bold">VETTEL</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/germany.jpg" />
            </td>
            <td class="driver-team">Aston Martin</td>
            <td class="logo-team">
              <img src="/assets/img/teams/aston-martin.jpg" />
            </td>
          </tr>
          <tr>
            <td class="position">
              <div class="square f1-text-bold">20</div>
            </td>
            <td class="team-color">
              <div class="color aston-martin" />
            </td>
            <td class="driver-name">
              Lance <span class="f1-text-bold">STROLL</span>
            </td>
            <td class="driver-country">
              <img src="/assets/img/flags/canada.jpg" />
            </td>
            <td class="driver-team">Aston Martin</td>
            <td class="logo-team">
              <img src="/assets/img/teams/aston-martin.jpg" />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
