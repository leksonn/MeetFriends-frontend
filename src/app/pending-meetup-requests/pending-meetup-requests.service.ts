import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class requestService {
public getRequests(): Observable<any[]> {
    return of([
        {username: 'Darin', date: '8.4.2024', time: '16:00', timeUntil: '21:00', place: 'Ilidza', description: 'pojest popit stagod'},
        {username: 'Dzani', date: '12.4.2024', time: '19:00', timeUntil: '23:00', place: 'Pofalici', description: 'popit i samo popit stagod'},
        {username: 'Tajanstveni', date: '23.4.2024', time: '13:00', timeUntil: '15:00', place: 'SSST', description: 'tajanstveni razlozi'}
    ])
}
}
