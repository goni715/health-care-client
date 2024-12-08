import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";
import convertToTimeString from '@/utils/convertToTimeString';


interface ITimePicker {
  name: string;
  label?: string;
}

const PHTimePicker = ({
  name,
  label
}: ITimePicker) => {


  return (
    <Controller
      name={name}
      // defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field }, fieldState:{error} }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              {...field}
              label={label}
              onChange={(dateObj) =>{
                const timeString = convertToTimeString(dateObj as Dayjs);
                console.log({timeString})
                onChange(timeString)
              }}
              timezone="system"
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!error?.message, 
                  helperText: error?.message
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PHTimePicker;