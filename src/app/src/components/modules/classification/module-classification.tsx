import { TableColumns, TableData } from "@models/table"
import { Component, ComponentInterface, h, Host } from "@stencil/core"

const dataTable: TableData[] = [
  {
    driver_position: 1,
    driver_team_color: "redbull",
    driver_name: "Max Verstappen",
    driver_country: "netherlands",
    driver_team: "redbull",
    driver_team_logo: "redbull",
  },
  {
    driver_position: 2,
    driver_team_color: "redbull",
    driver_name: "Sergio Perez",
    driver_country: "mexico",
    driver_team: "redbull",
    driver_team_logo: "redbull",
  },
  {
    driver_position: 3,
    driver_team_color: "alpine",
    driver_name: "Fernando Alonso",
    driver_country: "spain",
    driver_team: "alpine",
    driver_team_logo: "alpine",
  },
  {
    driver_position: 4,
    driver_team_color: "alpine",
    driver_name: "Esteban Ocon",
    driver_country: "france",
    driver_team: "alpine",
    driver_team_logo: "alpine",
  },
  {
    driver_position: 5,
    driver_team_color: "ferrari",
    driver_name: "Carlos Sainz",
    driver_country: "spain",
    driver_team: "ferrari",
    driver_team_logo: "ferrari",
  },
  {
    driver_position: 6,
    driver_team_color: "ferrari",
    driver_name: "Charles Leclerc",
    driver_country: "monaco",
    driver_team: "ferrari",
    driver_team_logo: "ferrari",
  },
  {
    driver_position: 7,
    driver_team_color: "mclaren",
    driver_name: "Lando Norris",
    driver_country: "great-britain",
    driver_team: "mclaren",
    driver_team_logo: "mclaren",
  },
  {
    driver_position: 8,
    driver_team_color: "mclaren",
    driver_name: "Daniel Ricciardo",
    driver_country: "australia",
    driver_team: "mclaren",
    driver_team_logo: "mclaren",
  },
  {
    driver_position: 9,
    driver_team_color: "mercedes",
    driver_name: "Lewis Hamilton",
    driver_country: "great-britain",
    driver_team: "mercedes",
    driver_team_logo: "mercedes",
  },
  {
    driver_position: 10,
    driver_team_color: "mercedes",
    driver_name: "Valteri Bottas",
    driver_country: "finland",
    driver_team: "mercedes",
    driver_team_logo: "mercedes",
  },
  {
    driver_position: 11,
    driver_team_color: "alfa-romeo",
    driver_name: "Kimi Raikkonen",
    driver_country: "finland",
    driver_team: "alfa-romeo",
    driver_team_logo: "alfa-romeo",
  },
  {
    driver_position: 12,
    driver_team_color: "alfa-romeo",
    driver_name: "Antonio Giovinazzi",
    driver_country: "italy",
    driver_team: "alfa-romeo",
    driver_team_logo: "alfa-romeo",
  },
  {
    driver_position: 13,
    driver_team_color: "haas",
    driver_name: "Mick Schumacher",
    driver_country: "germany",
    driver_team: "haas",
    driver_team_logo: "haas",
  },
  {
    driver_position: 14,
    driver_team_color: "haas",
    driver_name: "Nikita Mazepin",
    driver_country: "russia",
    driver_team: "haas",
    driver_team_logo: "haas",
  },
  {
    driver_position: 15,
    driver_team_color: "alpha-tauri",
    driver_name: "Yuki Tsunoda",
    driver_country: "japan",
    driver_team: "alpha-tauri",
    driver_team_logo: "alpha-tauri",
  },
  {
    driver_position: 16,
    driver_team_color: "alpha-tauri",
    driver_name: "Pierre Gasly",
    driver_country: "france",
    driver_team: "alpha-tauri",
    driver_team_logo: "alpha-tauri",
  },
  {
    driver_position: 17,
    driver_team_color: "williams",
    driver_name: "George Rusell",
    driver_country: "great-britain",
    driver_team: "williams",
    driver_team_logo: "williams",
  },
  {
    driver_position: 18,
    driver_team_color: "williams",
    driver_name: "Nicholas Latify",
    driver_country: "canada",
    driver_team: "williams",
    driver_team_logo: "williams",
  },
  {
    driver_position: 19,
    driver_team_color: "aston-martin",
    driver_name: "Sebastian Vettel",
    driver_country: "germany",
    driver_team: "aston-martin",
    driver_team_logo: "aston-martin",
  },
  {
    driver_position: 20,
    driver_team_color: "aston-martin",
    driver_name: "Lance Stroll",
    driver_country: "canada",
    driver_team: "aston-martin",
    driver_team_logo: "aston-martin",
  },
]

const columns: TableColumns[] = [
  {
    prop: "driver_position",
  },
  {
    prop: "driver_team_color",
  },
  {
    prop: "driver_name",
  },
  {
    prop: "driver_country",
  },
  {
    prop: "driver_team",
  },
  {
    prop: "driver_team_logo",
  },
]

@Component({
  tag: "f1-module-classification",
  styleUrl: "module-classification.pcss",
  scoped: true,
})
export class F1ModuleClassification implements ComponentInterface {
  render() {
    return (
      <Host>
        <f1-table-classification
          header="Classification"
          columns={columns}
          data={dataTable}
        />
      </Host>
    )
  }
}
