import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { EventService } from './event.service';
import { Event } from '../models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit{
  constructor(private eventService: EventService, private router: Router){

  }

  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow> | undefined;

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
          console.log("location in getevents for event " + event.title);
          this.markerPositions.push(location);
          console.log("marker Position in getevents");
          this.center = this.markerPositions[0];
          event['position'] = location;
      }})
    });
    });
  }

  ngOnInit(): void {
    this.markerPositions = [];
    this.getEvents();
  }

  openInfoWindow(marker: MapMarker, windowIndex: number) {
    /// stores the current index in forEach
    /// close the other infoWindows first
    

    let curIdx = 0;
    if (this.infoWindowsView == undefined) {
      return;
    }
    this.infoWindowsView.forEach((window: MapInfoWindow) => {
      if (windowIndex === curIdx) {
        window.open(marker);
        curIdx++;
      } else {
        window.close();
        curIdx++;
      }
    });
  }

  showDetails(event: Event) {
    this.router.navigate(['/event/' + event.eventid]);
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
