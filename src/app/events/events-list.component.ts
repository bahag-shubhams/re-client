import { Component } from '@angular/core';
import { Event } from '../models/event';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

export const events: Event[] = [
  {
    title: 'Agile Practice',
    id: '1',
    description: '',
    imageUrl: '/Users/albukaees/event1.jpeg',
    location: 'Neckarpromenade 15, 66778 Germany',
    liked: 2,
    date: '2023,10,28',
  }, 
  {
    title: 'aaaaa',
    id: '2',
    description: '',
    imageUrl: '/Users/albukaees/event1.jpeg',
    location: 'England',
    liked: 2,
    date: '2023,10,28',
  },
];

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent {
  showDetails(event: Event) {
    console.log('sssss'); 
    this.router.navigate(['/event/' + event.id]);
  }

  events: Event[] = events;

  constructor(private router: Router) {}
}
