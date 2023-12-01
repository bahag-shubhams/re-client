import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  hide: boolean = true;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private routeStateService: RouteStateService
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
          this.router.navigateByUrl('home');
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
