import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  showDetails(_t5: Event) {
    throw new Error('Method not implemented.');
  }

  events!: Event[];
  
  constructor(private eventService: EventService) {}

  getEvents(): void {
    this.eventService.getEvents()
    .subscribe(events => this.events = events);
    }

    addEvent(event: Event): void {
      this.eventService.addEvent(event)
      .subscribe(() => this.getEvents());
      }

      ngOnInit(): void {
        this.getEvents();
      }
}
