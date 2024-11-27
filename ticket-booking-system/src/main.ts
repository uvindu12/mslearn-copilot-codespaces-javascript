import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BookingComponent } from './app/booking/booking.component';
import { TicketListComponent } from './app/ticket-list/ticket-list.component';
import { TicketService } from './app/ticket.service';

bootstrapApplication(AppComponent, {
  providers: [TicketService]
}).catch(err => console.error(err));