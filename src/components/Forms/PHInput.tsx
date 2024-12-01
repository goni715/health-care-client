"use client"
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";


type TInputProps = {
    label: string;
    type: string;
    name: string;
}


const PHInput = ({label, type, name}: TInputProps) => {
  const { register } = useFormContext();

  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        type={type}
        variant="outlined"
        size="small"
        fullWidth={true}
        {...register(name)}
      />
    </>
  );
};

export default PHInput;
