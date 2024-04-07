import {Component, OnInit} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  standalone: true,
  imports: [MatTabsModule],
})

export class HomepageComponent implements OnInit{
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  redirectToMeetup(): void {
    this.router.navigate(['/meetup']);
  }
  redirectToSend():void{
    this.router.navigate(['/request'])
  }


  redirectToCheck() :void{
    this.router.navigate(['/pending'])
  }
  redirectToFriends():void{
    this.router.navigate(['/friends'])
  }
}