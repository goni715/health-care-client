"use client";
import CreateSpecialtyModal from "@/components/Modal/SpecialtiesModal/CreateSpecialtyModal";
import { useGetAllSpecialtiesQuery } from "@/redux/features/specialties/specialtiesApi";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";


const SpecialtiesPage = () => {
  const { data, isLoading } = useGetAllSpecialtiesQuery(undefined);


  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} width={30} height={30} alt="icon" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <CreateSpecialtyModal />
          <TextField size="small" placeholder="Search Specialist" />
        </Stack>
        {isLoading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            <DataGrid
              rows={data}
              columns={columns}
              sx={{ border: 0 }}
              hideFooter={true}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default SpecialtiesPage;
