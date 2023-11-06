import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './event.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  event!: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private updateModalService: NgbModal,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventService.getEvent(id).subscribe((event) => (this.event = event));
    }
  }

  openUpdateModal(content: any) {
    this.updateModalService.open(content).result.then(
			() => {
				console.log("hello");
			});
  }

  onSubmit(form: NgForm){
    form.value["eventid"] = this.event.eventid;
    this.eventService.patchEvent(form.value).subscribe(()=>{
      this.ngOnInit();
    })
    this.updateModalService.dismissAll();
  }

  closeModal(){
    this.updateModalService.dismissAll();
  }
}
