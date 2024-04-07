import {Injectable} from '@angular/core';

@Injectable ()
export class MeetUpConfirmationServices {
    broj: number = 50;
    mssg: string = " Meet up streak is " + this.broj + " times ";
    constructor() {}

    public getAllStreaks(): string {
        return this.mssg;
    }

    public setBroj() {
        this.broj += 1;
        console.log(this.broj);
    }

    public getBroj(): number {
        return this.broj;
    }
}