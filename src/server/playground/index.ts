
import io from "socket.io-client";

import { PacketMotionData, PacketSessionData, PacketLapData, PacketEventData, PacketParticipantsData, CarSetupData, CarTelemetryData, CarStatusData, FinalClassificationData, LobbyInfoData, CarDamageData, PacketSessionHistoryData, ParticipantData } from '../models/packets'
import { F1TelemetryClient, constants } from ".."
import { PACKETS } from '../constants'
import * as config from '../config/config.env.json'
import { PS_BTNS } from "../models/event-buttons";

/**
 *  Object with status to show data
 */
const activeTelemetry = {
  motion: false,
  session: false,
  lapData: false,
  event: true,
  participants: false,
  carSetups: false,
  carTelemetry: false,
  carStatus: false,
  finalClassification: false,
  lobbyInfo: false,
  carDamage: false,
  sessionHistory: false,
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

console.info("################################################")
console.info("#  🚀 F1 2021 Telemetry - MrCodeDev v1.0.1 🚀  #")
console.info("################################################")
console.info("🚨 Dont close this window or the server not rules 🚨")
console.info("👉 Creating connection to WebSocket Server...")
const socket = io(`ws://${config.connectWS.address}:${config.connectWS.port}`, { transports : ['websocket'] })
console.info("👉 Creating connection to UDP F1 2021 Telemetry Client...")
const client = new F1TelemetryClient({port: config.connectF1.port, address: config.connectF1.address, bigintEnabled: false})
console.log("----------------------------------------------")

socket.on("connect", () => {
  console.log(`✅ WebSocket Server Started on ${config.connectWS.address}:${config.connectWS.port} 💻`)
  socket.send(
    JSON.stringify({
      type: "connect",
      time: getTimeNow(),
      connection: true
    })
  )
})

socket.on("close", () => {
  console.log("[Closed] WebSockets Server closed 🙀")
  socket.close()
  client.close()
})

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
    console.log(JSON.stringify(lapData))
  })
}

// 3: Event
if (activeTelemetry.event) {
  client.on(PACKETS.event, (event: PacketEventData) => {
    // const buttonNumber = event.Buttons?.m_buttonStatus ?? 999999999
    // const buttonLetter = PS_BTNS[buttonNumber];
    // const buttonPressed = JSON.stringify(!buttonLetter ? "Not mapped" : buttonLetter)

    socket.send(JSON.stringify(event));
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

    socket.send(JSON.stringify(participantPlayerResult))
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
const errorList = ["error", "exit", "SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException", "SIGTERM", "ECONNREFUSED"]

errorList.forEach(eventType => {
  process.on(eventType, (data) => {
    if(data === "SIGUSR2") {
      socket.close()
      client.close()
      console.log("🔥 [Restarting]: Client UDP and Server WebSockets 🔥")
      console.log("------------------")
      return
    }

    if(eventType === "uncaughtException") {
      console.log("🔥🧨🔥 🙀 WebSocket server is not running!!! please do it now!!! 🙀")
      client.close()
      return
    }

    socket.close()
    client.close()
    console.log("🏁 [Finished] UDP Client and WebSocket Server are closed!!!")
  })
})

const getTimeNow = () => {
  const time = Date.now()
  const now = new Date(time)
  return now.toUTCString()
}