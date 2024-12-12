"use client";
import { useState } from "react";
import PHModal from "@/components/Modal/PHModal/PHModal";
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import PHForm from "@/components/Forms/PHForm";
import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHTimePicker from "@/components/Forms/PHTimePicker";
import { createScheduleSchema } from "@/schemas/schedule.schema";
import { FieldValues } from "react-hook-form";
import {
  useCreateScheduleMutation,
  useGetAllSchedulesQuery,
} from "@/redux/features/schedule/scheduleApi";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ScheduleMultiSelect from "./ScheduleMultiSelect";

const CreateDocScheduleModal = () => {
  const [open, setOpen] = useState(false);
  //const [createSchedule, {isLoading}] = useCreateScheduleMutation();
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  ); //2024-12-11T18:47:24.968Z
  const [selectedScheduleIds, setSelectedScheduleIds] = useState<any[]>([]);

  const query: Record<string, any> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();

    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data, isLoading } = useGetAllSchedulesQuery(query);

  const schedules = data?.schedules;

  const handleFormSubmit = async () => {
    
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
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Create Doctor Schedule
      </Button>
      <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
        <PHForm onSubmit={handleFormSubmit} schema={createScheduleSchema}>
          <Grid
            container
            spacing={2}
            sx={{
              width: "400px",
            }}
          >
            <Grid item md={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Filter Schedule"
                  value={dayjs(selectedDate)}
                  onChange={(newValue) =>
                    setSelectedDate(dayjs(newValue).toISOString())
                  }
                  slotProps={{
                    textField: {
                      fullWidth: true,
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={12}>
              <ScheduleMultiSelect
                schedules={schedules}
                selectedScheduleIds={selectedScheduleIds}
                setSelectedScheduleIds={setSelectedScheduleIds}
              />
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
