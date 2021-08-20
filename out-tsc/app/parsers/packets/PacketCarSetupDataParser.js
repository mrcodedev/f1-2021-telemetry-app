import { F1Parser } from '../F1Parser';
import { CarSetupDataParser } from './CarSetupDataParser';
import { PacketHeaderParser } from './PacketHeaderParser';
export class PacketCarSetupDataParser extends F1Parser {
    constructor(buffer, bigintEnabled) {
        super();
        this.endianess('little')
            .nest('m_header', {
            type: new PacketHeaderParser(bigintEnabled),
        })
            .array('m_carSetups', {
            length: 22,
            type: new CarSetupDataParser(),
        });
        this.data = this.fromBuffer(buffer);
    }
}
//# sourceMappingURL=PacketCarSetupDataParser.js.map