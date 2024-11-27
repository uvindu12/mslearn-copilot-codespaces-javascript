import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: any[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.tickets$.subscribe(tickets => {
      this.tickets = tickets;
    });
  }
}