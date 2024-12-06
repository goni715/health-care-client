"use client";
import CreateDoctorModal from "@/components/Modal/DoctorModal/CreateDoctorModal";
import { useDeleteSpecialtyMutation, useGetAllSpecialtiesQuery } from "@/redux/features/specialties/specialtiesApi";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";

const DoctorsPage = () => {
  const { data, isLoading } = useGetAllSpecialtiesQuery(undefined);
  const [deleteSpecialty] = useDeleteSpecialtyMutation()

  const handleDelete = async (id:string) => {
    const toastId = LoadingToast('Deleting...');
    
    try{
      const res = await deleteSpecialty(id).unwrap();
      console.log(res)
      if(res?.id){
        SuccessToast('Specialty deleted Successfully', toastId);
      }else{
        ErrorToast("Something went wrong", toastId);
      }
    }catch(err){
      ErrorToast("Something went wrong", toastId);
    }
  }


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
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
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
          <CreateDoctorModal />
          <TextField size="small" placeholder="Search Specialist" />
        </Stack>
        {isLoading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            <Box my={2}>
              <DataGrid rows={data} columns={columns} hideFooter={true} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default DoctorsPage;
