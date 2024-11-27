import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch('http://localhost:5000/api/v1/specialties/get-all-specialties', {
    next: {
      revalidate: 30
    }
  });
  const {data:specialties} = await res.json();
    return (
        <>
            <Container>
                <Box sx={{
                    margin: "40px 0px",
                    textAlign: 'start'
                  }}
                >
                    <Box> 
                      <Typography variant="h4" fontWeight={600}>Explore Treatments Across Specialties</Typography>
                      <Typography component="p" fontWeight={300} fontSize={18}>
                        Experienced Doctors Across All Specialties
                      </Typography>
                    </Box>
                </Box>
                <Stack direction="row" gap={4} mt={5}> 
                  {specialties?.map((speciality:any)=> (
                    <Box key={speciality.id}>
                      <Image src={speciality.icon} width={100} height={100} alt="speciality icon"/>
                    </Box>
                  ))}
                </Stack>
            </Container>

        </>
    );
};

export default Specialist;