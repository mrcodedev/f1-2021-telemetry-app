import {
  PacketCarDamageParser,
  PacketCarSetupDataParser,
  PacketCarStatusDataParser,
  PacketCarTelemetryDataParser,
  PacketEventDataParser,
  PacketFinalClassificationDataParser,
  PacketLapDataParser,
  PacketLobbyInfoDataParser,
  PacketMotionDataParser,
  PacketParticipantsDataParser,
  PacketSessionDataParser,
  PacketSessionHistoryDataParser,
} from '../parsers';
import {
  CarDamageData,
  CarSetupData,
  CarStatusData,
  CarTelemetryData,
  FinalClassificationData,
  LapData,
  LapHistoryData,
  LobbyInfoData,
  MarshalZone,
  MotionData,
  PacketHeader,
  ParticipantData,
  TyreDamage,
  TyreStintHistoryData,
  TyreWear,
  WeatherForecastSample,
} from './packets';

export interface Options {
  port?: number;
  forwardAddresses?: Address[] | undefined;
  bigintEnabled?: boolean;
  skipParsing?: boolean;
  address?: string;
}

export interface Address {
  port: number;
  ip?: string;
}

export interface ParsedMessage {
  packetID: string;
  packetData:
    | PacketSessionDataParser
    | PacketMotionDataParser
    | PacketCarDamageParser
    | PacketSessionHistoryDataParser
    | PacketLapDataParser
    | PacketEventDataParser
    | PacketParticipantsDataParser
    | PacketCarSetupDataParser
    | PacketCarTelemetryDataParser
    | PacketCarStatusDataParser
    | PacketFinalClassificationDataParser
    | PacketLobbyInfoDataParser
    | null;
}

export interface Parsed {
  m_header: PacketHeader;
  m_packetId: number;
  m_carIdx: number;
  m_numLaps: number;
  m_numTyreStints: number;
  m_bestLapTimeLapNum: number;
  m_bestSector1LapNum: number;
  m_bestSector2LapNum: number;
  m_bestSector3LapNum: number;
  m_lapHistoryData: LapHistoryData[];
  m_weather: number;
  m_trackTemperature: number;
  m_airTemperature: number;
  m_totalLaps: number;
  m_trackLength: number;
  m_sessionType: number;
  m_trackId: number;
  m_era: number;
  m_formula: number;
  m_sessionTimeLeft: number;
  m_sessionDuration: number;
  m_pitSpeedLimit: number;
  m_gamePaused: number;
  m_isSpectating: number;
  m_spectatorCarIndex: number;
  m_sliProNativeSupport: number;
  m_numMarshalZones: number;
  m_marshalZones: MarshalZone[];
  m_safetyCarStatus: number;
  m_networkGame: number;
  m_numWeatherForecastSamples: number;
  m_weatherForecastSamples: WeatherForecastSample[];
  m_tyreStintsHistoryData: TyreStintHistoryData[];
  packetID: string;
  m_numCars: number;
  m_participants: ParticipantData[];
  m_aiControlled: number;
  m_driverId: number;
  m_raceNumber: number;
  m_carMotionData: MotionData[];
  m_numPlayers: number;
  m_lobbyPlayers: LobbyInfoData[];
  m_aiController: number;
  m_teamId: number;
  m_nationality: number;
  m_name: string;
  m_readyStatus: string;
  m_classificationData: FinalClassificationData[];
  m_position: number;
  m_gridPosition: number;
  m_points: number;
  m_numPitStops: number;
  m_resultStatus: number;
  m_bestLapTime: number;
  m_totalRaceTime: number;
  m_penaltiesTime: number;
  m_numPenalties: number;
  m_tyreStintsActual: number[];
  m_tyreStintsVisual: number[];
  m_timeOffset: number;
  m_speed: number;
  m_throttle: number;
  m_steer: number;
  m_brake: number;
  m_clutch: number;
  m_gear: number;
  m_tyresPressure: number[];
  m_brakesTemperature: number[];
  m_tyresSurfaceTemperature: number[];
  m_tyresInnerTemperature: number[];
  m_engineRPM: number;
  m_drs: number;
  m_revLightsPercent: number;
  m_engineTemperature: number;
  m_buttonStatus: number;
  m_carTelemetryData: CarTelemetryData[];
  m_mfdPanelIndex: number;
  m_mfdPanelIndexSecondaryPlayer: number;
  m_suggestedGear: number;
  m_eventStringCode: string;
  m_frontWing: number;
  m_rearWing: number;
  m_onThrottle: number;
  m_offThrottle: number;
  m_frontCamber: number;
  m_rearCamber: number;
  m_frontToe: number;
  m_rearToe: number;
  m_frontSuspension: number;
  m_rearSuspension: number;
  m_frontAntiRollBar: number;
  m_rearAntiRollBar: number;
  m_frontSuspensionHeight: number;
  m_rearSuspensionHeight: number;
  m_brakePressure: number;
  m_brakeBias: number;
  m_frontTyrePressure: number;
  m_rearTyrePressure: number;
  m_ballast: number;
  m_fuelLoad: number;
  m_tractionControl: number;
  m_antiLockBrakes: number;
  m_fuelMix: number;
  m_frontBrakeBias: number;
  m_pitLimiterStatus: number;
  m_fuelInTank: number;
  m_fuelCapacity: number;
  m_maxRPM: number;
  m_idleRPM: number;
  m_maxGears: number;
  m_drsAllowed: number;
  m_drsActivationDistance: number;
  m_tyresWear: TyreWear[];
  m_actualTyreCompound: number;
  m_visualTyreCompound: number;
  m_tyresAgeLaps: number;
  m_tyreCompound: number;
  m_tyresDamage: TyreDamage[];
  m_frontLeftWingDamage: number;
  m_frontRightWingDamage: number;
  m_rearWingDamage: number;
  m_drsFault: number;
  m_engineDamage: number;
  m_gearBoxDamage: number;
  m_exhaustDamage: number;
  m_vehicleFiaFlags: number;
  m_ersStoreEnergy: number;
  m_ersDeployMode: number;
  m_ersHarvestedThisLapMGUK: number;
  m_ersHarvestedThisLapMGUH: number;
  m_ersDeployedThisLap: number;
  m_carStatusData: CarStatusData[];
  m_lapData: LapData[];
  m_carSetups: CarSetupData[];
  m_carDamageData: CarDamageData[];
}
