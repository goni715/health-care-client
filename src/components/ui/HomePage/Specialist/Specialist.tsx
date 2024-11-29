import { ISpecialties } from "@/types/specialties/specialties";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import SpecialistItem from "./SpecialistItem";

const Specialist = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/specialties/get-all-specialties`, {
    next: {
      revalidate: 30
    }
  });
  const {data:specialties} = await res.json();
    return (
        <>
            <Container>
                <Box sx={{
                    margin: "80px 0px",
                    textAlign: 'center'
                  }}
                >
                    <Box> 
                      <Typography variant="h4" fontWeight={600}>Explore Treatments Across Specialties</Typography>
                      <Typography component="p" fontWeight={300} fontSize={18}>
                        Experienced Doctors Across All Specialties
                      </Typography>
                    </Box>
                    <Stack direction="row" gap={4} mt={5}> 
                  {specialties?.map((speciality:ISpecialties)=> (
                     <SpecialistItem key={speciality.id} speciality={speciality}/>
                  ))}
                </Stack>
                <Button variant="outlined" sx={{
                  marginTop: "20px"
                }}>View All</Button>
                </Box> 
            </Container>

        </>
    );
};

export default Specialist;