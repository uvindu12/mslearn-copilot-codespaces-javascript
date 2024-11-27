import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets = new BehaviorSubject<any[]>([]);
  tickets$ = this.tickets.asObservable();

  constructor() { }

  addTicket(ticket: any) {
    const currentTickets = this.tickets.value;
    ticket.time = new Date();
    this.tickets.next([...currentTickets, ticket]);
  }
}