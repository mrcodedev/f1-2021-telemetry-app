import { Parser } from 'binary-parser';
import { F1Parser } from '../F1Parser';
import { CarMotionDataParser } from './CarMotionDataParser';
import { PacketHeaderParser } from './PacketHeaderParser';
export class PacketMotionDataParser extends F1Parser {
    constructor(buffer, bigintEnabled) {
        super();
        this.endianess('little')
            .nest('m_header', {
            type: new PacketHeaderParser(bigintEnabled),
        })
            .array('m_carMotionData', {
            length: 22,
            type: new CarMotionDataParser(),
        })
            .array('m_suspensionPosition', {
            length: 4,
            type: new Parser().floatle(''),
        })
            .array('m_suspensionVelocity', {
            length: 4,
            type: new Parser().floatle(''),
        })
            .array('m_suspensionAcceleration', {
            length: 4,
            type: new Parser().floatle(''),
        })
            .array('m_wheelSpeed', {
            length: 4,
            type: new Parser().floatle(''),
        })
            .array('m_wheelSlip', {
            length: 4,
            type: new Parser().floatle(''),
        })
            .floatle('m_localVelocityX')
            .floatle('m_localVelocityY')
            .floatle('m_localVelocityZ')
            .floatle('m_angularVelocityX')
            .floatle('m_angularVelocityY')
            .floatle('m_angularVelocityZ')
            .floatle('m_angularAccelerationX')
            .floatle('m_angularAccelerationY')
            .floatle('m_angularAccelerationZ')
            .floatle('m_frontWheelsAngle');
        this.data = this.fromBuffer(buffer);
    }
}
//# sourceMappingURL=PacketMotionDataParser.js.map