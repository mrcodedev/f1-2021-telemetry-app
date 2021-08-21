import { Parser } from 'binary-parser';
import { Parsed } from '../models/general';

export class F1Parser extends Parser {
  /**
   *
   * @param {Buffer} buffer
   */
  // tslint:disable-next-line:no-any
  fromBuffer(buffer: Buffer): Parsed {
    return this.parse(buffer) as Parsed;
  }
}
