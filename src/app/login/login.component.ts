import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

import { Router } from '@angular/router';
import { LoginService } from '../sevices/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [MatTabsModule, ReactiveFormsModule],
})
export class LoginComponent {
  form: FormGroup;
  form2: FormGroup;
  constructor(formBuilder: FormBuilder,private service:LoginService,private router:Router) {
    this.form = formBuilder.group({
      username: [''],
      password: [''],

    })
    this.form2=formBuilder.group({
          username:[''],
          password:[''],
          confirmpass:[''],
          email:['']
        }
    )
  }
  
  
  submitSignup() {
    console.log(this.form2.value)
  }

  submitLogin() {
    if(this.service.getLoginInfo(this.form.value.username)){
      console.log("Login successfull")
      this.router.navigate(['/home'])
    }

  }
}
