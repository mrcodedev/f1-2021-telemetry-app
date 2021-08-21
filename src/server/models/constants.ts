export interface Teams {
  name: string;
  color: string;
}

export interface Drivers {
  firstName: string;
  lastName: string;
  abbreviation: string;
}

export interface Tracks {
  name: string;
}

export type EventCodes = string;

export interface Coordinate {
  x: number;
  y: number;
}

export interface Tyres {
  color: string;
  name: string;
}

export type Packets = string;

export type PacketsSizes = number;
