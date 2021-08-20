import { F1Parser } from '../F1Parser';
import { LapHistoryDataParser } from './LapHistoryData';
import { PacketHeaderParser } from './PacketHeaderParser';
import { TyreStintHistoryDataParser } from './TyreStintHistoryData';
export class PacketSessionHistoryDataParser extends F1Parser {
    constructor(buffer, bigintEnabled) {
        super();
        this.endianess('little')
            .nest('m_header', {
            type: new PacketHeaderParser(bigintEnabled),
        })
            .uint8('m_carIdx')
            .uint8('m_numLaps')
            .uint8('m_numTyreStints')
            .uint8('m_bestLapTimeLapNum')
            .uint8('m_bestSector1LapNum')
            .uint8('m_bestSector2LapNum')
            .uint8('m_bestSector3LapNum')
            .array('m_lapHistoryData', {
            length: 100,
            type: new LapHistoryDataParser(),
        })
            .array('m_tyreStintsHistoryData', {
            length: 8,
            type: new TyreStintHistoryDataParser(),
        });
        this.data = this.fromBuffer(buffer);
    }
}
//# sourceMappingURL=PacketSessionHistoryData.js.map