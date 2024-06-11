import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddFriendsService } from '../sevices/add-friends.service';
import { AuthService } from '../Auth/auth.service';

@Component({
    selector: 'app-add-friends',
    templateUrl: './add-friends.component.html',
    styleUrls: ['./add-friends.component.css'],
    imports: [ReactiveFormsModule, CommonModule],
    standalone: true
})
export class AddFriendsComponent implements OnInit {
    form: FormGroup;
    userId: number = 0; // Initialize userId
    searchResults: any[] = []; // Initialize search results

    constructor(
        formBuilder: FormBuilder,
        private service: AddFriendsService,
        private router: Router,
        private authService: AuthService
    ) {
        this.form = formBuilder.group({
            username: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        const token = this.authService.getToken();
        if (token) {
            const user = this.authService.getUserFromToken(token);
            if (user) {
                this.userId = user.id;
            } else {
                this.router.navigate(['/login']); // Redirect to login if user is null
            }
        } else {
            this.router.navigate(['/login']); // Redirect to login if not authenticated
        }
    }

    submitSearch(): void {
        if (this.form.valid) {
            this.service.GetUsers(this.form.value.username).subscribe(
                (data: any) => {
                    if (data && data.length > 0) {
                        console.log("user found");
                        this.searchResults = data;
                    } else {
                        console.log("user not found");
                        this.searchResults = [];
                    }
                },
                error => {
                    console.error('Error searching for users:', error);
                    this.searchResults = [];
                }
            );
        }
    }
}
