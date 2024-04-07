import {HttpClient} from "@angular/common/http";
import {Injectable, numberAttribute} from "@angular/core";

@Injectable()
export class LoginService{
    Userarray:string[]=["dzanof","lekson","hodzo","undefined"];
    constructor(){

    }
    public getLoginInfo(test:string):boolean{
        let i;
        for (i=0;i<this.Userarray.length;i+=1){
            console.log(i);
            if (this.Userarray.at(i) == test){
                return true
            }
        }
        return  false
    }
}