import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MeetUpConfirmationServices} from "../sevices/meet-up-confirmation.service";
import { StreakDTO} from "../Models/streak-dto";

@Component({
  selector: 'app-meet-up-confirmation',
  templateUrl: './meet-up-confirmation.component.html',
  styleUrls: ['./meet-up-confirmation.component.css']
})
export class MeetUpConfirmationComponent implements OnInit, OnDestroy {
  destroy$: Subject<any> = new Subject<any>();
  streaks: StreakDTO[] = [];
  currentStreak: StreakDTO | null = null;

  constructor(private service: MeetUpConfirmationServices) {}

  ngOnInit(): void {
    this.loadStreaks();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  loadStreaks(): void {
    this.service.getAllStreaks().pipe(takeUntil(this.destroy$)).subscribe((data) => {
      console.log('Streaks loaded', data);
      this.streaks = data;
      this.currentStreak = this.streaks.length > 0 ? this.streaks[0] : null;
    });
  }

  increaseStreak(): void {
    if (this.currentStreak && this.currentStreak.id !== null) {
      console.log('Increasing streak for', this.currentStreak);
      this.service.updateStreak(this.currentStreak.id).pipe(takeUntil(this.destroy$)).subscribe((updatedStreak) => {
        console.log('Streak updated', updatedStreak);
        this.currentStreak = updatedStreak;
      });
    } else {
      const newStreak: StreakDTO = { id: null, streak: 1, user1: 'user1', user2: 'user2' }; // replace 'user1' and 'user2' with actual values
      console.log('Creating new streak', newStreak);
      this.service.createStreak(newStreak).pipe(takeUntil(this.destroy$)).subscribe((createdStreak) => {
        console.log('Streak created', createdStreak);
        this.currentStreak = createdStreak;
        this.streaks.push(createdStreak);
      });
    }
  }

  deleteStreak(): void {
    if (this.currentStreak && this.currentStreak.id !== null) {
      console.log('Deleting streak', this.currentStreak);
      this.service.deleteStreak(this.currentStreak.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
        console.log('Streak deleted');
        this.streaks = this.streaks.filter(streak => streak.id !== this.currentStreak!.id);
        this.currentStreak = null;
      });
    }
  }

  getStreak(): number {
    console.log('Getting streak', this.currentStreak);
    return this.currentStreak ? this.currentStreak.streak : 0;
  }
}