import { IDoctor } from "@/types/doctor/doctor.type";
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import doctor_img from '@/assets/doctor-image1.png';

const TopRatedDoctors = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/doctor/get-all-doctors?page=1&limit=3`, {
    next: {
      revalidate: 30
    }
  })

 
  const { data: doctors } = await res.json();
  //console.log(doctors)

  return (
    <>
      <Box
        sx={{
          my: 10,
          py: 30,
          backgroundColor: "rgba(20, 20, 20, 0.1)",
          clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Our Top Rated Doctors
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{
              mt: 2,
              color: "text.secondary"
            }}
          >
            Access to expert physicians and surgeons, andanced technologies
          </Typography>
          <Typography  sx={{ color: "text.secondary" }} component="p" fontSize={18} fontWeight={400}>
            and top-quality surgery facilities here
          </Typography>
        </Box>

        <Container sx={{
          margin: "40px auto"
        }}>
          <Grid container spacing={2}>
            {doctors?.map((doctor: IDoctor) => (
              <Grid item key={doctor.id} md={4}>
                <Card>
                  <Box>
                    <Image src={doctor?.profilePhoto || doctor_img} width={500} height={100} alt="doctor"/>
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {doctor.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                     {doctor.qualification}, {" "} 
                     {doctor.designation}
                    </Typography>
                    <Typography  variant="body2"
                      sx={{ color: "text.secondary" }} mt={1}>
                       <LocationOnIcon/> {doctor?.address}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{
                    justifyContent: 'space-between',
                    paddingBottom: '20px'
                  }}>
                    <Button >Book Now</Button>
                    <Button component={Link} href={`/doctors/${doctor?.id}`} variant="outlined">View Profile</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{
            textAlign: 'center',
            marginTop: "20px"
          }}> 
            <Button variant="outlined" component={Link} href="/doctors">View All </Button> 
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TopRatedDoctors;
