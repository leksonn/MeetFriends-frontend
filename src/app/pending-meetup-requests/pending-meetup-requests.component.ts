import { Component, OnInit } from '@angular/core';
import { RequestService} from "./pending-meetup-requests.service";
import { RequestDTO} from "../Models/request-dto";

@Component({
  selector: 'app-pending-meetup-requests',
  templateUrl: './pending-meetup-requests.component.html',
  styleUrls: ['./pending-meetup-requests.component.css']
})
export class PendingMeetupRequestsComponent implements OnInit {
  requests: RequestDTO[] = [];
  editingRequest: RequestDTO | null = null;
  newRequest: RequestDTO = { id: 0, sender: '', receiver: '', details: '', meetup_time: '' };
  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.requestService.getRequests().subscribe(
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