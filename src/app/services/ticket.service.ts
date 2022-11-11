import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/Ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
// test it with dummy data
  ticketOne: Ticket = {
    ticketId: 1,
    title: 'Computer not working',
    dateSubmitted: '11/01/2022',
    priority: 1,
    details: 'Computer will not load the internet',
    submittedBy: 'Jacob Magyar',
    userId: 1,
    resolvedBy: 'Elber Funez',
  };

  ticketList: Ticket[] = [this.ticketOne];

  constructor() {}

  getAllTickets(): Ticket[] {
    return this.ticketList;
  }
}