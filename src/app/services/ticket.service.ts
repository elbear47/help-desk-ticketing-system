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
    resolutionNote: '',
    active: true,
    isBookmarked: true
  };
  ticketTwo: Ticket = {
    ticketId: 3,
    title: 'Windows Media Player wont load',
    dateSubmitted: '11/02/2022',
    priority: 2,
    details: 'Media Player is stuck on loading page',
    submittedBy: 'Tolu',
    userId: 2,
    resolvedBy: 'Elber Funez',
    resolutionNote: '',
    active: true,
    isBookmarked: false
  };

  currentId: number = 0;

  ticketList: Ticket[] = [this.ticketOne, this.ticketTwo];

  constructor() {}

  getAllTickets(): Ticket[] {
    return this.ticketList;
  }
  getBookmarkedTickets(): Ticket[] {
    this.ticketList = this.ticketList.filter(x =>{
      x.isBookmarked === true;
    });
    return this.ticketList;

  }

  getTicketById(id: number): Ticket {
    return this.ticketList.filter((t) => t.ticketId == id)[0];
  }
  setCurrentId(id: number): number {
    this.currentId = id;
    return this.currentId;
  }

  getCurrentId(): number {
    return this.currentId;
  }

  createAndAddNewTicket(
    _title: string,
    _priority: number,
    _details: string,
    _submittedBy: string,
    _userId: number
  ): void {
    let newTicket = {
      ticketId: 2,
      title: _title,
      dateSubmitted: '2022-01-05',
      priority: _priority,
      details: _details,
      submittedBy: _submittedBy,
      userId: _userId,
      resolvedBy: '',
      resolutionNote: '',
      active: true,
      isBookmarked: false
    };
    this.ticketList.push(newTicket)

  }


}
