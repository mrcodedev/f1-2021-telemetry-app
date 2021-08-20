import { F1Parser } from '../F1Parser';
import { FinalClassificationDataParser } from './FinalClassificationDataParser';
import { PacketHeaderParser } from './PacketHeaderParser';
export class PacketFinalClassificationDataParser extends F1Parser {
    constructor(buffer, bigintEnabled) {
        super();
        this.endianess('little')
            .nest('m_header', {
            type: new PacketHeaderParser(bigintEnabled),
        })
            .uint8('m_numCars')
            .array('m_classificationData', {
            length: 22,
            type: new FinalClassificationDataParser(),
        });
        this.data = this.fromBuffer(buffer);
    }
}
//# sourceMappingURL=PacketFinalClassificationDataParser.js.map