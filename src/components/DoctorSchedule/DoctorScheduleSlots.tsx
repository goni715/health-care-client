"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { useGetAllDoctorSchedulesQuery } from "@/redux/features/doctorSchedule/doctorScheduleApi";
import { Box, Button, Stack, Typography } from "@mui/material";
import moment from "moment";
import { useCreateAppointmentMutation } from "@/redux/features/appointment/appointmentApi";
import { useInitialPaymentMutation } from "@/redux/payment/paymentApi";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";


type TProps = {
  id: string;
};

const DoctorScheduleSlots = ({ id }: TProps) => {
  const [scheduleId, setScheduleId] = useState("");

  const router = useRouter();

  const query: Record<string, any> = {};

  //query['doctorId'] = id;

  query["startDate"] = dayjs(new Date())
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .toISOString();

  query["endDate"] = dayjs(new Date())
    .hour(23)
    .minute(59)
    .second(59)
    .millisecond(999)
    .toISOString();

  const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });

  const doctorSchedules = data?.doctorSchedules;

  const currentDate = new Date();
  const today = currentDate.toLocaleDateString("en-US", { weekday: "long" });


  const availableSlots = doctorSchedules?.filter(
    (doctor: any) => !doctor.isBooked
  );


  //next day slots part
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  const tomorrow = nextDate.toLocaleDateString("en-US", { weekday: "long" });

   // query params for next date
   query.startDate = dayjs(nextDate)
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0)
      .toISOString();

   query.endDate = dayjs(nextDate)
      .hour(23)
      .minute(59)
      .second(59)
      .millisecond(999)
      .toISOString();

   const { data: nextDoctorSchedules, isLoading: loading } =
      useGetAllDoctorSchedulesQuery({
         ...query,
      });
   const schedulesOfTomorrow = nextDoctorSchedules?.doctorSchedules;

   const availableNextDaySlots = schedulesOfTomorrow?.filter(
      (doctor: any) => !doctor.isBooked
   );


   const [createAppointment, {isLoading:aLoading}] = useCreateAppointmentMutation();
   const [initialPayment] = useInitialPaymentMutation();




   const handleAppointment = async() => {
      const payload = {
         doctorId:id,
         scheduleId
      }

      const toastId = LoadingToast('Processing...');

      try {
        if (id && scheduleId) {
           const res = await createAppointment(payload).unwrap();

           if (res.id) {
              const response = await initialPayment(res.id).unwrap();
              SuccessToast("Appointment Booking Success", toastId)

              if (response.paymentUrl) {
                 router.push(response.paymentUrl);
              }
           }
        }
     } catch (error) {
        console.log(error);
     }

   }



  return (
    <>
      <Box mb={5}>
        <Box sx={{ bgcolor: "white", p: 3, mt: 1 }}>
          <Typography variant="h4" mb={3} color="primary.main">
            Availability
          </Typography>
          <Typography variant="h6" fontSize={16}>
            <b>
              Today:{" "}
              {/* {dateFormatter(currentDate.toISOString()) + ' ' + today} */}
            </b>
          </Typography>
          <Box sx={{ borderBottom: "2px dashed #d0d0d0", mt: 2, mb: 3 }} />
          <Stack direction="row" alignItems="center" flexWrap="wrap" gap={2}>
            { isLoading
            ? "Loading..."  
            : (
               <>
                 {availableSlots?.length > 0 ? (
                  <>
                   {
                     availableSlots?.map((doctorSchedule: any, index) => {
                        return (
                           <Button 
                             key={index}
                             onClick={() =>
                              setScheduleId(doctorSchedule?.scheduleId)
                             }
                             variant={`${
                              doctorSchedule?.scheduleId === scheduleId
                                 ? 'contained'
                                 : 'outlined'
                           }`}
                             >
                             {moment(doctorSchedule.schedule.startDateTime).format(
                               "h:mm a"
                             )}{" "}
                             to{" "}
                             {moment(doctorSchedule.schedule.endDateTime).format(
                               "h:mm a"
                             )}
                           </Button>
                         );
                      })
                   }
                  </>
                 ): (
                  <span style={{ color: "red" }}>
                      No Schedule is Available Today!
                  </span>
                 )

                 }
               </>
              
            )}
          </Stack>
          <Typography variant="h6" fontSize={16} mt={5}>
            <b>
              Tomorrow:{" "}
              {/* {dateFormatter(nextDate.toISOString()) + ' ' + tomorrow} */}
            </b>
          </Typography>
          <Box sx={{ borderBottom: "2px dashed #d0d0d0", mt: 2, mb: 3 }} />
          <Stack direction="row" alignItems="center" flexWrap="wrap" gap={2}>
            { isLoading
            ? "Loading..."  
            : (
               <>
                 {availableNextDaySlots?.length > 0 ? (
                  <>
                   {
                     availableNextDaySlots?.map((doctorSchedule: any, index) => {
                        return (
                           <Button 
                             key={index}
                             onClick={() =>
                              setScheduleId(doctorSchedule?.scheduleId)
                             }
                             variant={`${
                              doctorSchedule?.scheduleId === scheduleId
                                 ? 'contained'
                                 : 'outlined'
                           }`}
                             >
                             {moment(doctorSchedule.schedule.startDateTime).format(
                               "h:mm a"
                             )}{" "}
                             to{" "}
                             {moment(doctorSchedule.schedule.endDateTime).format(
                               "h:mm a"
                             )}
                           </Button>
                         );
                      })
                   }
                  </>
                 ): (
                  <span style={{ color: "red" }}>
                      No Schedule is Available for Tomorrow!
                  </span>
                 )

                 }
               </>
              
            )}
          </Stack>
        </Box>

        <Button
          onClick={handleAppointment}
          sx={{ display: "block", mx: "auto" }}
        >
          Book Appointment Now
        </Button>
      </Box>
    </>
  );
};

export default DoctorScheduleSlots;
