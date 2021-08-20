import { F1Parser } from '../F1Parser'
import { LapDataParser } from './LapDataParser'
import { PacketHeaderParser } from './PacketHeaderParser'
import { PacketLapData } from '../../models/packets'

export class PacketLapDataParser extends F1Parser {
  data: PacketLapData

  constructor(buffer: Buffer, bigintEnabled: boolean) {
    super()

    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(bigintEnabled),
      })
      .array('m_lapData', {
        length: 22,
        type: new LapDataParser(),
      })

    this.data = this.fromBuffer(buffer) as PacketLapData
  }
}
