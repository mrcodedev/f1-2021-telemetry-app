import * as dgram from 'dgram';
import { F1TelemetryClient } from '..';
const client = new F1TelemetryClient({
    port: 20777,
    forwardAddresses: [{ port: 5550 }],
    skipParsing: true,
});
const socket = dgram.createSocket('udp4');
socket.bind(5550);
socket.on('message', msg => {
    var _a;
    const parsedmsg = F1TelemetryClient.parseBufferMessage(msg);
    console.log((_a = parsedmsg === null || parsedmsg === void 0 ? void 0 : parsedmsg.packetData) === null || _a === void 0 ? void 0 : _a.data);
});
client.start();
[
    'exit',
    'SIGINT',
    'SIGUSR1',
    'SIGUSR2',
    'uncaughtException',
    'SIGTERM',
].forEach(eventType => {
    process.on(eventType, () => client.stop());
});
//# sourceMappingURL=index.js.map