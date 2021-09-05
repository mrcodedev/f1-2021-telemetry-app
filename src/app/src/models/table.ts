import { Countries } from "./countries";
import { TeamName } from "./teams";
import { TyreType } from "./tyres";

export interface TableData {
  driver_position?: number
  driver_team_color?: TeamName,
  driver_name?: string
  driver_country?: Countries
  driver_team?: TeamName 
  driver_team_logo?: TeamName
  driver_time_lap?: string
  driver_tyre?: TyreType
  driver_penalty?: number
  driver_finish?: boolean
  driver_time_difference?: string
  driver_fast_lap: boolean
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
| "driver_time_lap"
| "driver_tyre"
| "driver_penalty"
| "driver_finish"
| "driver_time_difference"
| "driver_fast_lap"
