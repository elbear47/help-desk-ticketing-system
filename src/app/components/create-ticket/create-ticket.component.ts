import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/interfaces/Ticket';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})

export class CreateTicketComponent implements OnInit {
  @Output() ticketSave = new EventEmitter<Ticket>();

  _title: string = '';
  _priority: number = 3;
  _details: string = '';
  _submittedBy: string = '';
  _userId: number = 0;
  _dateSubmitted: string =Date.now().toString();
  _resolvedBy: string = '';
  _resolutionNote: string = '';
  _active: string = 'true';
  _isBookMarked: string = 'false';
  ticketList: Ticket[] = [];



  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
  }

  // loadTickets = (): void => {
  //   this.ticketService.getAllTickets().subscribe((data: Ticket[]) => this.ticketList = data);
  // }

  // addTicket = (ticket: Ticket): void => {
  //   this.ticketService.createAndAddNewTicket(ticket).subscribe(()=> this.loadTickets());
  //   this.router.navigate(['']);
  // }

  submit = (): void => {
    this.ticketSave.emit({
      title: this._title,
      priority: this._priority,
      details: this._details,
      submittedBy: this._submittedBy,
      userId: this._userId,
      dateSubmitted: this._dateSubmitted,
      resolvedBy: this._resolvedBy,
      isBookmarked:this._isBookMarked,
      resolutionNote: this._resolutionNote,
      active: this._active,
    });
      this._title = '';
      this._priority = 3;
      this._details = '';
      this._submittedBy = '';
      this._userId = 0;
      this._dateSubmitted = '';
      this._resolvedBy = '';
      this._isBookMarked = '';
      this._resolutionNote = '';
      this._active = '';
  };

  addNewTicket(
    _title: string,
    _priority: number,
    _details: string,
    _submittedBy: string,
    _userId: number
  ): void{
    let newTicket: Ticket = {
      title: _title,
      dateSubmitted: Date.now().toString(),
      priority: _priority,
      details: _details,
      submittedBy: _submittedBy,
      userId: _userId,
      resolvedBy: '',
      resolutionNote: '',
      active: "true",
      isBookmarked: "false",
    };
    this.ticketService.createAndAddNewTicket(newTicket);
    this.router.navigate(['']);
  }

}
