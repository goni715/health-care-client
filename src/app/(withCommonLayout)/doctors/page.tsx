import DashedLine from "@/components/ui/Doctor/DashedLine";
import DoctorCard from "@/components/ui/Doctor/DoctorCard";
import ScrollCategory from "@/components/ui/Doctor/ScrollCategory";
import { IDoctor } from "@/types/doctor/doctor.type";
import { Box, Container } from "@mui/material";

interface PropType {
  searchParams: { specialties: string };
}

const AllDoctorsPage = async ({searchParams}: PropType) => {
  let res;

  if (searchParams.specialties) {
    if(searchParams.specialties==="all"){
      res = await fetch('http://localhost:5000/api/v1/doctor/get-all-doctors');
    }else{
      res = await fetch(
        `http://localhost:5000/api/v1/doctor/get-all-doctors?specialties=${searchParams.specialties}`,{
        next: {
          revalidate: 60 //60 seconds
        }}
     );
    }
   
  } else {
     res = await fetch('http://localhost:5000/api/v1/doctor/get-all-doctors');
  }

  const { data } = await res.json();

  return (
    <>
      <Container>
        <DashedLine />
        <ScrollCategory specialties={searchParams.specialties} />

        <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
          {data?.map((doctor: IDoctor, index: number) => (
            <Box key={doctor.id}>
              <DoctorCard doctor={doctor} />

              {index === data.length - 1 ? null : <DashedLine />}
            </Box>
          ))}

          {data?.length === 0 && <Box>No Doctor Found With This Specialty</Box>}
        </Box>
      </Container>
    </>
  );
};

export default AllDoctorsPage;
