import { F1Parser } from '../F1Parser';
import { LapDataParser } from './LapDataParser';
import { PacketHeaderParser } from './PacketHeaderParser';
export class PacketLapDataParser extends F1Parser {
    constructor(buffer, bigintEnabled) {
        super();
        this.endianess('little')
            .nest('m_header', {
            type: new PacketHeaderParser(bigintEnabled),
        })
            .array('m_lapData', {
            length: 22,
            type: new LapDataParser(),
        });
        this.data = this.fromBuffer(buffer);
    }
}
//# sourceMappingURL=PacketLapDataParser.js.map