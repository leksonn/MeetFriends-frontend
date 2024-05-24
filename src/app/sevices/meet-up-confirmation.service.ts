import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StreakDTO} from "../Models/streak-dto";

@Injectable({
    providedIn: 'root'
})
export class MeetUpConfirmationServices {
    private apiUrl = 'http://localhost:8080/api/streak';

    constructor(private http: HttpClient) {}

    getAllStreaks(): Observable<StreakDTO[]> {
        return this.http.get<StreakDTO[]>(`${this.apiUrl}/all`);
    }

    createStreak(streak: StreakDTO): Observable<StreakDTO> {
        return this.http.post<StreakDTO>(`${this.apiUrl}/add`, streak);
    }

    updateStreak(id: number): Observable<StreakDTO> {
        return this.http.put<StreakDTO>(`${this.apiUrl}/update/${id}`, {});
    }

    deleteStreak(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
    }
}


