import { Component, OnInit } from '@angular/core';
import { PendingMeetupRequestsService} from './pending-meetup-requests.service';
import { AuthService } from '../Auth/auth.service';
import { Router } from '@angular/router';
import { RequestDTO } from '../Models/request-dto';

@Component({
    selector: 'app-pending-meetup-requests',
    templateUrl: './pending-meetup-requests.component.html',
    styleUrls: ['./pending-meetup-requests.component.css']
})
export class PendingMeetupRequestsComponent implements OnInit {
    requests: RequestDTO[] = [];
    editingRequest: RequestDTO | null = null;
    newRequest: RequestDTO = { id: 0, sender: '', receiver: '', details: '', meetup_time: '' };
    userId: number = 0; // Initialize userId

    constructor(private requestService: PendingMeetupRequestsService, private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        const token = this.authService.getToken();
        if (token) {
            const user = this.authService.getUserFromToken(token);
            if (user) {
                this.userId = user.id;
                this.loadRequests();
            } else {
                this.router.navigate(['/login']); // Redirect to login if user is null
            }
        } else {
            this.router.navigate(['/login']); // Redirect to login if not authenticated
        }
    }

    loadRequests(): void {
        this.requestService.getUserRequests(this.userId).subscribe(
            (data: RequestDTO[]) => {
                this.requests = data;
            },
            (error) => {
                console.error('Error fetching requests:', error);
            }
        );
    }

    startEdit(request: RequestDTO): void {
        this.editingRequest = { ...request };
    }

    saveEdit(): void {
        if (this.editingRequest) {
            this.requestService.updateRequest(this.editingRequest).subscribe(
                () => {
                    this.loadRequests();
                    this.editingRequest = null;
                },
                (error) => {
                    console.error('Error updating request:', error);
                }
            );
        }
    }

    cancelEdit(): void {
        this.editingRequest = null;
    }

    deleteRequest(id: number): void {
        this.requestService.deleteRequest(id).subscribe(
            () => {
                this.loadRequests();
            },
            (error) => {
                console.error('Error deleting request:', error);
            }
        );
    }

    createRequest(): void {
        this.newRequest.sender = this.userId.toString(); // Set sender to current user's ID
        this.requestService.createRequest(this.newRequest).subscribe(
            () => {
                this.loadRequests();
                this.newRequest = { id: 0, sender: '', receiver: '', details: '', meetup_time: '' };
            },
            (error) => {
                console.error('Error creating request:', error);
            }
        );
    }
}
