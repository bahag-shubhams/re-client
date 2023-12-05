import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from '../models/event';
import { Router } from '@angular/router';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

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
  faSortUp= faSortUp;
  faSortDown= faSortDown;
  sortIcons = [faSort, faSortUp, faSortDown];
  currentSortIconIndex: number = 0;
  isAscendingOrder: boolean = true;
  faPlusSquare = faPlusSquare;
  currentPage = 1;
  totalPages = 1; 
  pageNumbers: number[] = [];


  constructor(private eventService: EventService, private router: Router) {}

  getEvents(pageNumber: number): void {
    this.eventService.getPaginatedEvents(pageNumber).subscribe((events) => {
      this.events = events.data;
      this.totalPages = events.total_pages;
      this.currentPage = events.current_page;
      this.generatePageNumbers();
    });
  }

  addEvent(event: Event): void {
    this.eventService.addEvent(event).subscribe(() => this.getEvents(this.currentPage));
  }

  deleteEvent(event: Event) {
    this.eventService.deleteEvent(event.eventid).subscribe(() => this.getEvents(this.currentPage));
  }

  filteredAndSortedEvents(): Event[] {
    let filteredEvents = this.events.filter((event) =>
      event.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    return this.sortEvents(filteredEvents);
  }

  generatePageNumbers() {
    this.pageNumbers = Array(this.totalPages).fill(0).map((x, i) => i + 1);
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
    if (this.currentSortIconIndex === 0) {
      this.isAscendingOrder = true;
    } else {
      this.isAscendingOrder = !this.isAscendingOrder;
    }
  
    this.currentSortIconIndex = (this.currentSortIconIndex + 1) % this.sortIcons.length;
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getEvents(this.currentPage);
  }


  ngOnInit(): void {
    this.getEvents(this.currentPage);
    console.log(this.events);
  }
}
