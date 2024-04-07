import { Component,OnInit } from '@angular/core';
import { FriendlistService } from '../sevices/friendlist.service';


@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrl: './friendlist.component.css'
})
export class FriendlistComponent implements OnInit{

  friends:string[]=[];
  constructor(private service:FriendlistService) {
  }

  ngOnInit(): void {
    this.friends=this.service.getFriendInfo();
    console.log(this.friends)
    }

}
