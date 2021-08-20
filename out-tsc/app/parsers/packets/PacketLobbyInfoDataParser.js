import { F1Parser } from '../F1Parser';
import { LobbyInfoDataParser } from './LobbyInfoDataParser';
import { PacketHeaderParser } from './PacketHeaderParser';
export class PacketLobbyInfoDataParser extends F1Parser {
    constructor(buffer, bigintEnabled) {
        super();
        this.endianess('little')
            .nest('m_header', {
            type: new PacketHeaderParser(bigintEnabled),
        })
            .uint8('m_numPlayers')
            .array('m_lobbyPlayers', { length: 22, type: new LobbyInfoDataParser() });
        this.data = this.fromBuffer(buffer);
    }
}
//# sourceMappingURL=PacketLobbyInfoDataParser.js.map