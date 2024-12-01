"use client"
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";


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
        render={({field}) => (
          <TextField
            id="outlined-basic"
            {...field}
            label={label}
            type={type}
            variant="outlined"
            size="small"
            fullWidth={true}
            disabled={disabled}
          />
        )}
      />
    </>
  );
};

export default PHInput;
