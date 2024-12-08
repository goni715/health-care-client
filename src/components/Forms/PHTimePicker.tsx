import React from "react";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

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
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field }, fieldState:{error} }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              {...field}
              label={label}
              value={value || Date.now()}
              onChange={(time) => onChange(time)}
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