import { Component } from '@angular/core';

interface Event {
  title: string;
  description: string;
  location: string;
  likes: number;
  selected?: boolean;
}

const events: Event[] = [
  {
    title: 'Event 1',
    description: 'something cool',
    location: 'Johns pizza',
    likes: 0,
  },
  {
    title: 'Event 2',
    description: 'something even cooler',
    location: 'Johns pizza',
    likes: 0,
  },
];

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent {
  showDetails(_t5: Event) {
    throw new Error('Method not implemented.');
  }

  events = events;

  constructor() {}
}
