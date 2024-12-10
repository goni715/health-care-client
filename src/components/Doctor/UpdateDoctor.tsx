"use client"
import { Button, Grid } from "@mui/material";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { updateDoctorSchema } from "@/schemas/doctor.schema";
import { FieldValues } from "react-hook-form";
import modifyFormData from "@/utils/modifyFormData";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";
import PHSelect from "@/components/Forms/PHSelect";
import { useCreateDoctorMutation } from "@/redux/features/doctor/doctorApi";
import { IDoctor } from "@/types/doctor/doctor.type";


type TProps = {
  doctor: IDoctor
}

const UpdateDoctor = ({ doctor } : TProps) => {
  const [createDoctor, {isLoading}] = useCreateDoctorMutation();
  const { name, contactNumber, address, registrationNumber, experience, gender, appointmentFee, qualification, currentWorkingPlace, designation } = doctor || {};

  const defaultValues = {
    name,
    contactNumber,
    address,
    registrationNumber,
    experience: String(experience),
    gender,
    appointmentFee: String(appointmentFee),
    qualification,
    currentWorkingPlace,
    designation
  }

  const handleFormSubmit = async (data: FieldValues) => {
    
    // const values = {
    //   password:data.password,
    //   doctorData: {
    //     ...data.doctorData,
    //     appointmentFee: Number(data.doctorData.appointmentFee),
    //     experience: Number(data.doctorData.experience)
    //   }
     
    // }

    // const formData = modifyFormData(values);
    // const toastId = LoadingToast('Creating...');
    // try{
    //   const res = await createDoctor(formData).unwrap();
    //   if(res?.id){
    //     SuccessToast("Doctor created successfully", toastId);
    //   }
    //   else{
    //     ErrorToast('Something Went Wrong', toastId)
    //   }
    // }
    // catch(err){
    //   ErrorToast('Something Went Wrong', toastId)
    // }
 }

  return (
    <>

      <PHForm onSubmit={handleFormSubmit} schema={updateDoctorSchema} defaultValues={defaultValues}>
      <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="text"
              name="name"
              label="Name"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="contactNumber"
              type="text"
              label="Contract Number"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="address"
              label="Address"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="registrationNumber"
              label="Registration Number"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="experience"
              type="text"
              label="Experience (years)"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelect
              name="gender"
              label="Gender"
            /> 
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="appointmentFee"
              label="ApointmentFee"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="qualification"
              label="Qualification"
              type="text"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="currentWorkingPlace"
              label="Current Working Place"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="designation"
              label="Designation"
              type="text"
            />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit" disabled={isLoading}>
          Save Changes
        </Button>
      </PHForm>

    </>
  );
};

export default UpdateDoctor;
