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
  imageBase64: string | null = null; 
  constructor(private eventService: EventService){}

  @Output() addedEvent = new EventEmitter();

  submit():void{
    if (this.imageBase64) {
      this.event.image_url = this.imageBase64;
    }

    this.eventService.addEvent(this.event).subscribe(()=> {
      window.location.reload();
    });
  }

  handleImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.convertImageToBase64(file);
    }
  }

  convertImageToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageBase64 = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
  this.event = new Event('','','','',-1,0,'',);
  }
}
