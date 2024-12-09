"use client";
import CreateScheduleModal from "@/components/Modal/ScheduleModal/CreateScheduleModal";
import { useGetAllSchedulesQuery } from "@/redux/features/schedule/scheduleApi";
import { Box, Stack, IconButton  } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { ISchedule } from "@/types/schedule/schedule.type";



const SchedulesPage = () => {
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllSchedulesQuery({});
   const schedules = data?.schedules || [];
   const meta = data?.meta;

   
   useEffect(() => {
    if (schedules?.length) {
      const updateData = schedules.map((schedule: ISchedule, index: number) => {
        return {
          sl: index + 1,
          id: schedule.id,
          startTime: dayjs(schedule.startDate).format("hh:mm a"),
          endTime: dayjs(schedule.endDate).format("hh:mm a"),
        };
      });
      setAllSchedule(updateData);
    }
  }, [schedules]);



  const columns: GridColDef[] = [
   // { field: 'sl', headerName: 'SL' },
    //{ field: 'startDate', headerName: 'Date', flex: 1 },
    //{ field: 'startTime', headerName: 'Start Time', flex: 1 },
    //{ field: 'endTime', headerName: 'End Time', flex: 1 },
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
        {isLoading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            <Box my={2}>
              <DataGrid rows={schedules} columns={columns} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default SchedulesPage;
