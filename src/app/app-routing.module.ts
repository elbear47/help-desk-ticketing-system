import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { DetailPopupComponent } from './components/detail-popup/detail-popup.component';

const routes: Routes = [
  {path: 'ticketDetail', component: DetailPopupComponent},
  {path: '', component: TicketListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
