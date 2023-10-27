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

  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.URL}`);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(
    `${this.URL}`, event);
    }
}
