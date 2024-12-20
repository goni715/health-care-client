"use client";
import { useState } from "react";
import PHModal from "@/components/Modal/PHModal/PHModal";
import {
  Button,
  Grid,
} from "@mui/material";
import {
  useGetAllSchedulesQuery,
} from "@/redux/features/schedule/scheduleApi";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ScheduleMultiSelect from "./ScheduleMultiSelect";
import { useCreateDoctorScheduleMutation } from "@/redux/features/doctorSchedule/doctorScheduleApi";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";


const CreateDocScheduleModal = () => {
  const [open, setOpen] = useState(false);
  const [createDoctorSchedule, {isLoading}] = useCreateDoctorScheduleMutation();
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

  const { data } = useGetAllSchedulesQuery(query);

  const schedules = data?.schedules;

  const handleFormSubmit = async () => {

    const toastId = LoadingToast('Creating...');
    try{
      const res = await createDoctorSchedule({
          schedules: selectedScheduleIds
      }).unwrap();
      if(res?.count > 0){
        SuccessToast('Schedule created Successfully', toastId);
        setOpen(false)
      }else{
        ErrorToast("Something went wrong", toastId);
      }
    }catch(err){
      ErrorToast("Something went wrong", toastId);
      setOpen(false)
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Create Doctor Schedule
      </Button>
      <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
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
          <Button onClick={handleFormSubmit} sx={{ mt: 1 }} type="submit" disabled={isLoading}>
            Create
          </Button>
      </PHModal>
    </>
  );
};

export default CreateDocScheduleModal;
