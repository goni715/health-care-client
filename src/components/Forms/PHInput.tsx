"use client"
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";


type TInputProps = {
    label: string;
    type: string;
    name: string;
    disabled?: boolean;
}


const PHInput = ({label, type, name, disabled}: TInputProps) => {

  return (
    <>

      <Controller
        name={name}
        render={({field, fieldState:{error}}) => (
          <TextField
            id="outlined-basic"
            {...field}
            label={label}
            type={type}
            variant="outlined"
            size="small"
            fullWidth={true}
            disabled={disabled}
            error={!!error?.message}
            helperText={error?.message}
          />
        )}
      />
    </>
  );
};

export default PHInput;
