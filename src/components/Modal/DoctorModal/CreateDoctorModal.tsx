"use client"
import { useState } from "react";
import PHFullscreenModal from "@/components/Modal/PHModal/PHFullscreenModal";
import { Button, Grid } from "@mui/material";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHFileUploader from "@/components/Forms/PHFileUploader";
import { createSpecialtiesSchema } from "@/schemas/specialties.schema";
import { FieldValues } from "react-hook-form";
import { useCreateSpecialtyMutation } from "@/redux/features/specialties/specialtiesApi";
import modifyFormData from "@/utils/modifyFormData";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";

const CreateDoctorModal = () => {
  const [open, setOpen] = useState(false);
  const [createSpecialty, {isLoading}] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (data: FieldValues) => {
    const formData = modifyFormData(data);
    const toastId = LoadingToast('Creating...');
    
    try{
      const res = await createSpecialty(formData).unwrap();
      if(res?.id){
        SuccessToast('Specialty created Successfully', toastId);
        setOpen(false)
      }else{
        ErrorToast("Something went wrong", toastId);
      }
    }catch(err){
      ErrorToast("Something went wrong", toastId);
      setOpen(false)
    }
  }

  return (
    <>
      <Button variant="outlined" onClick={()=>setOpen(true)}>Create Doctor</Button>
      <PHFullscreenModal open={open} setOpen={setOpen} title="Create New Doctor" >
      <PHForm onSubmit={handleFormSubmit} schema={createSpecialtiesSchema}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput type="text" name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit" disabled={isLoading}>
          Create
        </Button>
      </PHForm>

      </PHFullscreenModal>
    </>
  );
};

export default CreateDoctorModal;
