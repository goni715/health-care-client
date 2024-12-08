import CreateScheduleModal from "@/components/Modal/ScheduleModal/CreateScheduleModal";
import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const SchedulesPage = () => {
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