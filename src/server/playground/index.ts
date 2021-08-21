import { PacketMotionData, PacketSessionData, PacketLapData, PacketEventData, PacketParticipantsData, CarSetupData, CarTelemetryData, CarStatusData, FinalClassificationData, LobbyInfoData, CarDamageData, PacketSessionHistoryData, ParticipantData } from '../models/packets'
import { F1TelemetryClient, constants } from ".."
import { PACKETS } from '../constants'

/**
 *  Object with status to show data
 */
const activeTelemetry = {
  motion: true,
  session: true,
  lapData: true,
  event: true,
  participants: true,
  carSetups: true,
  carTelemetry: true,
  carStatus: true,
  finalClassification: true,
  lobbyInfo: true,
  carDamage: true,
  sessionHistory: true,
}

/**
 *  Accepted parametrs to do a connection
 * 
 *  @param {number} port - Optional, defaults to 20777
 *  @param {Address[]} forwardAddresses - defaults to undefined
 *  @param {boolean} bigIntEnabled - Optional, defaults to true
    setting it to false makes the parser skip bigint values
    it's an array of Address objects to forward unparsed telemetry to.
    each address object is comprised of a port and an optional ip address
 *  @param {boolean} address - Optional, IP Address
 *  @param {string} address - Optional, address connection.
 */
const optionsConnection = {
  port: 20777, address: "0.0.0.0"
}

const client = new F1TelemetryClient(optionsConnection)

// 0: Motion
if (activeTelemetry.motion) {
  client.on(PACKETS.motion, (motion: PacketMotionData) => {
    // console.log(motion)
  })
}

// 1: Session
if (activeTelemetry.session) {
  client.on(PACKETS.session, (session: PacketSessionData) => {
    console.log(session)
  })
}

// 2: Lap Data
if (activeTelemetry.lapData) {
  client.on(PACKETS.lapData, (lapData: PacketLapData) => {
    console.log(lapData)
  })
}

// 3: Event
if (activeTelemetry.event) {
  client.on(PACKETS.event, (event: PacketEventData) => {
    console.log(event)
  })
}
// 4: Participants
if (activeTelemetry.participants) {
  client.on(PACKETS.participants, (participants: PacketParticipantsData) => {
    const playerIndex = participants.m_header.m_playerCarIndex
    const participantPlayerResult = {
      packet: constants.PACKETS_NUMBERS[participants.m_header.m_packetId],
      timeStamp: participants.m_header.m_sessionTime,
      drivers: participants.m_participants
        .filter((driver: ParticipantData) => driver.m_name !== "")
        .map((driver: ParticipantData, index: number) => {
          return {
            player: index === playerIndex ? true : false,
            name: driver.m_name,
            typeAI: driver.m_aiControlled === 0 ? "Human" : "IA",
            driverId:
              driver.m_driverId === 255
                ? "Network Human"
                : constants.DRIVERS[driver.m_driverId],
            networkId: driver.m_networkId,
            team:
              driver.m_teamId >= 0 || driver.m_teamId <= 94
                ? constants.TEAMS[driver.m_teamId] ?? {
                    name: "Generic F1 Car",
                    color: "#5A01E2",
                  }
                : { name: "Generic F1 Car", color: "#5A01E2" },
            myTeam: driver.m_myTeam === 0 ? "My Team" : "Otherwise",
            raceNumber: driver.m_raceNumber,
            nationality:
              driver.m_nationality === 0
                ? "Internationalist"
                : constants.NATIONALITIES[driver.m_nationality] ?? "Unknown",
            telemetry: driver.m_yourTelemetry === 0 ? "Restricted" : "Public",
          }
        }),
    }

    console.log(participantPlayerResult)
    return participantPlayerResult
  })
}

// 5: Car Setups
if (activeTelemetry.carSetups) {
  client.on(PACKETS.carSetups, (carSetups: CarSetupData) => {
    console.log(carSetups)
  })
}

// 6: Car Telemetry
if (activeTelemetry.carTelemetry) {
  client.on(PACKETS.carTelemetry, (carTelemetry: CarTelemetryData) => {
    console.log(carTelemetry)
  })
}

// 7: Car Status
if (activeTelemetry.carStatus) {
  client.on(PACKETS.carStatus, (carStatus: CarStatusData) => {
    console.log(carStatus)
  })
}

// 8: Final Classification
if (activeTelemetry.finalClassification) {
  client.on(PACKETS.finalClassification, (finalClassification: FinalClassificationData) => {
    console.log(finalClassification)
  })
}

// 9: Lobby Info
if (activeTelemetry.lobbyInfo) {
  client.on(PACKETS.lobbyInfo, (lobbyInfo: LobbyInfoData) => {
    console.log(lobbyInfo)
  })
}

// 10: Car Damage
if (activeTelemetry.carDamage) {
  client.on(PACKETS.carDamage, (carDamage: CarDamageData) => {
    console.log(carDamage)
  })
}

// 11: Session History
if (activeTelemetry.sessionHistory) {
  client.on(PACKETS.sessionHistory, (sessionHistory: PacketSessionHistoryData) => {
    console.log(sessionHistory)
  })
}

// 🏎 Start to listening packets of F1 2021 :D
client.start()

// 🏁 Close de server, not listen data :(
const errorList = ["error", "exit", "SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException", "SIGTERM"]

errorList.forEach(eventType => {
  process.on(eventType, (data) => {
    console.log("💣 [Closed]: ", data)
    client.close()
  })
})