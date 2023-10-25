import { Component } from '@angular/core';
const events = [
  {
    title: 'a mock event',
    id: '51a7881c-aeb6-442b-85b7-2327cc080086',
    description: 'something really cool',
    location: 'Joes pizza',
    likes: 0,
  },
  {
    title: 'another mock event',
    id: '2b699e91-b089-4745-a58d-d15667c79784',
    description: 'something even cooler',
    location: 'Johns pizza',
    likes: 0,
  },
  {
    title: 'a mock event',
    id: '51a7881c-aeb6-442b-85b7-2327cc080086',
    description: 'something really cool',
    location: 'Joes pizza',
    likes: 0,
  },
  {
    title: 'another mock event',
    id: '2b699e91-b089-4745-a58d-d15667c79784',
    description: 'something even cooler',
    location: 'Johns pizza',
    likes: 0,
  },
  {
    title: 'a mock event',
    id: '51a7881c-aeb6-442b-85b7-2327cc080086',
    description: 'something really cool',
    location: 'Joes pizza',
    likes: 0,
  },
  {
    title: 'another mock event',
    id: '2b699e91-b089-4745-a58d-d15667c79784',
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
  events = events;
}
