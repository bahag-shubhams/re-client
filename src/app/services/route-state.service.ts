import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteStateService {
  isLoginRoute = new BehaviorSubject<boolean>(false);

  constructor() {}
}
