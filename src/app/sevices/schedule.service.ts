import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleDTO } from '../Models/schedule-dto';


@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    private apiUrl = 'http://localhost:8080/api/schedule';

    constructor(private http: HttpClient) {}

    getAllSchedules(): Observable<ScheduleDTO[]> {
        return this.http.get<ScheduleDTO[]>(`${this.apiUrl}/all`);
    }

    getUserSchedules(userId: number): Observable<ScheduleDTO[]> {
        return this.http.get<ScheduleDTO[]>(`${this.apiUrl}/user/${userId}`);
    }

    addSchedule(schedule: ScheduleDTO): Observable<ScheduleDTO> {
        return this.http.post<ScheduleDTO>(`${this.apiUrl}/add`, schedule);
    }

    updateSchedule(schedule: ScheduleDTO): Observable<ScheduleDTO> {
        if (schedule.id === null) {
            throw new Error('Cannot update a schedule without an ID.');
        }
        return this.http.put<ScheduleDTO>(`${this.apiUrl}/update`, schedule);
    }

    deleteSchedule(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
    }
}
