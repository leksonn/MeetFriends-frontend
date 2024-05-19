import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestDTO } from "../Models/request-dto";

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    private apiUrl = 'http://localhost:8080/api/requests';

    constructor(private http: HttpClient) { }

    getRequests(): Observable<RequestDTO[]> {
        return this.http.get<RequestDTO[]>(this.apiUrl);
    }

    getRequestById(id: number): Observable<RequestDTO> {
        return this.http.get<RequestDTO>(`${this.apiUrl}/${id}`);
    }

    createRequest(request: RequestDTO): Observable<void> {
        return this.http.post<void>(this.apiUrl, request);
    }

    updateRequest(request: RequestDTO): Observable<void> {
        return this.http.put<void>(this.apiUrl, request);
    }

    deleteRequest(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}

