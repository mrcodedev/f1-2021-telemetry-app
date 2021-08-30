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
            <td>logo</td>
          </tr>
          <tr>
            <td>
              <span class="square f1-text-bold">2</span>
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
            <td>logo</td>
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
              Carlos <span class="f1-text-bold">SAINZ</span>
            </td>
            <td>ES</td>
            <td>Ferrari</td>
            <td>logo</td>
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
              Lando <span class="f1-text-bold">NORRIS</span>
            </td>
            <td>GB</td>
            <td>Mclaren Mercedes</td>
            <td>logo</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
