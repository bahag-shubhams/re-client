import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouteStateService } from './services/route-state.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  showNavbar = true;
  private subscription: Subscription = new Subscription();
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private routeStateService: RouteStateService
  ) {}

  ngOnInit() {
    this.subscription = this.routeStateService.isLoginRoute.subscribe(
      (isLoginRoute) => {
        this.showNavbar = !isLoginRoute;
      }
    );
    if(localStorage.getItem('user'))
      this.isLoggedIn = true; 
    else 
      this.isLoggedIn = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  title = 're-client';

  logout() {
    localStorage.removeItem('user');
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { RouteStateService } from '../route-state.service';
// import { Subscription } from 'rxjs';

// @Component({
//   // component metadata here
// })
// export class NavbarComponent implements OnInit, OnDestroy {
//   showNavbar = true;
//   private subscription: Subscription;

//   constructor(private routeStateService: RouteStateService) {}

//   ngOnInit() {
//     this.subscription = this.routeStateService.isLoginRoute.subscribe(isLoginRoute => {
//       this.showNavbar = !isLoginRoute;
//     });
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }
// }
