"use client"
import { useState } from "react";
import PHModal from "@/components/Modal/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import PHForm from "@/components/Forms/PHForm";
import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHTimePicker from "@/components/Forms/PHTimePicker";
import { createScheduleSchema } from "@/schemas/schedule.schema";
import { FieldValues } from "react-hook-form";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";
import { useCreateScheduleMutation } from "@/redux/features/schedule/scheduleApi";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const CreateDocScheduleModal = () => {
  const [open, setOpen] = useState(false);
  const [createSchedule, {isLoading}] = useCreateScheduleMutation();
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()).toISOString());

  const handleFormSubmit = async (data: FieldValues) => {
    // const toastId = LoadingToast('Creating...');
    // try{
    //   const res = await createSchedule(data).unwrap();
    //   if(res?.count > 0){
    //     SuccessToast('Schedule created Successfully', toastId);
    //     setOpen(false)
    //   }else{
    //     ErrorToast("Something went wrong", toastId);
    //   }
    // }catch(err){
    //   ErrorToast("Something went wrong", toastId);
    //   setOpen(false)
    // } 
    
   
  }

  console.log(selectedDate)

  return (
    <>
      <Button variant="outlined" onClick={()=>setOpen(true)}>Create Doctor Schedule</Button>
      <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule" >
      <PHForm onSubmit={handleFormSubmit} schema={createScheduleSchema}>
        <Grid container spacing={2} sx={{
          width: '400px'
        }}>
          <Grid item md={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={dayjs(selectedDate)}
          onChange={(newValue) => setSelectedDate(dayjs(newValue).toISOString())}
          slotProps={{
            textField: {
             fullWidth: true,
            }
          }}
        />
    </LocalizationProvider>
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit" disabled={isLoading}>
          Create
        </Button>
      </PHForm>

      </PHModal>
    </>
  );
};

export default CreateDocScheduleModal;
