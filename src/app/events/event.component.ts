import { Component, OnInit } from '@angular/core';
import { Comment, Event } from '../models/event';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './event.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  event!: Event;
  comments: Comment[] = [];
  newCommentText: string = '';
  faPen = faPen;
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
      this.eventService.getCommentsOfEvent(Number(id)).subscribe((comments: Comment[]) => {
        for(let i = 0; i < comments.length; i++){
          this.comments.push(comments[i]);
        }
        console.log(this.comments)
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

  transformDate(value: any): any {
    const datePipe = new DatePipe('en-US');

    const time = datePipe.transform(value, 'HH:mm');
    const formattedDate = datePipe.transform(value, 'dd MMMM yyyy');

    return `${formattedDate}`;
  }

  transformDescription(value: string): string {
    if (value) {
      return value.replace(/\n/g, '<br>');
    }
    return value;
  }

  submitComment() {
    if (this.newCommentText.trim() !== '') {
      // change the author name and author id below after login logic
      const localUser = localStorage.getItem('user') ? localStorage.getItem('user') : null;
      const author_name = localUser ? JSON.parse(localUser).full_name : "Test Author";
      const authorid = localUser ? JSON.parse(localUser).userid : -1;
      const newComment = new Comment(author_name, this.newCommentText, new Date().toISOString(), authorid, this.event.eventid, -1);
      this.eventService.addComment(newComment).subscribe();
      this.newCommentText = '';
      window.location.reload();
    }
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
