import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/Ticket';

@Component({
  selector: 'app-detail-display',
  templateUrl: './detail-display.component.html',
  styleUrls: ['./detail-display.component.css']
})
export class DetailDisplayComponent implements OnInit {
  @Input() t1: Ticket = {} as Ticket;
  constructor() { }

  ngOnInit(): void {
  }

}
