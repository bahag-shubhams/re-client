import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';


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
   // if (id) {     
   //   this.event = events.find((e: Event) => e.id == id)!;
    //}
  }

  updateEvent() {
  
    console.log('Event updated');
  }
}
