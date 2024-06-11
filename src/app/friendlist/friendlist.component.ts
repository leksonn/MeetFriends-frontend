import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../models/user-dto';
import { FriendlistService } from '../sevices/friendlist.service';
import { AuthService } from '../Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
  friends: UserDTO[] = []; // Change to UserDTO array to match the updated UserDTO
  userId: number = 0; // Initialize userId

  constructor(private service: FriendlistService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      const user = this.authService.getUserFromToken(token);
      if (user) {
        this.userId = user.id;
        this.loadFriends();
      } else {
        this.router.navigate(['/login']); // Redirect to login if user is null
      }
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
    }
  }

  loadFriends(): void {
    this.service.getUserFriends(this.userId).subscribe(
        (data: UserDTO[]) => {
          this.friends = data;
          console.log(this.friends);
        },
        (error) => {
          console.error('Error fetching friends:', error);
        }
    );
  }
}
