import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/Ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  allTickets: Ticket[] = [];
  display: boolean = false;

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {
    this.showAllTickets();



  }
  displayDetail(id: any) {
    this.ticketService.setCurrentId(id);
    this.router.navigate(['/ticketDetail/' + id]); // route back to all tickets list
  }
  changeBookmarkStatus(currTicket: Ticket): void {
    let boolValue: boolean = this.convertStringToBool(currTicket.isBookmarked);
    let newBookmarkStatusString = this.convertBoolToString(!boolValue);
    this.ticketService.changeBookmarkStatus(currTicket, newBookmarkStatusString);
    currTicket.isBookmarked = newBookmarkStatusString;

  }
  showBookmarkedTickets(): void {
    this.ticketService.getBookmarkedTickets().subscribe((data: Ticket[]) => {
      this.allTickets = data;
    });
  }

  showActiveTickets(): void {
    this.ticketService.getActiveTickets().subscribe((data: Ticket[]) => {
      this.allTickets = data;
    });
  }

  showClosedTickets(): void {
    this.ticketService.getClosedTickets().subscribe((data: Ticket[]) => {
      this.allTickets = data;
    });
  }

  showAllTickets(): void {
    this.mapTicketsApiResponse();
  }


  mapTicketsApiResponse = () : void => {
    this.ticketService.getAllTickets().subscribe((data: Ticket[]) => {
      this.allTickets = data;
    });


  }
  convertStringToBool(field: string): boolean{
    let myBool = false;
    if (field.toLowerCase() === "true") {
      myBool = true;
    } else {
      myBool = false;
    }
    return myBool;
  }

  convertBoolToString(boolValue: boolean): string{
    let myString = "";
    if (boolValue = true) {
      myString = "true";
    } else {
      myString = "false";
    }
    return myString;
  }


}
