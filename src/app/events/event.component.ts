import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { Route } from '@angular/router';

=======
import { Observable } from 'rxjs';
import { EventService } from './event.service';
>>>>>>> 962ef44428ac12292851e7c35a99e7fdaf073781

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  event!: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
<<<<<<< HEAD
   // if (id) {     
   //   this.event = events.find((e: Event) => e.id == id)!;
    //}
=======
    if (id) {
      this.eventService.getEvent(id).subscribe((event) => (this.event = event));
    }
>>>>>>> 962ef44428ac12292851e7c35a99e7fdaf073781
  }

  updateEvent() {
    console.log('Event updated');
  }
}
