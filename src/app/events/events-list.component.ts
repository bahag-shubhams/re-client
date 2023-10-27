import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from '../models/event';
import { Router } from '@angular/router';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  showDetails(event: Event) {
    this.router.navigate(['/event/' + event.id]);
  }

  events!: Event[];
  deleteEvent(_t5: Event) {
    throw new Error('Method not implemented.')
  }

  faTrash = faTrash;
  faCalendar = faCalendar;

  constructor(private eventService: EventService, private router: Router) {}

  getEvents(): void {
    this.eventService.getEvents().subscribe((events) => (this.events = events));
  }

  addEvent(event: Event): void {
    this.eventService.addEvent(event).subscribe(() => this.getEvents());
  }

  ngOnInit(): void {
    this.getEvents();
  }
}
