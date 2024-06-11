import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// @ts-ignore
import { UserDTO } from '../models/user-dto';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token: string | null = null;
    private apiUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient, private router: Router) {}

    login(credentials: { username: string; password: string }): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${this.apiUrl}/authenticate`, credentials);
    }

    signup(user: { username: string; password: string; email: string }): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/register`, user);
    }

    saveToken(token: string): void {
        this.token = token;
        console.log('Token saved:', token);  // Debugging
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        const token = this.token || localStorage.getItem('token');
        console.log('Retrieved token:', token);  // Debugging
        return token;
    }

    isAuthenticated(): boolean {
        return this.getToken() !== null;
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('token');
        this.router.navigate(['']);
    }

    getUserFromToken(token: string): UserDTO | null {
        try {
            return jwt_decode<UserDTO>(token);
        } catch (error) {
            console.error('Token decoding failed:', error);  // Debugging
            return null;
        }
    }
}

function jwt_decode<T>(token: string): T {
    return JSON.parse(atob(token.split('.')[1]));
}
