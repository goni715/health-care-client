"use client"
import { useState } from "react";
import PHFullscreenModal from "@/components/Modal/PHModal/PHFullscreenModal";
import { Button, Grid } from "@mui/material";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { createDoctorSchema } from "@/schemas/doctor.schema";
import { FieldValues } from "react-hook-form";
import modifyFormData from "@/utils/modifyFormData";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";
import PHSelect from "@/components/Forms/PHSelect";
import { useCreateDoctorMutation } from "@/redux/features/doctor/doctorApi";

const CreateDoctorModal = () => {
  const [open, setOpen] = useState(false);
  const [createDoctor, {isLoading}] = useCreateDoctorMutation();

  const handleFormSubmit = async (data: FieldValues) => {
    
    const values = {
      password:data.password,
      doctorData: {
        ...data.doctorData,
        appointmentFee: Number(data.doctorData.appointmentFee),
        experience: Number(data.doctorData.experience)
      }
     
    }

    const formData = modifyFormData(values);
    const toastId = LoadingToast('Creating...');
    try{
      const res = await createDoctor(formData).unwrap();
      if(res?.id){
        SuccessToast("Doctor created successfully", toastId);
        setOpen(false)
      }
      else{
        ErrorToast('Something Went Wrong', toastId)
      }
    }
    catch(err){
      ErrorToast('Something Went Wrong', toastId)
    }
 }

  return (
    <>
      <Button variant="outlined" onClick={()=>setOpen(true)}>Create Doctor</Button>
      <PHFullscreenModal open={open} setOpen={setOpen} title="Create New Doctor" >
      <PHForm onSubmit={handleFormSubmit} schema={createDoctorSchema}>
      <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="text"
              name="doctorData.name"
              label="Name"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctorData.email"
              type="text"
              label="Email"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="password"
              type="password"
              label="Password"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctorData.contactNumber"
              type="text"
              label="Contract Number"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctorData.address"
              label="Address"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctorData.registrationNumber"
              label="Registration Number"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctorData.experience"
              type="text"
              label="Experience (years)"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelect
              name="doctorData.gender"
              label="Gender"
            /> 
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctorData.appointmentFee"
              label="ApointmentFee"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctorData.qualification"
              label="Qualification"
              type="text"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctorData.currentWorkingPlace"
              label="Current Working Place"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctorData.designation"
              label="Designation"
              type="text"
            />
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
