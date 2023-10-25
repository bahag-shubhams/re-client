import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent {
  events = [
    {
      id: 1,
      title: 'Event 1',
      date: '2022-01-01',
      time: '10:00 AM',
      location: 'Location 1',
      description: 'Description 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Event 2',
      date: '2022-02-02',
      time: '2:00 PM',
      location: 'Location 2',
      description: 'Description 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Event 3',
      date: '2022-03-03',
      time: '6:00 PM',
      location: 'Location 3',
      description: 'Description 3',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];
}
