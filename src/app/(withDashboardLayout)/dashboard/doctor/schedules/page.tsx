"use client"
import { Table } from "antd";
import moment from "moment";
import { Stack, IconButton } from "@mui/material";
import CreateDocScheduleModal from './../../../../../components/Modal/ScheduleModal/CreateDocScheduleModal';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetDoctorSchedulesQuery } from "@/redux/features/doctorSchedule/doctorScheduleApi";




const DoctorSchedulesPage = () => {
  const { data, isLoading } = useGetDoctorSchedulesQuery({});
  const schedules = data?.schedules || [];



  const columns = [
    {
      title: "S.L",
      dataIndex: "key",
    },
    {
      title: "Start Date",
      dataIndex: "schedule",
      render: ({startDateTime}:any) =>  <span>{moment(startDateTime).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "End Date",
      dataIndex: "schedule",
      render: ({endDateTime}:any) => <span>{moment(endDateTime).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Start Time",
      dataIndex: "schedule",
      render: ({startDateTime}:any) => <span>{moment(startDateTime).format("h:mm a")}</span>,
    },
    {
      title: "End Time",
      dataIndex: "schedule",
      render: ({endDateTime}:any) => <span>{moment(endDateTime).format("h:mm a")}</span>,
    },
    {
      title: "Action",
      dataIndex: "endDateTime",
      render: (val) => <IconButton aria-label='delete'>
      <DeleteIcon sx={{ color: 'red' }} />
   </IconButton>
    }
  ];

  let tableData: any[] = [];

  if (!isLoading && schedules?.length > 0) {

    tableData = schedules?.map((item: Record<string, unknown>, i)=> ({
      key: Number(i + 1),
      ...item
    }))
  }

  return (
    <>
      <div>
      <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <CreateDocScheduleModal />
        </Stack>

        {isLoading ? (
          <>
            <h1>Loading... </h1>
          </>
        ) : (
          <>
               <div className="px-2 shadow-md rounded-md">
            
              <div className="w-auto overflow-x-auto">
                <Table
                  scroll={{ x: true, y: 400 }}
                  columns={columns}
                  dataSource={tableData}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DoctorSchedulesPage;
