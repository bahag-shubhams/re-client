import { Component } from '@angular/core';
import { User, UserFavoriteEvent } from '../models/user';
import { Event } from '../models/event';
import { EventService } from '../events/event.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user!: User;
  events: Event[] = [];
  favoriteEvents: UserFavoriteEvent[] = [];

  localUser: User  = {} as User;
  userid : number = -1;



  constructor(private eventService : EventService) { }

  getEvents() {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
      this.eventService.getUserFavoriteEvents(this.userid).subscribe((favoriteEvents) => {
        this.favoriteEvents = favoriteEvents;
        this.events = this.events.filter((event) => {
          return this.favoriteEvents.some((favoriteEvent) => {
            return favoriteEvent.event_id === event.eventid;
          });
        });
        console.log(this.events);
      });
    });

    // filter the events to only show the ones that the user has favorited
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : {} as User;
    this.userid = this.localUser.userid;
    this.getEvents();
  }

}
