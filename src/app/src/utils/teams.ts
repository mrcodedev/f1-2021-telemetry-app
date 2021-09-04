import { TeamName } from './../models/teams';

export const getNameTeamWithMotor = (team?: TeamName) => {
  if(!team) {
    return
  }
  
  const teams = {
    "redbull": "Red Bull Racing Honda",
    "mercedes": "Mercedes",
    "alpine": "Alpine Renault",
    "ferrari": "Ferrari",
    "mclaren": "McLaren Mercedes",
    "alfa-romeo": "Alfa Romeo Racing Ferrari",
    "alpha-tauri": "AlphaTauri Honda",
    "williams": "Williams Mercedes",
    "aston-martin": "Aston Martin Mercedes",
    "haas": "Haas Ferrari"
  }

  return teams[team]
}