import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  name: string = '';
  event: string = '';

  constructor(private ticketService: TicketService) { }

  bookTicket() {
    if (this.name && this.event) {
      this.ticketService.addTicket({ name: this.name, event: this.event });
      this.name = '';
      this.event = '';
    }
  }
}