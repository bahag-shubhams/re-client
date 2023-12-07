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
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { User, UserFavoriteEvent } from '../models/user';


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
  faHeart = faHeart;
  faCalendar = faCalendar;
  faSortUp= faSortUp;
  faSortDown= faSortDown;
  sortIcons = [faSortUp, faSortDown];
  currentSortIconIndex: number = 0;
  isAscendingOrder: boolean = true;
  faPlusSquare = faPlusSquare;
  currentPage = 1;
  totalPages = 1; 
  pageNumbers: number[] = [];
  sort: string = 'ASC';

  localUser: User  = {} as User;
  userid : number = -1;


  constructor(private eventService: EventService, private router: Router) {
  }

  getEvents(pageNumber: number): void {
    this.eventService.getPaginatedEvents(pageNumber).subscribe((events) => {
      this.events = events.data;
      console.log(this.events);
      this.totalPages = events.total_pages;
      this.currentPage = events.current_page;
      this.generatePageNumbers();
      this.getUserFavoriteEvents();
    });
  }

  addEvent(event: Event): void {
    this.eventService.addEvent(event).subscribe(() => this.getEvents(this.currentPage));
  }

  deleteEvent(event: Event) {
    this.eventService.deleteEvent(event.eventid).subscribe(() => this.getEvents(this.currentPage));
  }

  searchEvents(page_number: number = 1) {
    this.eventService.searchEvent(page_number, this.searchTerm).subscribe(
      (data: any) => {
        console.log('API Response:', data);
        this.events = data.data;  
        this.totalPages = data.total_pages;
        this.generatePageNumbers();
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  generatePageNumbers() {
    this.pageNumbers = Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  toggleFavoriteEvent(event: Event) {
    //this.eventService.favoriteEvent(event.eventid).subscribe(() => this.getEvents(this.currentPage))
    if(this.userid != -1) {
      const newUserFavoriteEvent: UserFavoriteEvent = {
        event_id: event.eventid,
        user_id: this.userid,
      };
      if(!event.liked) {
        console.log("adding favorite event" + newUserFavoriteEvent.event_id + " " + newUserFavoriteEvent.user_id);
        this.eventService.addfavoriteEvent(newUserFavoriteEvent).subscribe(() => event.liked = true);
      }
      else {
        console.log("deleting favorite event" + newUserFavoriteEvent.event_id + " " + newUserFavoriteEvent.user_id);
        this.eventService.deleteUserFavoriteEvent(newUserFavoriteEvent).subscribe(() => event.liked = false);
      }
    }
  }

  sortEventsByDate(): void {
    this.sort = this.sort === 'ASC' ? 'DESC' : 'ASC';
    this.eventService.searchEvent(this.currentPage, this.searchTerm, this.sort).subscribe((data:any) => {
      this.events = data.data;  
      this.totalPages = data.total_pages;
      this.generatePageNumbers();
      if (this.currentSortIconIndex === 0) {
        this.isAscendingOrder = true;
      } else {
        this.isAscendingOrder = !this.isAscendingOrder;
      }
    
      this.currentSortIconIndex = (this.currentSortIconIndex + 1) % this.sortIcons.length;
    });
  }

  goToPage(pageNumber: number) {
    if(this.searchTerm != '') {
      this.currentPage = pageNumber;
      this.searchEvents(pageNumber);
      this.getUserFavoriteEvents();
    } else {
      this.currentPage = pageNumber;
      this.getEvents(this.currentPage);
      this.getUserFavoriteEvents();
    }
  }

  getUserFavoriteEvents(): void {
    this.eventService.getUserFavoriteEvents(this.userid).subscribe((userFavoriteEvents) => {
      userFavoriteEvents.forEach((userFavoriteEvent) => {
        console.log("User Favorite Events id "+ userFavoriteEvent.event_id);
        this.events.forEach((event) => {
          if (event.eventid === userFavoriteEvent.event_id) {
            event.liked = true;
          }
        });
      });
    });
  }

  ngOnInit(): void {
    this.localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : {} as User;
    this.userid = this.localUser.userid;
    this.getEvents(this.currentPage);
    // get favorite events of the signed in user
  }
}
