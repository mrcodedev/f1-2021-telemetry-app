import { F1Parser } from '../F1Parser'
import { PacketCarDamageData } from '../../models/packets'

import { CarDamageDataParser } from './CarDamageDataParser'
import { PacketHeaderParser } from './PacketHeaderParser'

export class PacketCarDamageParser extends F1Parser {
  data: PacketCarDamageData

  constructor(buffer: Buffer, bigintEnabled: boolean) {
    super()
    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(bigintEnabled),
      })
      .array('m_carDamageData', {
        length: 22,
        type: new CarDamageDataParser(),
      })

    this.data = this.fromBuffer(buffer) as PacketCarDamageData
  }
}
