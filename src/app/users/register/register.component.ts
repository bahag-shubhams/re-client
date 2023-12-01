import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  registerWithEmailAndPassword() {
    if (this.registerForm.valid) {
      const userData = { ...this.registerForm.value, email: this.registerForm.value.username };
      console.log(userData);

      this.authService.registerWithEmailAndPassword(userData).then((res: any) => {
        this.router.navigateByUrl('home');
      }).catch((error: any) => {
        console.error(error);
      });
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
