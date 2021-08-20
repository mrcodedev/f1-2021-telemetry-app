import { F1Parser } from '../F1Parser'
import { CarStatusDataParser } from './CarStatusDataParser';
import { PacketHeaderParser } from './PacketHeaderParser';
import { PacketCarStatusData } from '../../models/packets';

export class PacketCarStatusDataParser extends F1Parser {
  data: PacketCarStatusData

  constructor(buffer: Buffer, bigintEnabled: boolean) {
    super()

    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(bigintEnabled),
      })
      .array('m_carStatusData', {
        length: 22,
        type: new CarStatusDataParser(),
      })

    this.data = this.fromBuffer(buffer) as PacketCarStatusData
  }
}
