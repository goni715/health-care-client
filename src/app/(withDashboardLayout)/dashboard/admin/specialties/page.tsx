"use client";
import CreateSpecialtyModal from "@/components/Modal/SpecialtiesModal/CreateSpecialtyModal";
import { useGetAllSpecialtiesQuery } from "@/redux/features/specialties/specialtiesApi";
import { Box, Stack, TextField } from "@mui/material";

const SpecialtiesPage = () => {
  const { data, isLoading } = useGetAllSpecialtiesQuery(undefined);
  console.log(data)

  
  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >  
          <CreateSpecialtyModal/>
          <TextField size="small" placeholder="Search Specialist" />
        </Stack>
        {isLoading ? (
          <>
           <h1>Laoding</h1>
          </>
         
        ) : (
          <>
           <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />

         </>   
        )
        }

     </Box>

    </>
  );
};

export default SpecialtiesPage;
