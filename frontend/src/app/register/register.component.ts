import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username:null,
    lastname:null,
    firstname: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
username: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {username,lastname, firstname, email, password } = this.form;

    this.authService.register(username, lastname, firstname, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

