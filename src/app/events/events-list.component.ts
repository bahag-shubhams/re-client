import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from '../models/event';
import { Router } from '@angular/router';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';

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
  searchTerm: string = ''
  faTrash = faTrash;
  faCalendar = faCalendar;
  faSort = faSort;
  isAscendingOrder: boolean = true;

  constructor(private eventService: EventService, private router: Router) {}

  getEvents(): void {
    this.eventService.getEvents().subscribe((events) => {this.events = events; console.log(events)});
  }

  addEvent(event: Event): void {
    this.eventService.addEvent(event).subscribe(() => this.getEvents());
  }

  deleteEvent(event: Event) {
    this.eventService.deleteEvent(event.eventid).subscribe(() => this.getEvents());
  }

  filteredAndSortedEvents(): Event[] {
    let filteredEvents = this.events.filter((event) =>
      event.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    return this.sortEvents(filteredEvents);
  }

  sortEvents(events: Event[]): Event[] {
    return events.sort((a, b) => {
      const dateA = new Date(a.dat).getTime();
      const dateB = new Date(b.dat).getTime();

      if (this.isAscendingOrder) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }

  sortEventsByDate(): void {
    this.isAscendingOrder = !this.isAscendingOrder;
  }


  ngOnInit(): void {
    this.getEvents();
    console.log(this.events);
  }
}
