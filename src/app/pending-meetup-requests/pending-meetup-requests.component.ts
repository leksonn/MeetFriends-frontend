import { Component, OnInit } from '@angular/core';
import { requestService } from './pending-meetup-requests.service';

@Component({
  selector: 'app-pending-meetup-requests',
  templateUrl: './pending-meetup-requests.component.html',
  styleUrl: './pending-meetup-requests.component.css'
})
export class PendingMeetupRequestsComponent implements OnInit{
  allRequests: any[] = [];
constructor(private service: requestService) {

}

  ngOnInit(): void {
    this.service.getRequests().subscribe((request: any[]) => {
      this.allRequests = request;
    })
        throw new Error('Method not implemented.');
    }
}
