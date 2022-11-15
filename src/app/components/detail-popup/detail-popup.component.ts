import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../interfaces/Ticket';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-detail-popup',
  templateUrl: './detail-popup.component.html',
  styleUrls: ['./detail-popup.component.css']
})


export class DetailPopupComponent implements OnInit {
  @Input() t1: Ticket = {} as Ticket;
  currentId: number = this.ticketService.getCurrentId();
  currentTicket: Ticket = this.ticketService.getTicketById(this.currentId);



  constructor(private ticketService: TicketService ) { }

  ngOnInit(): void {

  }


}
