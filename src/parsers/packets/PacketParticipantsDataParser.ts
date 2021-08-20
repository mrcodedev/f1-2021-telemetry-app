import {F1Parser} from '../F1Parser';
import {PacketHeaderParser} from './PacketHeaderParser';
import {ParticipantDataParser} from './ParticipantDataParser';
import {PacketParticipantsData} from './types';

export class PacketParticipantsDataParser extends F1Parser {
  data: PacketParticipantsData;

  constructor(buffer: Buffer, bigintEnabled: boolean) {
    super();
    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(bigintEnabled),
      })
      .uint8('m_numActiveCars')
      .array('m_participants', {
        length: 22,
        type: new ParticipantDataParser(),
      });

    this.data = this.fromBuffer(buffer) as PacketParticipantsData;
  }
}
