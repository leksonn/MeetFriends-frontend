import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateFilterPipe } from '../pipes/date-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ScheduleDTO } from '../Models/schedule-dto';
import { ScheduleService } from '../sevices/schedule.service';
import { AuthService } from '../Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    DateFilterPipe,
    FormsModule
  ]
})
export class ScheduleComponent implements OnInit {
  schedules: ScheduleDTO[] = [];
  userId: number = 0; // Initialize userId
  currentWeekStart: Date = this.getStartOfWeek(new Date());
  newScheduleDate: string = ''; // Initialize as empty string
  newScheduleTime: string = ''; // Initialize as empty string

  constructor(private scheduleService: ScheduleService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      const user = this.authService.getUserFromToken(token);
      if (user) { // Add null check
        this.userId = user.id;
        this.loadUserSchedules();
      } else {
        this.router.navigate(['/login']); // Redirect to login if user is null
      }
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
    }
  }

  loadUserSchedules(): void {
    this.scheduleService.getUserSchedules(this.userId).subscribe((data) => {
      this.schedules = data;
    });
  }

  getStartOfWeek(date: Date): Date {
    const start = new Date(date);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    start.setDate(diff);
    start.setHours(0, 0, 0, 0);
    return start;
  }

  getDays(): Date[] {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(this.currentWeekStart);
      day.setDate(this.currentWeekStart.getDate() + i);
      days.push(day);
    }
    return days;
  }

  getHours(): Date[] {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      const hour = new Date();
      hour.setHours(i, 0, 0, 0);
      hours.push(hour);
    }
    return hours;
  }

  isSlotFilled(day: Date, hour: Date): boolean {
    return this.schedules.some(schedule => {
      const scheduleTime = new Date(schedule.scheduleTime);
      return (
          scheduleTime.getFullYear() === day.getFullYear() &&
          scheduleTime.getMonth() === day.getMonth() &&
          scheduleTime.getDate() === day.getDate() &&
          scheduleTime.getHours() === hour.getHours()
      );
    });
  }

  addSchedule(day: Date, hour: Date): void {
    const scheduleTime = new Date(day);
    scheduleTime.setHours(hour.getHours());
    this.createSchedule(scheduleTime);
  }

  createSchedule(scheduleTime?: Date): void {
    const time = scheduleTime || new Date(this.newScheduleDate + 'T' + this.newScheduleTime + ':00');
    const newSchedule: ScheduleDTO = {
      id: null,
      userId: this.userId,
      scheduleTime: time.toISOString(),
      isFilled: true
    };
    this.scheduleService.addSchedule(newSchedule).subscribe((schedule) => {
      this.schedules.push(schedule);
    });
  }
}