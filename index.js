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

const client = new F1TelemetryClient()
// client.on(PACKETS.event, console.log)
// client.on(PACKETS.motion, pruebas => console.log(pruebas))
// client.on(PACKETS.carSetups, pruebas => console.log(pruebas))
// client.on(PACKETS.lapData, console.log)
// client.on(PACKETS.session, pruebas => console.log(pruebas))
client.on(PACKETS.participants, participant => {
  const playerIndex = participant.m_header.m_playerCarIndex
  const participantPlayerResult = {
    driver: participant.m_participants
      .filter(driver => {
        return driver.m_name !== ""
      })
      .map((driver, index) => {
        return {
          player:
            index === participant.m_header.m_playerCarIndex ? true : false,
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
})
// client.on(PACKETS.carTelemetry, pruebas => consol.e.log(pruebas))
// client.on(PACKETS.carStatus, pruebas => console.log(pruebas))
// client.on(PACKETS.finalClassification, pruebas => console.log(pruebas))
// client.on(PACKETS.lobbyInfo, pruebas => console.log(pruebas))
// client.on(PACKETS.sessionHistory, pruebas => console.log(pruebas))
// client.on(PACKETS.carDamage, pruebas => console.log(pruebas))

// to start listening:
client.start()
