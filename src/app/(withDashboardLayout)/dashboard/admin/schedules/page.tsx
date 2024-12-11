"use client"
import { Table } from "antd";
import moment from "moment";
import { Stack, IconButton } from "@mui/material";
import { useGetAllSchedulesQuery } from "@/redux/features/schedule/scheduleApi";
import CreateScheduleModal from './../../../../../components/Modal/ScheduleModal/CreateScheduleModal';
import DeleteIcon from '@mui/icons-material/Delete';




const SchedulesPage = () => {
  const { data, isLoading } = useGetAllSchedulesQuery({});
  const schedules = data?.schedules || [];



  const columns = [
    {
      title: "S.L",
      dataIndex: "key",
    },
    {
      title: "Start Date",
      dataIndex: "startDateTime",
      render: (val) => <span>{moment(val).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "End Date",
      dataIndex: "endDateTime",
      render: (val) => <span>{moment(val).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Start Time",
      dataIndex: "startDateTime",
      render: (val) => <span>{moment(val).format("h:mm a")}</span>,
    },
    {
      title: "End Time",
      dataIndex: "endDateTime",
      render: (val) => <span>{moment(val).format("h:mm a")}</span>,
    },
    {
      title: "End Time",
      dataIndex: "endDateTime",
      render: (val) => <IconButton aria-label='delete'>
      <DeleteIcon sx={{ color: 'red' }} />
   </IconButton>
    },
  ];

  const tableData = [];

  if (!isLoading && schedules?.length > 0) {
    for (let i = 0; i < schedules.length; i++) {
      tableData.push({
        key: Number(i + 1),
        ...schedules[i]
      });
    }
  }

  return (
    <>
      <div>
      <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <CreateScheduleModal />
        </Stack>

        {isLoading ? (
          <>
            <h1>Loading </h1>
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

export default SchedulesPage;
