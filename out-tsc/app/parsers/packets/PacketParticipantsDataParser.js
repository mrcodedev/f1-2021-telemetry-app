import { F1Parser } from '../F1Parser';
import { PacketHeaderParser } from './PacketHeaderParser';
import { ParticipantDataParser } from './ParticipantDataParser';
export class PacketParticipantsDataParser extends F1Parser {
    constructor(buffer, bigintEnabled) {
        super();
        this.endianess('little')
            .nest('m_header', {
            type: new PacketHeaderParser(bigintEnabled),
        })
            .uint8('m_numActiveCars')
            .array('m_participants', {
            length: 22,
            type: new ParticipantDataParser(),
        });
        this.data = this.fromBuffer(buffer);
    }
}
//# sourceMappingURL=PacketParticipantsDataParser.js.map