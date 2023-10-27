import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { events } from './events-list.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: Event = new Event('', '', '', '', '', -1, '');

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // TODO: find event in events array by id
      this.event = events.find(x => x.id == id)!;
    }
  }

  updateEvent() {
  
    console.log('Event updated');
  }
}
