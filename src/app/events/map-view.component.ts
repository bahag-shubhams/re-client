import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { EventService } from './event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit{
  constructor(private eventService: EventService){

  }

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined ;

  display: any;
  center: google.maps.LatLngLiteral = {lat:10, lng:10};
  zoom = 10;

  mapOptions: google.maps.MapOptions = {mapId: "ebaa6a7b1e765d5d"}

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  events!: Event[];

  getEvents(){
    this.eventService.getEvents().subscribe((events) => {this.events = events;
    this.events.forEach(event => {
      this.eventService.geocodeLocation(event.loc).subscribe((location)=> {
        if(location){
          this.markerPositions.push(location);
          console.log("marker Position in getevents");
          this.center = this.markerPositions[0];
      }})
    });
    });
  }

  ngOnInit(): void {
    this.markerPositions = [];
    this.getEvents();
  }

  openInfoWindow(marker: MapMarker){
    if(this.infoWindow != undefined){
      this.infoWindow.open(marker);
    }
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
