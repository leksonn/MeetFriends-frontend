// src/app/services/login.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDTO } from "../models/user-dto";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private apiUrl = 'http://localhost:8080/api/user';

    constructor(private http: HttpClient) { }

    login(credentials: { username: string; password: string }): Observable<UserDTO> {
        return this.http.get<UserDTO>(`${this.apiUrl}/login/${credentials.username}`);
    }

    signup(user: { username: string; password: string; email: string }): Observable<UserDTO> {
        return this.http.post<UserDTO>(`${this.apiUrl}/add`, user);
    }

    addFriend(userId: number, friendId: number): Observable<UserDTO> {
        return this.http.put<UserDTO>(`${this.apiUrl}/${userId}/addFriend/${friendId}`, {});
    }

    removeFriend(userId: number, friendId: number): Observable<UserDTO> {
        return this.http.put<UserDTO>(`${this.apiUrl}/${userId}/removeFriend/${friendId}`, {});
    }
}
