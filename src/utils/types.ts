export interface Ticket {
  id: string;
  eventName: string;
  price: number;
  eventTime: string;
  seatNumber: string;
  status: TicketStatus;
}

export enum TicketStatus {
  AVAILABLE = 'AVAILABLE',
  SOLD = 'SOLD',
  RESERVED = 'RESERVED',
}

export interface Configuration {
  id: number;
  maxTicketCapacity: number;
  totalTicketCapacity: number;
  ticketReleaseRate: number;
  ticketRetrievalRate: number;
}

export interface ActivityLog {
  message: string;
}