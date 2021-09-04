import { Countries } from "./countries";
import { TeamName } from "./teams";

export interface TableData {
  driver_position?: number
  driver_team_color?: TeamName,
  driver_name?: string
  driver_country?: Countries
  driver_team?: TeamName 
  driver_team_logo?: TeamName
  driver_team_lap?: string
}

export interface TableColumns {
  prop: TableProps
}

export type TableProps =
| "driver_position"
| "driver_team_color"
| "driver_name"
| "driver_country"
| "driver_team"
| "driver_team_logo"
| "driver_team_lap"