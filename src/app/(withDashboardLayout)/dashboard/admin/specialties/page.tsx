"use client";
import CreateSpecialtyModal from "@/components/Modal/SpecialtiesModal/CreateSpecialtyModal";
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
          
          <CreateSpecialtyModal/>
          {/* <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} /> */}
          <TextField size="small" placeholder="Search Specialist" />
        </Stack>
      </Box>
    </>
  );
};

export default SpecialtiesPage;
