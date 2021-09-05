import { Countries } from "@models/countries"
import { TableColumns, TableData, TableProps } from "@models/table"
import { TeamName } from "@models/teams"
import {
  Component,
  ComponentInterface,
  h,
  Host,
  JSX,
  Prop,
} from "@stencil/core"
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
      <Host>
        <table>
          {this.renderHeader()}
          {this.renderBody()}
        </table>
      </Host>
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
    data?: string | number | TeamName | Countries | boolean
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
        if (typeof data !== "string") {
          return
        }

        const name = data?.split(" ")

        if (name.length > 1) {
          return (
            <td class="driver_name">
              {name[0]}{" "}
              <span class="f1-text-bold">{name[1].toUpperCase()}</span>
            </td>
          )
        }

        return <td class="driver_name f1-text-bold">{data}</td>
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
        if (data !== "default") {
          return (
            <td class="driver_team_logo">
              <img src={`/assets/img/teams/${data}.jpg`} alt={String(data)} />
            </td>
          )
        }
        return <td class="driver_team_logo"></td>
      },
      driver_time_lap: () => {
        if (!data) {
          return <td class="driver_time_lap">--:--.---</td>
        }
        return <td class="driver_time_lap">{data}</td>
      },
      driver_time_difference: () => {
        if (data) {
          return <td class="driver_time_difference">+ {data}</td>
        }
        return <td class="driver_time_difference">-</td>
      },
      driver_tyre: () => {
        return (
          <td class="driver_tyre">
            <img src={`/assets/img/tyres/${data}.png`} alt={String(data)} />
          </td>
        )
      },
      driver_penalty: () => {
        return (
          <td class="driver_penalty">
            {data ? (
              <img
                src={`/assets/img/race-flags/penalty.png`}
                alt={String(data)}
              />
            ) : (
              ""
            )}
            {data ? <div class="time_penalty">{data}s</div> : ""}
          </td>
        )
      },
      driver_finish: () => {
        return (
          <td class="driver_finish">
            {data ? (
              <img
                src={`/assets/img/race-flags/finish.png`}
                alt={String(data)}
              />
            ) : (
              ""
            )}
          </td>
        )
      },
      default: () => {
        return <td>{data}</td>
      },
    }

    return tableTypeData[prop]() || tableTypeData["default"]
  }
}
