import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestDTO } from '../Models/request-dto';


@Injectable({
    providedIn: 'root'
})
export class PendingMeetupRequestsService {
    private apiUrl = 'http://localhost:8080/api/request';

    constructor(private http: HttpClient) {}

    getRequests(): Observable<RequestDTO[]> {
        return this.http.get<RequestDTO[]>(`${this.apiUrl}/all`);
    }

    getUserRequests(userId: number): Observable<RequestDTO[]> {
        return this.http.get<RequestDTO[]>(`${this.apiUrl}/user/${userId}`);
    }

    createRequest(request: RequestDTO): Observable<RequestDTO> {
        return this.http.post<RequestDTO>(`${this.apiUrl}/add`, request);
    }

    updateRequest(request: RequestDTO): Observable<RequestDTO> {
        if (request.id === null) {
            throw new Error('Cannot update a request without an ID.');
        }
        return this.http.put<RequestDTO>(`${this.apiUrl}/update`, request);
    }

    deleteRequest(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
    }
}
