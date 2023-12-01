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
  display: any;
  center: google.maps.LatLngLiteral = {lat:10, lng:10};
  zoom = 10;

  mapOptions: google.maps.MapOptions = {mapId: "ebaa6a7b1e765d5d"}

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral = {lat:10, lng:10};


  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private updateModalService: NgbModal,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventService.getEvent(id).subscribe((event) => {
        this.event = event;
        this.markerPositions = event.position;
        console.log("marker Position in getevents");
        this.center = this.markerPositions;
      });
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

  moveMap(event: google.maps.MapMouseEvent){
    if(event.latLng!=null)
    this.center = (event.latLng.toJSON())
  }
  move(event: google.maps.MapMouseEvent){
    if(event.latLng!=null)
    this.display = (event.latLng.toJSON())
  }
}
