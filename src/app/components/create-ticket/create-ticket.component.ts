import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  _title: string = '';
  _priority: number = 0;
  _details: string = '';
  _submittedBy: string = '';
  _userId: number = 0;
  _ticketId: number = 2;
  _dateSubmitted: string = '';
  _resolvedBy: string = '';
  _resolutionNote: string = '';
  _active: boolean = true;



  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  addNewTicket(
    _title: string,
    _priority: number,
    _details: string,
    _submittedBy: string,
    _userId: number
  ){
    this.ticketService.createAndAddNewTicket(_title, _priority, _details, _submittedBy, _userId)
  }

}
