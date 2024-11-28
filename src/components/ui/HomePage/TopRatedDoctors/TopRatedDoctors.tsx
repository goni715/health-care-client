import { Box, Container, Grid, Typography } from "@mui/material";

const TopRatedDoctors = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/doctor/get-all-doctors?page=1&limit=3"
  );
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
            variant="p"
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{
              mt: 2,
            }}
          >
            Access to expert physicians and surgeons, andanced technologies
          </Typography>
          <Typography variant="p" component="p" fontSize={18} fontWeight={400}>
            and top-quality surgery facilities here
          </Typography>
        </Box>

       <Container>
         <Grid container spacing={2}>

         </Grid>
       </Container>

      </Box>
    </>
  );
};

export default TopRatedDoctors;
