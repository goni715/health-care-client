import CreateScheduleModal from "@/components/Modal/ScheduleModal/CreateScheduleModal";
import { useGetAllSchedulesQuery } from "@/redux/features/schedule/scheduleApi";
import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const SchedulesPage = () => {
  const { data, isLoading } = useGetAllSchedulesQuery({});

   const schedules = data?.schedules;
   const meta = data?.meta;



  const columns: GridColDef[] = [
    { field: 'sl', headerName: 'SL' },
    { field: 'startDate', headerName: 'Date', flex: 1 },
    { field: 'startTime', headerName: 'Start Time', flex: 1 },
    { field: 'endTime', headerName: 'End Time', flex: 1 },
    {
       field: 'action',
       headerName: 'Action',
       flex: 1,
       headerAlign: 'center',
       align: 'center',
       renderCell: ({ row }) => {
          return (
             <IconButton aria-label='delete'>
                <DeleteIcon sx={{ color: 'red' }} />
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
          <CreateScheduleModal />
        </Stack>
        {/* {isLoading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            <Box my={2}>
              <DataGrid rows={data} columns={columns} hideFooter={true} />
            </Box>
          </>
        )} */}
      </Box>
    </>
  );
};

export default SchedulesPage;
