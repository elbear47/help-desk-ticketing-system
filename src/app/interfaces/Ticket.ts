export interface Ticket {
  ticketId: number;
  title: string;
  dateSubmitted: string;
  priority: number;
  details: string;
  submittedBy: string;
  userId: number;
  resolvedBy: string;
  resolutionNote: string;
  active: boolean;
}
