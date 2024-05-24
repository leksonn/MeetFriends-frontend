// src/app/login/login.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginService} from "../sevices/login.service";
import { Router } from '@angular/router';
import { UserDTO } from '../models/user-dto';
import {MatTabsModule} from "@angular/material/tabs";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [MatTabsModule, ReactiveFormsModule, FormsModule, CommonModule],
    standalone: true
})
export class LoginComponent {
  form: FormGroup;
  form2: FormGroup;
  user: UserDTO | null = null;

  constructor(formBuilder: FormBuilder, private service: LoginService, private router: Router) {
    this.form = formBuilder.group({
      username: [''],
      password: [''],
    });

    this.form2 = formBuilder.group({
      username: [''],
      password: [''],
      confirmpass: [''],
      email: ['']
    });
  }

  submitSignup() {
    if (this.form2.value.password !== this.form2.value.confirmpass) {
      console.error('Passwords do not match');
      return;
    }

    this.service.signup(this.form2.value).subscribe(
        response => {
          console.log('Signup successful', response);
          this.router.navigate(['/login']); // Redirect after successful signup
        },
        error => {
          console.error('Signup failed', error);
        }
    );
  }

  submitLogin() {
    this.service.login(this.form.value).subscribe(
        response => {
          if (response && response.password === this.form.value.password) {
            console.log('Login successful', response);
            this.user = response;
            this.router.navigate(['/home']); // Redirect to the home page after successful login
          } else {
            console.error('Login failed: Incorrect username or password');
          }
        },
        error => {
          console.error('Login failed', error);
        }
    );
  }

  addFriend(friendId: number) {
    if (this.user) {
      this.service.addFriend(this.user.id, friendId).subscribe(
          response => {
            console.log('Friend added successfully', response);
            this.user = response;
          },
          error => {
            console.error('Error adding friend', error);
          }
      );
    }
  }

  removeFriend(friendId: number) {
    if (this.user) {
      this.service.removeFriend(this.user.id, friendId).subscribe(
          response => {
            console.log('Friend removed successfully', response);
            this.user = response;
          },
          error => {
            console.error('Error removing friend', error);
          }
      );
    }
  }

  protected readonly Number = Number;
}
