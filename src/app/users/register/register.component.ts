import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RouteStateService } from 'src/app/services/route-state.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;

  constructor(
    private routeStateService: RouteStateService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  ngOnDestroy(): void {
    this.routeStateService.isLoginRoute.next(false);
  }

  ngOnInit(): void {
    this.routeStateService.isLoginRoute.next(true);
  }

  registerWithEmailAndPassword() {
    if (this.registerForm.valid) {
      const userData = {
        ...this.registerForm.value,
        email: this.registerForm.value.username,
      };
      console.log(userData);

      const persistedData = {
        full_name: this.registerForm.value.username,
        email: this.registerForm.value.email,
        phone_number: this.registerForm.value.phoneNumber,
        userid: -1
      }
      console.log(persistedData);

      this.authService
        .registerWithEmailAndPassword(userData)
        .then((res: any) => {
          this.userService.addUser(persistedData).subscribe();
          this.router.navigateByUrl('login');
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
