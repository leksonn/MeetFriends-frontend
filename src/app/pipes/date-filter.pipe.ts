import { Pipe, PipeTransform } from '@angular/core';
import { ScheduleDTO } from '../Models/schedule-dto';

@Pipe({
    name: 'dateFilter',
    standalone: true
})
export class DateFilterPipe implements PipeTransform {
    transform(schedules: ScheduleDTO[], hour: number): ScheduleDTO[] {
        return schedules.filter(schedule => {
            const date = new Date(schedule.scheduleTime);
            return date.getHours() === hour;
        });
    }
}