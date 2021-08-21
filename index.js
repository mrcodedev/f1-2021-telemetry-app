const { F1TelemetryClient, constants } = require("./build/src/index.js")
const { PACKETS } = constants

/*
*   'port' is optional, defaults to 20777

*   'bigintEnabled' is optional, defaults to true
     setting it to false makes the parser skip bigint values

*   'forwardAddresses' is optional, defaults to undefined
    it's an array of Address objects to forward unparsed telemetry to.
    each address object is comprised of a port and an optional ip address

*   'skipParsing' is optional, defaults to false
    setting it to true will make the client not parse and emit content.
    You can consume telemetry data using forwardAddresses instead.              
*/

const activeTelemetry = {
  // FALTA POR HACER
  motion: true,
  session: false,
  lapData: false,
  event: false,
  participants: false,
  carSetups: false,
  carTelemetry: false,
  carStatus: false,
  finalClassification: false,
  lobbyInfo: false,
  carDamage: false,
  sessionHistory: false,
}

const client = new F1TelemetryClient()

// 0: Motion
if (activeTelemetry.motion) {
  client.on(PACKETS.motion, motion => {
    console.log(motion)
  })
}

// 1: Session
if (activeTelemetry.session) {
  client.on(PACKETS.session, session => {
    console.log(session)
  })
}

// 2: Lap Data
if (activeTelemetry.lapData) {
  client.on(PACKETS.lapData, lapData => {
    console.log(lapData)
  })
}

// 3: Event
if (activeTelemetry.event) {
  client.on(PACKETS.event, event => {
    console.log(event)
  })
}
// 4: Participants
if (activeTelemetry.participants) {
  client.on(PACKETS.participants, participants => {
    const playerIndex = participants.m_header.m_playerCarIndex
    const participantPlayerResult = {
      packet: constants.PACKETS_NUMBERS[participants.m_header.m_packetId],
      timeStamp: participants.m_header.m_sessionTime,
      drivers: participants.m_participants
        .filter(driver => {
          return driver.m_name !== ""
        })
        .map((driver, index) => {
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
  client.on(PACKETS.carSetups, carSetups => {
    console.log(carSetups)
  })
}

// 6: Car Telemetry
if (activeTelemetry.carTelemetry) {
  client.on(PACKETS.carTelemetry, carTelemetry => {
    console.log(carTelemetry)
  })
}

// 7: Car Status
if (activeTelemetry.carStatus) {
  client.on(PACKETS.carStatus, carStatus => {
    console.log(carStatus)
  })
}

// 8: Final Classification
if (activeTelemetry.finalClassification) {
  client.on(PACKETS.finalClassification, finalClassification => {
    console.log(finalClassification)
  })
}

// 9: Lobby Info
if (activeTelemetry.lobbyInfo) {
  client.on(PACKETS.lobbyInfo, lobbyInfo => {
    console.log(lobbyInfo)
  })
}

// 10: Car Damage
if (activeTelemetry.carDamage) {
  client.on(PACKETS.carDamage, carDamage => {
    console.log(carDamage)
  })
}

// 11: Session History
if (activeTelemetry.sessionHistory) {
  client.on(PACKETS.sessionHistory, sessionHistory => {
    console.log(sessionHistory)
  })
}

// to start listening:
client.start()
