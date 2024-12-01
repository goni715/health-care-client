"use client"
import { Container, Stack, Box, Typography, Grid, TextField, Button } from "@mui/material";
import assets from '@/assets';
import Image from "next/image";
import Link from 'next/link';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { ILoginUser } from "@/types/globals/globalsType";
import { ErrorToast, LoadingToast, SuccessToast } from "@/helper/ValidationHelper";
import { setToken } from "@/helper/SessionHelper";
import { useRouter } from 'next/navigation';
import loginUser from "@/services/actions/loginUser";



const LoginPage = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<ILoginUser>({
      defaultValues: {
         email: 'patient@gmail.com',
         password: '123456'
      }
    });

    const router = useRouter();


    const onSubmit:SubmitHandler<ILoginUser> = async (data) =>{
      const toastId = LoadingToast('Processing...')

      try{
         const res = await loginUser(data);
         if(res.success){
            SuccessToast('Login Success', toastId);
            setToken(res?.data?.accessToken);
            router.push('/')
            //window.location.href="/";
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
                           Login Health Care
                        </Typography>
                     </Box>
                  </Stack>
                  <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} mt={1}>
                       
                        <Grid item xs={12}>
                          <TextField 
                             id="outlined-basic"
                             label="Email"
                             type="email"
                             variant="outlined" 
                             size="small"
                             fullWidth={true}
                             {...register('email')}
                           />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField 
                             id="outlined-basic"
                             label="Password"
                             type="password"
                             variant="outlined" 
                             size="small"
                             fullWidth={true}
                             {...register('password')}
                           />
                        </Grid>
                     </Grid>
                     <Typography component="p" sx={{textAlign: 'right'}} color="secondary.main" fontWeight={300} mt={1}>
                           <Link href="/forgot-password"> Forgot Password?  </Link>
                     </Typography>
                     <Button sx={{
                        margin: '20px 0px'
                       }} fullWidth={true} 
                       type="submit"
                     >
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

export default LoginPage;