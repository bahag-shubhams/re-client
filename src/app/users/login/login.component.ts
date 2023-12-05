import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RouteStateService } from 'src/app/services/route-state.service';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  hide: boolean = true;
  loginForm: FormGroup;
  loggedInUser!: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private routeStateService: RouteStateService,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.routeStateService.isLoginRoute.next(true);
  }
  ngOnDestroy() {
    this.routeStateService.isLoginRoute.next(false);
  }

  loginWithEmailAndPassword() {
    if (this.loginForm.valid) {
      const userData = {
        ...this.loginForm.value,
        email: this.loginForm.value.username,
      };
      console.log(userData);

      this.authService
        .signWithEmailAndPassword(userData)
        .then((res: any) => {
          this.userService.getUserByEmail(userData.email).subscribe((user: User) => {
            this.loggedInUser = user;
            console.log(user);
          });
          console.log(this.loggedInUser);
          this.router.navigateByUrl('events');
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  logout() {
    // Call your authentication service to perform logout
    this.authService.logout();

    // Navigate to the login page
    this.router.navigate(['login']);
  }
}
