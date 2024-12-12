"use client"
import { useState } from "react";
import PHModal from "@/components/Modal/PHModal/PHModal";
import { Box, Button, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import PHForm from "@/components/Forms/PHForm";
import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHTimePicker from "@/components/Forms/PHTimePicker";
import { createScheduleSchema } from "@/schemas/schedule.schema";
import { FieldValues } from "react-hook-form";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";
import { useCreateScheduleMutation, useGetAllSchedulesQuery } from "@/redux/features/schedule/scheduleApi";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Theme, useTheme } from '@mui/material/styles';
import moment from "moment";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const names = [
  {
    name:   'One',
    value: '1'
  },
  {
    name:   'Two',
    value: '2'
  },
];


const CreateDocScheduleModal = () => {
  const [open, setOpen] = useState(false);
  //const [createSchedule, {isLoading}] = useCreateScheduleMutation();
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()).toISOString()); //2024-12-11T18:47:24.968Z

  const query: Record<string, any> = {};

  if(!!selectedDate){
    query['startDate'] = dayjs(selectedDate).hour(0).minute(0).millisecond(0).toISOString();

    query['endDate'] = dayjs(selectedDate).hour(23).minute(59).millisecond(999).toISOString();
  }

  const {data, isLoading } = useGetAllSchedulesQuery(query);

 const schedules = data?.schedules;

 const theme = useTheme();
 const [personName, setPersonName] = useState([]);

 const handleChange = (event: SelectChangeEvent<typeof personName>) => {
   const {
     target: { value },
   } = event;

 
   // Use a Set to track unique values
const uniqueByValue = value.filter(
  (obj, index, self) =>
    self.findIndex(item => item.id === obj.id) === index
);


   setPersonName([...uniqueByValue]);
 };

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


  return (
    <>
      <Button variant="outlined" onClick={()=>setOpen(true)}>Create Doctor Schedule</Button>
      <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule" >
      <PHForm onSubmit={handleFormSubmit} schema={createScheduleSchema}>
        <Grid container spacing={2} sx={{
          width: '800px'
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
          <Grid item md={12}>
          <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.id} label={value.name} />
              ))}
            </Box>
          )}
          // MenuProps={MenuProps}
        >
               {schedules?.map(({id, startDateTime, endDateTime}) => (
                <MenuItem
                  key={id}
                  value={{
                    id,
                    name: moment(startDateTime).format("h:mm a") 
                  }}
                  style={ personName.find((item)=>item.id===id) ? {fontWeight: 600} : {}}
                >
                  {moment(startDateTime).format("h:mm a")}
                </MenuItem>
              ))}




        </Select>
      </FormControl>
    </div>
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
