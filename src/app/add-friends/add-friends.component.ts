import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

import {Router} from '@angular/router';
import {AddFriendsService} from '../sevices/add-friends.service';

@Component({
    selector: 'app-add-friends',
    templateUrl: './add-friends.component.html',
    styleUrl: './add-friends.component.css',
    imports: [ReactiveFormsModule],

    standalone: true
})


export class AddFriendsComponent {

    form: FormGroup;

    constructor(formBuilder: FormBuilder, private service: AddFriendsService, private router: Router) {
        this.form = formBuilder.group({
            username: [''],
        })


    }

    submitSearch() {
        if (this.service.GetUsers(this.form.value.username)) {
            console.log("user found")
        } else
            console.log("user not found")
    }
}
