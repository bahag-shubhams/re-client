import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  private URL = environment.url + '/events';
  private EVENT_URL =  environment.url + '/event';


  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.URL}`);
  }

  getEvent(id: string): Observable<Event>{
    return this.http.get<Event>(`${this.EVENT_URL}/${id}`);
  }

  deleteEvent(id: number): Observable<Event>{
    return this.http.delete<Event>(`${this.EVENT_URL}/${id}`);
  }

  addEvent(event: Event): Observable<Event> {
    console.log("event" + event);
    console.log("event url" + this.EVENT_URL);
    return this.http.post<Event>(
    `${this.URL}`, event);
    }

  patchEvent(event: Event): Observable<Object>{
    console.log("patching Event" + event);
    return this.http.put(`${this.EVENT_URL}/${event.eventid}`, event);
  }
}
