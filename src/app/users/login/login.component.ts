import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  hide: boolean = true;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  loginWithEmailAndPassword() {
    if (this.loginForm.valid) {
      const userData = { ...this.loginForm.value, email: this.loginForm.value.username };
      console.log(userData);

      this.authService.signWithEmailAndPassword(userData).then((res: any) => {
        this.router.navigateByUrl('home');
      }).catch((error: any) => {
        console.error(error);
      });
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
