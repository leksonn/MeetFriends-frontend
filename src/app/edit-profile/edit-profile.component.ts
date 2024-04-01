import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['Lejla Celosmanovic'],
      username: ['leksonn'],
      bio: ['Hi! Im 21 years old, and i have a dog!']
    })
  }

  submitForm() {
    console.log(this.form.value);
    
  }
}
