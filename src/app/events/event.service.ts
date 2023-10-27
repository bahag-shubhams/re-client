import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:8082/events';
  private EVENT_URL = 'http://localhost:8082/event';


  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.URL}`);
  }

  getEvent(id: string): Observable<Event>{
    return this.http.get<Event>(`${this.EVENT_URL}/${id}`);
  }

  deleteEvent(id: string): Observable<Event>{
    return this.http.delete<Event>(`${this.EVENT_URL}/${id}`);
  }

  addEvent(event: Event): Observable<Event> {
    console.log("event" + event);
    return this.http.post<Event>(
    `${this.EVENT_URL}`, event);
    }

  
}
