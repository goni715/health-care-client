"use client"
import { Container, Stack, Box, Typography, Grid, TextField, Button } from "@mui/material";
import assets from '@/assets';
import Image from "next/image";
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import modifyFormData from '@/utils/modifyFormData';
import registerPatient from "@/services/actions/registerPatient";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";
import { useRouter } from 'next/navigation';
import loginUser from "@/services/actions/loginUser";
import { setToken } from "@/helper/SessionHelper";



type Inputs = {
   password: string;
   patientData: {
      name: string;
      email: string;
      contactNumber: string;
      address: string
   }

 };

const RegisterPage = () => {
   const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>( {
      defaultValues: {
         password: '123456',
         patientData: {
            name: 'Patient One',
            email: 'patient1@gmail.com',
            contactNumber: '01793837035',
            address: 'Rajshahi'
         }
      }
   });

   const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async (data) =>{
   const formData = modifyFormData(data);
   const toastId = LoadingToast('Processing...');
   console.log(data)

   try{
      const res = await registerPatient(formData);
      if(res.success){
         const loginRes = await loginUser({
            email: data.patientData.email,
            password: data.password
         });

         if(loginRes.success){
            setToken(loginRes?.data?.accessToken);
            SuccessToast('Register Success', toastId);
            router.push('/');
         }

      }else{
         ErrorToast(res.message, toastId)
      }
   }catch(err){
      ErrorToast('Something Went Wrong', toastId)
   } 
  } 



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
                           Patient Register
                        </Typography>
                     </Box>
                  </Stack>
                  <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={12}>
                          <TextField 
                             id="outlined-basic"
                             label="Name"
                             type="text"
                             variant="outlined" 
                             size="small"
                             fullWidth={true}
                             {...register("patientData.name")}
                           />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField 
                             id="outlined-basic"
                             label="Email"
                             type="email"
                             variant="outlined" 
                             size="small"
                             fullWidth={true}
                             {...register("patientData.email")}
                           />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField 
                             id="outlined-basic"
                             label="Password"
                             type="password"
                             variant="outlined" 
                             size="small"
                             fullWidth={true}
                             {...register("password")}
                           />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField 
                             id="outlined-basic"
                             label="Contact Number"
                             type="text"
                             variant="outlined" 
                             size="small"
                             fullWidth={true}
                             {...register("patientData.contactNumber")}
                           />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField 
                             id="outlined-basic"
                             label="Address"
                             type="text"
                             variant="outlined" 
                             size="small"
                             fullWidth={true}
                             {...register("patientData.address")}
                           />
                        </Grid>
                     </Grid>
                     <Button 
                       sx={{
                        margin: '20px 0px'
                       }} 
                       fullWidth={true}
                       type="submit"
                     >
                        Register
                     </Button>
                     <Typography component="p" color="secondary.main" fontWeight={300}>
                           Do you have already an account? 
                           <Link href="/login" style={{
                              color: "#1586FD"
                           }}> Login </Link>
                     </Typography>
                   </form>
                  </Box>
                </Box>
             </Stack>
           </Container>
        </>
    );
};

export default RegisterPage;