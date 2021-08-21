import * as dgram from 'dgram';
import { EventEmitter } from 'events';
import { AddressInfo } from 'net';
import * as constants from './constants';
import * as constantsTypes from './models/constants';
import {
  PacketCarDamageParser,
  PacketCarSetupDataParser,
  PacketCarStatusDataParser,
  PacketCarTelemetryDataParser,
  PacketEventDataParser,
  PacketFinalClassificationDataParser,
  PacketHeaderParser,
  PacketLapDataParser,
  PacketLobbyInfoDataParser,
  PacketMotionDataParser,
  PacketParticipantsDataParser,
  PacketSessionDataParser,
  PacketSessionHistoryDataParser,
} from './parsers';

import * as packetTypes from './models/packets';
import {Address, Options, Parsed, ParsedMessage} from "./models/general";

const DEFAULT_PORT = 20777;
const FORWARD_ADDRESSES = undefined;
const BIGINT_ENABLED = true;
const ADDRESS = '0.0.0.0';

/**
 *
 */
class F1TelemetryClient extends EventEmitter {
  port: number;
  bigintEnabled: boolean;
  forwardAddresses?: Address[];
  address: string;
  socket?: dgram.Socket;

  constructor(opts: Options = {}) {
    super();

    const {
      port = DEFAULT_PORT,
      bigintEnabled = BIGINT_ENABLED,
      forwardAddresses = FORWARD_ADDRESSES,
      address = ADDRESS,
    } = opts;

    this.port = port;
    this.bigintEnabled = bigintEnabled;
    this.forwardAddresses = forwardAddresses;
    this.address = address;
    this.socket = dgram.createSocket('udp4');
  }

  /**
   *
   * @param {Buffer} message
   */
  static parseBufferMessage(
    message: Buffer,
    bigintEnabled = false
  ): ParsedMessage | undefined {
    const {m_packetId} = F1TelemetryClient.parsePacketHeader(
      message,
      bigintEnabled
      );
      
      const parser = F1TelemetryClient.getParserByPacketId(m_packetId);

      if(!parser) {
        return
      }

    const packetData = new parser(message, bigintEnabled);
    const packetID = Object.keys(constants.PACKETS)[m_packetId];

    // emit parsed message
    return { packetData, packetID };
  }

  /**
   *
   * @param {Buffer} buffer
   * @param {Boolean} bigIntEnabled
   */

  static parsePacketHeader(
    buffer: Buffer,
    bigintEnabled: boolean
    // tslint:disable-next-line:no-any
  ): Parsed {
    const packetHeaderParser = new PacketHeaderParser(bigintEnabled);
    return packetHeaderParser.fromBuffer(buffer) as Parsed;
  }

  /**
   *
   * @param {Number} packetFormat
   * @param {Number} packetId
   */
  static getPacketSize(packetFormat: number, packetId: number) {
    const { PACKETS_SIZES } = constants;
    if(!PACKETS_SIZES) {
      return
    }
    const packetValues = Object.values(PACKETS_SIZES);


    return packetValues[packetId]?.[packetFormat];
  }

  /**
   *
   * @param {Number} packetId
   */
  static getParserByPacketId(packetId: number) {
    const {PACKETS} = constants;

    const packetKeys = Object.keys(PACKETS);
    const packetType = packetKeys[packetId];

    switch (packetType) {
      case PACKETS.carDamage:
        return PacketCarDamageParser;

      case PACKETS.sessionHistory:
        return PacketSessionHistoryDataParser;

      case PACKETS.session:
        return PacketSessionDataParser;

      case PACKETS.motion:
        return PacketMotionDataParser;

      case PACKETS.lapData:
        return PacketLapDataParser;

      case PACKETS.event:
        return PacketEventDataParser;

      case PACKETS.participants:
        return PacketParticipantsDataParser;

      case PACKETS.carSetups:
        return PacketCarSetupDataParser;

      case PACKETS.carTelemetry:
        return PacketCarTelemetryDataParser;

      case PACKETS.carStatus:
        return PacketCarStatusDataParser;

      case PACKETS.finalClassification:
        return PacketFinalClassificationDataParser;

      case PACKETS.lobbyInfo:
        return PacketLobbyInfoDataParser;

      default:
        return null;
    }
  }

  /**
   *
   * @param {Buffer} message
   */
  private handleMessage(message: Buffer) {
    if (this.forwardAddresses) {
      // bridge message
      this.bridgeMessage(message);
    }

    const parsedMessage = F1TelemetryClient.parseBufferMessage(
      message,
      this.bigintEnabled
    );

    if (!parsedMessage || !parsedMessage.packetData) {
      return;
    }

    // Set name event, and data of event
    this.emit(parsedMessage.packetID, parsedMessage.packetData.data);
  }

  /**
   *
   * @param {Buffer} message
   */
  private bridgeMessage(message: Buffer) {
    if (!this.socket) {
      throw new Error('Socket is not initialized');
    }
    if (!this.forwardAddresses) {
      throw new Error('No ports to bridge over');
    }
    for (const address of this.forwardAddresses) {
      this.socket.send(
        message,
        0,
        message.length,
        address.port,
        address.ip || '0.0.0.0'
      );
    }
  }

  /**
   * Method to start listening for packets
   */
  public start() {
    if (!this.socket) {
      return;
    }

    this.socket.on('listening', () => {
      if (!this.socket) {
        return;
      }

      const address = this.socket.address() as AddressInfo;
      console.log(
        `✅ UDP Client listening on ${address.address}:${address.port} 🏎`
      );

      this.socket.on("listening", (listen: any) => console.log(listen))
    
      this.socket.setBroadcast(true);
    });

    this.socket.on('message', message => {
      this.handleMessage(message)
    });
    this.socket.bind({
      port: this.port,
      address: this.address,
      exclusive: false,
    });
  }

  /**
   * Method to close the client
   */
  public close() {
    if (!this.socket) {
      return;
    }

    return this.socket.close(() => {
      console.log('UDP Client closed 🏁');
      this.socket = undefined;
    });
  }
}

export {
  F1TelemetryClient,
  constants,
  constantsTypes,
  packetTypes,
  DEFAULT_PORT,
  BIGINT_ENABLED,
  FORWARD_ADDRESSES,
};
