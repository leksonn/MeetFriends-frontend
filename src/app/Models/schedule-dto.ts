export interface ScheduleDTO {
    id: number| null;
    userId: number;
    scheduleTime: string; // ISO string format for date-time
    isFilled: boolean;
}