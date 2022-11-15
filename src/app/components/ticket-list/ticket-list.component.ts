import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/Ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
allTickets: Ticket[] = [];
display: boolean = false;

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.allTickets = this.ticketService.getAllTickets();
  }
  displayDetail(id:number) {
    this.ticketService.setCurrentId(id);
    this.router.navigate(['/ticketDetail/'+ id]); // route back to all tickets list
  }

  refresh(): void {
    this.allTickets = this.ticketService.getAllTickets();
  }


}
