import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScheduleComponent } from '../schedule/schedule.component';
import { AuthService } from '../Auth/auth.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    RouterModule,
    ScheduleComponent
  ],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
    }
  }

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
