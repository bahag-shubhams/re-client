import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from './event.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  event! : Event;
  constructor(private eventService: EventService){}

  @Output() addedEvent = new EventEmitter();

  submit():void{
    console.log("hello");
    console.log(this.event);

    this.eventService.addEvent(this.event).subscribe(()=> {
      window.location.reload();
    });
  }
  ngOnInit(): void {
  this.event = new Event('','','','',-1,0,'',);
  }
}
