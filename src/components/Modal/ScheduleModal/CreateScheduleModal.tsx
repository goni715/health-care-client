"use client"
import { useState } from "react";
import PHModal from "@/components/Modal/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import PHForm from "@/components/Forms/PHForm";
import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHTimePicker from "@/components/Forms/PHTimePicker";

import { createScheduleSchema } from "@/schemas/schedule.schema";
import { FieldValues } from "react-hook-form";
import { useCreateSpecialtyMutation } from "@/redux/features/specialties/specialtiesApi";
import modifyFormData from "@/utils/modifyFormData";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";

const CreateScheduleModal = () => {
  const [open, setOpen] = useState(false);
  const [createSpecialty, {isLoading}] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (data: FieldValues) => {
    console.log(data)
    // const formData = modifyFormData(data);
    // const toastId = LoadingToast('Creating...');
    
    // try{
    //   const res = await createSpecialty(formData).unwrap();
    //   if(res?.id){
    //     SuccessToast('Specialty created Successfully', toastId);
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
      <Button variant="outlined" onClick={()=>setOpen(true)}>Create Schedule</Button>
      <PHModal open={open} setOpen={setOpen} title="Create New Schedule" >
      <PHForm onSubmit={handleFormSubmit} schema={createScheduleSchema}>
        <Grid container spacing={2} sx={{
          width: '400px'
        }}>
          <Grid item md={12}>
            <PHDatePicker name="startDate" label="Start Date"/>
          </Grid>
          <Grid item md={12}>
            <PHDatePicker name="endDate" label="End Date"/>
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="startTime" label="Start Time"/>
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="endTime" label="End Time"/>
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

export default CreateScheduleModal;
