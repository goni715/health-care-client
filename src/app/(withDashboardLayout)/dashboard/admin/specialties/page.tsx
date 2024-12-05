"use client";

import PHModal from "@/components/Modal/PHModal/PHModal";
import { Box, Stack, Button, TextField } from "@mui/material";

const SpecialtiesPage = () => {

  
  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button>Create Specialty</Button>
          <PHModal/>
          {/* <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} /> */}
          <TextField size="small" placeholder="Search Specialist" />
        </Stack>
      </Box>
    </>
  );
};

export default SpecialtiesPage;
