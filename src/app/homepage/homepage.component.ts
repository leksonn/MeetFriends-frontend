import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    ScheduleComponent
  ],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToMeetup(): void {
    this.router.navigate(['/meetup']);
  }

  redirectToSend(): void {
    this.router.navigate(['/request']);
  }

  redirectToCheck(): void {
    this.router.navigate(['/pending']);
  }

  redirectToFriends(): void {
    this.router.navigate(['/friends']);
  }
}
