export type ISchedule = {
    id: string;
    startDateTime: string;
    endDateTime: string;
 };

 export interface IDocSchedule {
    doctorId: string
    scheduleId: string
    isBooked: boolean
    appointmentId: any
    schedule: ISchedule
    appointment: any
  }
