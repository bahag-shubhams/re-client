import { Component } from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';

interface Event {
  title: string;
  description: string;
  location: string;
  likes: number;
  selected?: boolean;
}

const events: Event[] = [
  {
    title: 'Dance Class at Anthonys',
    description: 'This event is a great opportunity for anyone who loves to dance or wants to learn how to dance. The event is held at Anthonys Place, which is a popular venue for dance classes and other events. The class is taught by experienced instructors who are passionate about dance and are dedicated to helping their students improve their skills. The event is open to people of all ages and skill levels, so whether youre a beginner or an experienced dancer, youll be able to enjoy the class and learn something new. The class covers a variety of dance styles, including salsa, tango, and ballroom dancing',
    location: 'Johns pizza',
    likes: 0,
  },
  {
    title: 'Global Day of Respect',
    description: 'Mandatory Attendance',
    location: 'Johns pizza',
    likes: 0,
  },
  {
    title: 'D&D Night',
    description: 'some long text to see how it will look, some long text to see how it will look, some long text to see how it will look',
    location: 'Johns pizza',
    likes: 0,
  },
  {
    title: 'Entrepreneurs Mannheim | Rooftop Barbecue',
    description: 'something even cooler',
    location: 'Johns Pizza Place, Gutenbergstrasse 21, Mannheim, 68161, Germany',
    likes: 0,
  },
  {
    title: 'Event 5',
    description: 'some long text to see how it will look, some long text to see how it will look, some long text to see how it will look',
    location: 'Johns pizza',
    likes: 0,
  },
  {
    title: 'Event 6',
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

  deleteEvent(_t5: Event) {
    throw new Error('Method not implemented.')
  }

  faTrash = faTrash;
  faCalendar = faCalendar;

  events = events;

  constructor() {}
}
