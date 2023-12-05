import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Comment, Event, PaginatedEventResponse } from '../models/event';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  private URL = environment.url + '/events';
  private EVENT_URL =  environment.url + '/event';
  private COMMENT_URL = environment.url + '/comment';


  getPaginatedEvents(pageNumber: number): Observable<PaginatedEventResponse>{
    return this.http.get<PaginatedEventResponse>(`${this.URL}/${pageNumber}`);
  }

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

  getCommentsOfEvent(eventid: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.EVENT_URL}/${eventid}/comments`);
  }

  addComment(comment: Comment): Observable<Comment> {
    console.log("Adding comment... " + comment)
    return this.http.post<Comment>(
    `${this.COMMENT_URL}`, comment);
    }

  // geocodeLocation(location: string): Observable<google.maps.LatLngLiteral | null> {
  //   const params = new HttpParams()
  //     .set('address', location)
  //     .set('key', '');
  
  //   return this.http.get('https://maps.googleapis.com/maps/api/geocode/json', { params }).pipe(
  //     map((response: any) => {
  //       console.log("results for the location " + location+ " are : ");
  //       console.log(response)
  //       const results = response.results;
  //       if (results.length > 0) {
  //         const { lat, lng } = results[0].geometry.location;
  //         return { lat, lng };
  //       } else {
  //         console.log('No results found for the location:', location);
  //         return null;
  //       }
  //     }),
  //     catchError((error: any) => {
  //       console.error('Error geocoding the location:', error);
  //       return of(null);
  //     })
  //   );
  // }
}
