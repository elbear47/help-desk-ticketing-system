import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { DetailPopupComponent } from './components/detail-popup/detail-popup.component';
import { DetailDisplayComponent } from './components/detail-display/detail-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    DetailPopupComponent,
    DetailDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
