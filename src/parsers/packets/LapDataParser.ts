import { F1Parser } from '../F1Parser'

export class LapDataParser extends F1Parser {
  constructor() {
    super()
    this.endianess('little')
      .uint32('m_lastLapTimeInMS')
      .uint32('m_currentLapTimeInMS')
      .uint16le('m_sector1TimeInMS')
      .uint16le('m_sector2TimeInMS')
      .floatle('m_lapDistance')
      .floatle('m_totalDistance')
      .floatle('m_safetyCarDelta')
      .uint8('m_carPosition')
      .uint8('m_currentLapNum')
      .uint8('m_pitStatus')
      .uint8('m_numPitStops')
      .uint8('m_sector')
      .uint8('m_currentLapInvalid')
      .uint8('m_penalties')
      .uint8('m_warnings')
      .uint8('m_numUnservedDriveThroughPens')
      .uint8('m_numUnservedStopGoPens')
      .uint8('m_gridPosition')
      .uint8('m_driverStatus')
      .uint8('m_resultStatus')
      .uint8('m_pitLaneTimerActive')
      .uint16('m_pitLaneTimeInLaneInMS')
      .uint16('m_pitStopTimerInMS')
      .uint8('m_pitStopShouldServePen')
  }
}
