import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {}
    private apiUrl = 'http://localhost:8080/api';

    login(credentials: { username: string; password: string }): Observable<{ token: string }> {
        console.log("sending login request with credentials  "+credentials )
        return this.http.post<{ token: string }>(`${this.apiUrl}/authenticate`, credentials);
    }


    signup(user: { username: string; password: string; email: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, user);
    }

    addFriend(userId: number, friendId: number): Observable<any> {
        return this.http.post(`${this.apiUrl}/${userId}/friends`, { friendId });
    }

    removeFriend(userId: number, friendId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${userId}/friends/${friendId}`);
    }
}
