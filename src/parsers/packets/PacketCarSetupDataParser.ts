import { F1Parser } from '../F1Parser'
import { CarSetupDataParser } from './CarSetupDataParser'
import { PacketHeaderParser } from './PacketHeaderParser'
import { PacketCarSetupData } from '@models/packets'

export class PacketCarSetupDataParser extends F1Parser {
  data: PacketCarSetupData

  constructor(buffer: Buffer, bigintEnabled: boolean) {
    super()

    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(bigintEnabled),
      })
      .array('m_carSetups', {
        length: 22,
        type: new CarSetupDataParser(),
      })

    this.data = this.fromBuffer(buffer) as PacketCarSetupData
  }
}
