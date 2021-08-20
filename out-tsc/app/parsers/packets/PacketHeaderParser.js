import { F1Parser } from '../F1Parser';
export class PacketHeaderParser extends F1Parser {
    constructor(bigintEnabled) {
        super();
        this.endianess('little')
            .uint16le('m_packetFormat')
            .uint8('m_gameMajorVersion')
            .uint8('m_gameMinorVersion')
            .uint8('m_packetVersion')
            .uint8('m_packetId');
        if (bigintEnabled) {
            this.uint64('m_sessionUID');
        }
        else {
            this.skip(8);
        }
        this.floatle('m_sessionTime')
            .uint32('m_frameIdentifier')
            .uint8('m_playerCarIndex')
            .uint8('m_secondaryPlayerCarIndex');
    }
}
//# sourceMappingURL=PacketHeaderParser.js.map