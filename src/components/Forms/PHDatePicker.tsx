import * as React from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Controller } from "react-hook-form"
import convertToDateString from '@/utils/convertToDateString';


type TProps ={
  name: string;
  label: string;
}

const PHDatePicker = ({name, label}: TProps) => {
  return (
    <>
     <Controller
        name={name}
        // defaultValue={dayjs(new Date().toDateString())}
        render={({field:{onChange, value, ...field}, fieldState:{error}}) => (
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DesktopDatePicker
              timezone="system" 
              disablePast
              label={label}
              {...field}
              onChange={(dateObj)=>{
                const formattedDate = convertToDateString(dateObj as Dayjs)
                onChange(formattedDate) //2024-12-14
              }} 
              slotProps={{
                textField: {
                 fullWidth: true,
                 error: !!error?.message, 
                 helperText: error?.message
                }
              }}

            />
           </LocalizationProvider>
        )}
      />
    </>

  );
}

export default PHDatePicker;
