import { useState } from "react";
import PHModal from "@/components/Modal/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHFileUploader from "@/components/Forms/PHFileUploader";
import { createSpecialtiesSchema } from "@/schemas/specialties.schema";

const CreateSpecialtyModal = () => {
  const [open, setOpen] = useState(false);

  const handleFormSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Button variant="outlined" onClick={()=>setOpen(true)}>Create Specialty</Button>
      <PHModal open={open} setOpen={setOpen} title="Create A New Specialty" >
      <PHForm onSubmit={handleFormSubmit} schema={createSpecialtiesSchema}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput type="text" name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PHForm>

      </PHModal>
    </>
  );
};

export default CreateSpecialtyModal;
