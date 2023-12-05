import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private USER_URL =  environment.url + '/users';


  getUserByEmail(email: string): Observable<User>{
    const params = new HttpParams().set('email', email);
    return this.http.get<User>(`${this.USER_URL}`, {params});
  }

  deleteUser(id: number): Observable<User>{
    return this.http.delete<User>(`${this.USER_URL}/${id}`);
  }

  addUser(user: User): Observable<User> {
    console.log("user " + user);
    return this.http.post<User>(
    `${this.USER_URL}`, user);
    }
}
