import { F1Parser } from '../F1Parser'
import { FinalClassificationDataParser } from './FinalClassificationDataParser'
import { PacketHeaderParser } from './PacketHeaderParser'
import { PacketFinalClassificationData } from '../../models/packets'

export class PacketFinalClassificationDataParser extends F1Parser {
  data: PacketFinalClassificationData

  constructor(buffer: Buffer, bigintEnabled: boolean) {
    super()

    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(bigintEnabled),
      })
      .uint8('m_numCars')
      .array('m_classificationData', {
        length: 22,
        type: new FinalClassificationDataParser(),
      })

    this.data = this.fromBuffer(buffer) as PacketFinalClassificationData
  }
}
