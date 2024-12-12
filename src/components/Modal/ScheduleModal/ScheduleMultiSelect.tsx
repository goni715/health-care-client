"use client"
import { Box, OutlinedInput} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import moment from "moment";
import Chip from '@mui/material/Chip';



const ScheduleMultiSelect = ({schedules, selectedScheduleIds, setSelectedScheduleIds}: any) => {

     const scheduleMenuItems = schedules?.map(({id, startDateTime, endDateTime} : any)=>({
      id,
      name: moment(startDateTime).format("h:mm a") +' to ' + moment(endDateTime).format("h:mm a")
     }))
    
    
     const handleChange = (event: SelectChangeEvent<typeof selectedScheduleIds>) => {
       const {
         target: { value },
       } = event;
       setSelectedScheduleIds(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value
     );
       
     };

  return (
  <>

   <div>
   <FormControl sx={{ m: 1, width: '100%' }}>
        <InputLabel id="demo-multiple-chip-label">Select Schedule</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedScheduleIds}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Select Schedule" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value:any) => {
                const selectedSchedule = scheduleMenuItems.find(
                  (schedule: any) => schedule.id === value
               );

               if (!selectedSchedule) return null;
                return (
                  <Chip key={value} label={selectedSchedule.name} />
                )
              })}
            </Box>
          )}
        >
               {scheduleMenuItems?.map(({id, name} :any) => (
                <MenuItem
                  key={id}
                  value={id}
                  style={ selectedScheduleIds.find((item:any)=>item.id===id) ? {fontWeight: 600} : {}}
                >
                  {name}
                </MenuItem>
              ))}




        </Select>
      </FormControl>
   </div>
  </>

    
  );
};

export default ScheduleMultiSelect;
