import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddFriendsService {
    private apiUrl = 'http://localhost:8080/api/users'; // Update with your actual API endpoint

    constructor(private http: HttpClient) {}

    GetUsers(username: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/search?username=${username}`);
    }

}
