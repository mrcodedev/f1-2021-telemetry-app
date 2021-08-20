import { F1Parser } from '../F1Parser';
import { CarTelemetryDataParser } from './CarTelemetryDataParser';
import { PacketHeaderParser } from './PacketHeaderParser';
export class PacketCarTelemetryDataParser extends F1Parser {
    constructor(buffer, bigintEnabled) {
        super();
        this.endianess('little')
            .nest('m_header', {
            type: new PacketHeaderParser(bigintEnabled),
        })
            .array('m_carTelemetryData', {
            length: 22,
            type: new CarTelemetryDataParser(),
        })
            .uint8('m_mfdPanelIndex')
            .uint8('m_mfdPanelIndexSecondaryPlayer')
            .int8('m_suggestedGear');
        this.data = this.fromBuffer(buffer);
    }
}
//# sourceMappingURL=PacketCarTelemetryDataParser.js.map