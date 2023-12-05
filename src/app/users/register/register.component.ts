import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private routeStateService: RouteStateService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+\d{10,15}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: this.passwordMatchValidator
    });
  }

  ngOnDestroy(): void {
    this.routeStateService.isLoginRoute.next(false);
  }

  ngOnInit(): void {
    this.routeStateService.isLoginRoute.next(true);
  }

  registerWithEmailAndPassword() {
    this.submitted = true;

    if (this.registerForm.valid) {
      const userData = {
        ...this.registerForm.value,
      };

      this.authService
        .registerWithEmailAndPassword(userData)
        .then((res: any) => {
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

  private passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')!.value;
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (confirmPasswordControl && confirmPasswordControl.value !== password) {
      confirmPasswordControl.setErrors({ mismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }
  
  
}
