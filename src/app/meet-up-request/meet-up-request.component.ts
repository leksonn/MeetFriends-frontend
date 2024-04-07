import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router"

@Component({
  selector: 'app-meet-up-request',
  templateUrl: './meet-up-request.component.html',
  styleUrl: './meet-up-request.component.css',
})

export class MeetUpRequestComponent {
form: FormGroup;
constructor(formBuilder: FormBuilder, private router: Router) {
  this.form = formBuilder.group({
    username: [],
    date: [],
    time: [],
    timeuntil: [],
    location: [],
    description: []
  })

}
  submitForm() {
    console.log(this.form.value);
    this.router.navigate(["home"])
  }
}
