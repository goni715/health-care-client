import DashedLine from "@/components/ui/Doctor/DashedLine";
import DoctorCard from "@/components/ui/Doctor/DoctorCard";
import { IDoctor } from "@/types/doctor/doctor.type";
import { Box, Container } from "@mui/material";

const AllDoctorsPage = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/doctor/get-all-doctors"
  );
  const { data } = await res.json();

  return (
    <>
      <Container>
        <DashedLine />

        <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
          {data?.map((doctor: IDoctor, index: number) => (
            <Box key={doctor.id}>
              <DoctorCard doctor={doctor} />

              {index === data.length - 1 ? null : <DashedLine />}
            </Box>
          ))}

          {data.length === 0 && <Box>No Doctor Found With This Specialty</Box>}
        </Box>
      </Container>
    </>
  );
};

export default AllDoctorsPage;
