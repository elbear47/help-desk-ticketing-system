import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../interfaces/Ticket';

@Component({
  selector: 'app-detail-popup',
  templateUrl: './detail-popup.component.html',
  styleUrls: ['./detail-popup.component.css']
})


export class DetailPopupComponent implements OnInit {
  @Input() t1: Ticket = {} as Ticket;


  constructor( ) { }

  ngOnInit(): void {
    console.log(this.t1);

  }

}
