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
    this.router.navigate(['/event/' + event.eventid]);
  }

  events!: Event[];
  deleteEvent(event: Event) {
    this.eventService.deleteEvent(event.eventid).subscribe(() => this.getEvents());
  }

  faTrash = faTrash;
  faCalendar = faCalendar;

  constructor(private eventService: EventService, private router: Router) {}

  getEvents(): void {
    this.eventService.getEvents().subscribe((events) => {this.events = events; console.log(events)});
  }

  addEvent(event: Event): void {
    this.eventService.addEvent(event).subscribe(() => this.getEvents());
  }

  ngOnInit(): void {
    this.getEvents();
    console.log(this.events);
  }
}
