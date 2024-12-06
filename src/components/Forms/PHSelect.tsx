"use client"
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type TInputProps = {
    label: string;
    name: string;
    disabled?: boolean;
}


const PHSelect = ({label, name, disabled=false}: TInputProps) => {

  return (
  <>

      <Controller
         name={name}
         render={({field, fieldState:{error}}) => (
             <>
               <FormControl sx={{ width: '100%' }} size="small" error={!!error?.message}>
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={age}
        label="Age"
        {...field}
      >
        
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>
      {error?.message && (
          <FormHelperText>{error.message}</FormHelperText>
      )}
    </FormControl>
             </>
         
         )}
       />

  </>

    
  );
};

export default PHSelect;
