import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestDTO } from '../Models/request-dto';
@Injectable({
    providedIn: 'root'
})
export class RequestService {
    private apiUrl = 'http://localhost:8080/api/request';

    constructor(private http: HttpClient) {
    }

    createRequest(request: RequestDTO): Observable<RequestDTO> {
        return this.http.post<RequestDTO>(`${this.apiUrl}/add`, request);
    }
}
