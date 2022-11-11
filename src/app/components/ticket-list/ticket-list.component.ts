import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/Ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
allTickets: Ticket[] = [];
display: boolean = false;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.allTickets = this.ticketService.getAllTickets();
  }


  toggleDisplay() {
    this.display = !this.display;
  }

  confirm(){
    let text: string = "Testing this confirm window.";
    confirm(text);
  }
  
}
