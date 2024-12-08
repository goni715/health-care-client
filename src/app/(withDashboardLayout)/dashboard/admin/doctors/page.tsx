"use client";
import CreateDoctorModal from "@/components/Modal/DoctorModal/CreateDoctorModal";
import { useGetAllDoctorsQuery } from "@/redux/features/doctor/doctorApi";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";
import Link from 'next/link';
import EditIcon from "@mui/icons-material/Edit";
import { useState } from 'react';
import useDebounced from '@/hooks/useDebounced';



const DoctorsPage = () => {
  const query: Record<string, unknown> = {};
  const [searchTerm, setSearchTerm] = useState<string>('');
 
  const debouncedValue = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if(debouncedValue !==""){
    query['searchTerm']=debouncedValue
  }
  const { data, isLoading } = useGetAllDoctorsQuery({...query});

  //const [deleteSpecialty] = useDeleteSpecialtyMutation()


  const handleDelete = async (id:string) => {
    const toastId = LoadingToast('Deleting...');
    
    // try{
    //   const res = await deleteSpecialty(id).unwrap();
    //   console.log(res)
    //   if(res?.id){
    //     SuccessToast('Specialty deleted Successfully', toastId);
    //   }else{
    //     ErrorToast("Something went wrong", toastId);
    //   }
    // }catch(err){
    //   ErrorToast("Something went wrong", toastId);
    // }
  }


  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "appointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
        field: "action",
        headerName: "Action",
        flex: 1,
        headerAlign: "center",
        align: "center",
        renderCell: ({ row }) => {
          return (
            <Box>
              <IconButton
                onClick={() => handleDelete(row.id)}
                aria-label="delete"
              >
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
              <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
              </Link>
            </Box>
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
          <TextField onChange={(e)=>setSearchTerm(e.target.value)} size="small" placeholder="Search Specialist" />
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
