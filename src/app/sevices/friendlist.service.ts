import {Injectable, numberAttribute} from "@angular/core";

@Injectable()
export class FriendlistService{
    Userarray:string[]=["dzanof","lekson","hodzo","undefined"];
    constructor(){

    }
    public getFriendInfo():string[]{
        return  this.Userarray
    }
}