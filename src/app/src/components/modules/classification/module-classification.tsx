import { Component, ComponentInterface, h, Host } from "@stencil/core"

export interface DataClassification {
  driver_position: number
  driver_team: string
  driver_name: string
  driver_country: string
}

const dataTable: DataClassification[] = [
  {
    driver_position: 1,
    driver_team: "redbull",
    driver_name: "Max Verstappen",
    driver_country: "netherlands",
  },
  {
    driver_position: 2,
    driver_team: "redbull",
    driver_name: "Sergio Perez",
    driver_country: "mexico",
  },
  {
    driver_position: 3,
    driver_team: "alpine",
    driver_name: "Fernando Alonso",
    driver_country: "spain",
  },
  {
    driver_position: 4,
    driver_team: "alpine",
    driver_name: "Esteban Ocon",
    driver_country: "france",
  },
  {
    driver_position: 5,
    driver_team: "ferrari",
    driver_name: "Carlos Sainz",
    driver_country: "spain",
  },
  {
    driver_position: 6,
    driver_team: "ferrari",
    driver_name: "Charles Leclerc",
    driver_country: "monaco",
  },
  {
    driver_position: 7,
    driver_team: "mclaren",
    driver_name: "Lando Norris",
    driver_country: "great-britain",
  },
  {
    driver_position: 8,
    driver_team: "mclaren",
    driver_name: "Daniel Ricciardo",
    driver_country: "australia",
  },
  {
    driver_position: 9,
    driver_team: "mercedes",
    driver_name: "Lewis Hamilton",
    driver_country: "great-britain",
  },
  {
    driver_position: 10,
    driver_team: "mercedes",
    driver_name: "Valteri Bottas",
    driver_country: "finland",
  },
  {
    driver_position: 11,
    driver_team: "alfa-romeo",
    driver_name: "Kimi Raikkonen",
    driver_country: "finland",
  },
  {
    driver_position: 12,
    driver_team: "alfa-romeo",
    driver_name: "Antonio Giovinazzi",
    driver_country: "italy",
  },
  {
    driver_position: 13,
    driver_team: "haas",
    driver_name: "Mick Schumacher",
    driver_country: "germany",
  },
  {
    driver_position: 14,
    driver_team: "haas",
    driver_name: "Nikita Mazepin",
    driver_country: "russia",
  },
  {
    driver_position: 15,
    driver_team: "alpha-tauri",
    driver_name: "Yuki Tsunoda",
    driver_country: "japan",
  },
  {
    driver_position: 16,
    driver_team: "alpha-tauri",
    driver_name: "Pierre Gasly",
    driver_country: "france",
  },
  {
    driver_position: 17,
    driver_team: "williams",
    driver_name: "George Rusell",
    driver_country: "great-britain",
  },
  {
    driver_position: 18,
    driver_team: "williams",
    driver_name: "Nicholas Latify",
    driver_country: "canada",
  },
  {
    driver_position: 19,
    driver_team: "aston-martin",
    driver_name: "Sebastian Vettel",
    driver_country: "germany",
  },
  {
    driver_position: 20,
    driver_team: "aston-martin",
    driver_name: "Lance Stroll",
    driver_country: "canada",
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
        <f1-table-classification tableTitle="Classification" data={dataTable} />
      </Host>
    )
  }
}
