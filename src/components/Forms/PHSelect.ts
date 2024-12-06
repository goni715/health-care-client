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
            <FormControl sx={{ m: 1, minWidth: 120 }} error>
            <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={age}
              label="Age"
              onChange={handleChange}
              renderValue={(value) => `⚠️  - ${value}`}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Error</FormHelperText>
          </FormControl>
            </>
         
        )}
      />



    </>
  );
};

export default PHSelect;
