"use client"
import { Container, Stack, Box, Typography, Grid, TextField, Button } from "@mui/material";
import assets from '@/assets';
import Image from "next/image";
import Link from 'next/link';

const ForgotPasswordPage = () => {
    return (
        <>
           <Container>
             <Stack sx={{
                justifyContent: 'center',
                minHeight: '100vh',
                alignItems: 'center'
             }}>
                <Box sx={{
                    maxWidth: 600,
                    width: '100%',
                    boxShadow: 1,
                    borderRadius: 1,
                    p:4,
                    textAlign: 'center'
                }}>
                  <Stack sx={{
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}>
                     <Box sx={{
                        marginBottom: '8px'
                     }}>
                        <Image src={assets.svgs.logo} width={50} height={50} alt="logo"/>
                     </Box>
                     <Box>
                        <Typography variant="h6" fontWeight={600}>
                           Login Health Care
                        </Typography>
                     </Box>
                  </Stack>
                  <Box>
                    <form>
                    <Grid container spacing={2} mt={1}>
                       
                        <Grid item xs={12}>
                          <TextField 
                             id="outlined-basic"
                             label="Email"
                             type="email"
                             variant="outlined" 
                             size="small"
                             fullWidth={true}
                           />
                        </Grid>
                     </Grid>
                     <Button sx={{
                        margin: '20px 0px'
                       }} fullWidth={true} >
                       Login
                     </Button>
                     <Typography component="p" color="secondary.main" fontWeight={300}>
                       Don&apos;t have an account? 
                           <Link href="/register" style={{
                              color: "#1586FD"
                           }}> Create an account </Link>
                     </Typography>
                   </form>
                  </Box>
                </Box>
             </Stack>
           </Container>
        </>
    );
};

export default ForgotPasswordPage;