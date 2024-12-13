"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs'
import { useGetAllDoctorSchedulesQuery } from "@/redux/features/doctorSchedule/doctorScheduleApi";
import { Box, Button, Stack, Typography } from '@mui/material';



type TProps = {
    id: string;
}

const DoctorScheduleSlots = ({id}: TProps) => {
    const [scheduleId, setScheduleId] = useState('');

    const router = useRouter();
 
    const query: Record<string, any> = {};
 
    query['doctorId'] = id;
 
    query['startDate'] = dayjs(new Date())
       .hour(0)
       .minute(0)
       .second(0)
       .millisecond(0)
       .toISOString();
 
    query['endDate'] = dayjs(new Date())
       .hour(23)
       .minute(59)
       .second(59)
       .millisecond(999)
       .toISOString();
 
    const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });
 
    const doctorSchedules = data?.doctorSchedules;
 
    console.log(doctorSchedules);


    return (
        <>
            <Box mb={5}>
         <Box sx={{ bgcolor: 'white', p: 3, mt: 1 }}>
            <Typography variant='h4' mb={3} color='primary.main'>
               Availability
            </Typography>
            <Typography variant='h6' fontSize={16}>
               <b>
                  Today:{' '}
                  {/* {dateFormatter(currentDate.toISOString()) + ' ' + today} */}
               </b>
            </Typography>
            <Box sx={{ borderBottom: '2px dashed #d0d0d0', mt: 2, mb: 3 }} />
            {/* <Stack direction='row' alignItems='center' flexWrap='wrap' gap={2}>
               {availableSlots?.length ? (
                  isLoading ? (
                     'Loading...'
                  ) : (
                     availableSlots?.map((doctorSchedule: DoctorSchedule) => {
                        const formattedTimeSlot = `${getTimeIn12HourFormat(
                           doctorSchedule?.schedule?.startDate
                        )} - ${getTimeIn12HourFormat(
                           doctorSchedule?.schedule?.endDate
                        )}`;

                        return (
                           <Button
                              key={doctorSchedule?.scheduleId}
                              color='primary'
                              onClick={() =>
                                 setScheduleId(doctorSchedule?.scheduleId)
                              }
                              variant={`${
                                 doctorSchedule?.scheduleId === scheduleId
                                    ? 'contained'
                                    : 'outlined'
                              }`}
                           >
                              {formattedTimeSlot}
                           </Button>
                        );
                     })
                  )
               ) : (
                  <span style={{ color: 'red' }}>
                     No Schedule is Available Today!
                  </span>
               )}
            </Stack> */}
            <Typography variant='h6' fontSize={16} mt={5}>
               <b>
                  Tomorrow:{' '}
                  {/* {dateFormatter(nextDate.toISOString()) + ' ' + tomorrow} */}
               </b>
            </Typography>
            <Box sx={{ borderBottom: '2px dashed #d0d0d0', mt: 2, mb: 3 }} />
            {/* <Stack direction='row' alignItems='center' flexWrap='wrap' gap={2}>
               {availableNextDaySlots?.length ? (
                  isLoading ? (
                     'Loading...'
                  ) : (
                     availableNextDaySlots?.map(
                        (doctorSchedule: DoctorSchedule) => {
                           const formattedTimeSlot = `${getTimeIn12HourFormat(
                              doctorSchedule?.schedule?.startDate
                           )} - ${getTimeIn12HourFormat(
                              doctorSchedule?.schedule?.endDate
                           )}`;

                           return (
                              <Button
                                 key={doctorSchedule?.scheduleId}
                                 color='primary'
                                 onClick={() =>
                                    setScheduleId(doctorSchedule?.scheduleId)
                                 }
                                 variant={`${
                                    doctorSchedule?.scheduleId === scheduleId
                                       ? 'contained'
                                       : 'outlined'
                                 }`}
                              >
                                 {formattedTimeSlot}
                              </Button>
                           );
                        }
                     )
                  )
               ) : (
                  <span style={{ color: 'red' }}>
                     No Schedule is Available Today!
                  </span>
               )}
            </Stack> */}
         </Box>

         <Button
            // onClick={handleBookAppointment}
            sx={{ display: 'block', mx: 'auto' }}
         >
            Book Appointment Now
         </Button>
      </Box>
        </>
    );
};

export default DoctorScheduleSlots;