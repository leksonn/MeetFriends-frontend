import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/user-dto';

@Injectable({
    providedIn: 'root'
})
export class FriendlistService {
    private apiUrl = 'http://localhost:8080/api/user';

    constructor(private http: HttpClient) {}

    getUserFriends(userId: number): Observable<UserDTO[]> {
        return this.http.get<UserDTO[]>(`${this.apiUrl}/${userId}/friends`);
    }

    // Add other methods as needed
}
