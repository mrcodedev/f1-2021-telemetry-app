import { Countries } from "@models/countries"
import { TableColumns, TableData, TableProps } from "@models/table"
import { TeamName } from "@models/teams"
import { Component, ComponentInterface, h, JSX, Prop } from "@stencil/core"
import { getNameTeamWithMotor } from "@utils/teams"

@Component({
  tag: "f1-table-classification",
  styleUrl: "table-classification.pcss",
  scoped: true,
})
export class F1TableClassification implements ComponentInterface {
  @Prop() readonly header?: string = ""
  @Prop() readonly columns?: TableColumns[] = []
  @Prop() readonly data?: TableData[] = []

  render(): JSX.Element {
    return (
      <table>
        {this.renderHeader()}
        {this.renderBody()}
      </table>
    )
  }

  private renderHeader() {
    if (this.header) {
      return (
        <thead>
          <tr class="tr-head">
            <th colSpan={this.columns?.length ?? 0} class="f1-text-normal">
              {this.header}
            </th>
          </tr>
        </thead>
      )
    }
  }

  private renderBody() {
    return (
      <tbody>
        {this.data?.map(driver => {
          return (
            <tr>
              {this.columns?.map(column => {
                return (
                  <td class={`${driver[column.prop]}`}>
                    {this.tableTableData(column.prop, driver[column.prop])}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    )
  }

  private tableTableData(
    prop: TableProps,
    data?: string | number | TeamName | Countries
  ) {
    const tableTypeData = {
      driver_position: () => {
        return (
          <td class="driver_position">
            <div class="f1-text-bold square">{data}</div>
          </td>
        )
      },
      driver_team_color: () => {
        return (
          <td class="driver_team_color">
            <div class={`color ${data}`} />
          </td>
        )
      },
      driver_name: () => {
        if (typeof data === "string") {
          const name = data?.split(" ")
          return (
            <td class="driver_name">
              {name[0]}{" "}
              <span class="f1-text-bold">{name[1].toUpperCase()}</span>
            </td>
          )
        }
        return <td class="driver_name">{data}</td>
      },
      driver_country: () => {
        return (
          <td class="driver_country">
            <img src={`/assets/img/flags/${data}.jpg`} alt={String(data)} />
          </td>
        )
      },
      driver_team: () => {
        return (
          <td class="driver_team">{getNameTeamWithMotor(data as TeamName)}</td>
        )
      },
      driver_team_logo: () => {
        return (
          <td class="driver_team_logo">
            <img src={`/assets/img/teams/${data}.jpg`} alt={String(data)} />
          </td>
        )
      },
      driver_team_lap: () => {
        return <td class="driver_time_lap">{data}</td>
      },
      default: () => {
        return <td></td>
      },
    }

    return tableTypeData[prop]() || tableTypeData["default"]
  }
}
