import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/Ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {

  currentId: number = 0;
  backendURL: string = 'https://localhost:7068/api';
  // ticketList2: Observable<Ticket[]> = this.httpClient.get<Ticket[]>(this.backendURL + '/Ticket');

  constructor(private httpClient: HttpClient) {}

  getAllTickets = (): Observable<Ticket[]> => {
    return this.httpClient.get<Ticket[]>(this.backendURL + '/Ticket');
  };

  getBookmarkedTickets = (): Observable<Ticket[]> => {
    return this.httpClient.get<Ticket[]>(this.backendURL + '/Ticket/GetBookmarkedTickets');
  }

  getActiveTickets = (): Observable<Ticket[]> => {
    return this.httpClient.get<Ticket[]>(this.backendURL + '/Ticket/GetActiveTickets');
  }

  getClosedTickets = (): Observable<Ticket[]> => {
    return this.httpClient.get<Ticket[]>(this.backendURL + '/Ticket/GetClosedTickets')
  }

  getTicketById = (id: number): Observable<Ticket> => {
    return this.httpClient.get<Ticket>(this.backendURL + '/Ticket/'+ id);
  }
  setCurrentId(id: number): number {
    this.currentId = id;
    return this.currentId;
  }

  getCurrentId(): number {
    return this.currentId;
  }
  changeBookmarkStatus = (ticket: Ticket, newBookmarkStatus :string ): void=> {
    this.httpClient.put(this.backendURL +
      '/Ticket/' + ticket.id +
      '?title='+ ticket.title +
      '&dateSubmitted='+ ticket.dateSubmitted +
      '&priority='+ ticket.priority +
      '&details='+ ticket.details +
      '&resolvedBy='+ ticket.resolvedBy +
      '&resolutionNote='+ ticket.resolutionNote +
      '&active='+ ticket.active +
      '&isBookmarked='+ newBookmarkStatus,null
      )

  }

  createAndAddNewTicket(newTicket: Ticket): Observable<Ticket> {

    return this.httpClient.post<Ticket>(this.backendURL + '/Ticket', newTicket);

  }

  
}
