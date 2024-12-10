"use client"
import { Container, Stack, Box, Typography, Grid, Button } from "@mui/material";
import assets from '@/assets';
import Image from "next/image";
import Link from 'next/link';
import { FieldValues } from "react-hook-form";
import { LoadingToast, SuccessToast, DismissToast } from "@/helper/ValidationHelper";
import { setToken } from "@/helper/SessionHelper";
import { useRouter } from 'next/navigation';
import loginUser from "@/services/actions/loginUser";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import Error from "@/components/ui/Error/Error";
import {useState} from 'react';
import { LoginSchema } from "@/schemas/auth.schema";





const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const router = useRouter();


    const onSubmit = async (data: FieldValues) =>{
      setError('')
      const toastId = LoadingToast('Processing...');
      setLoading(true)

      try{
         const res = await loginUser(data);
         if(res.success){
            SuccessToast('Login Success', toastId);
            setToken(res?.data?.accessToken);
            setLoading(false)
            router.push('/dashboard')
            //window.location.href="/";
         }else{         
            DismissToast();
            setError(res.message)
            setLoading(false)
         }
      }catch(err){
         DismissToast();
         setLoading(false)
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
                  {error && (
                     <Error message={error}/>
                  )}
                  <Box>
                    <PHForm onSubmit={onSubmit} schema={LoginSchema}>
                    <Grid container spacing={2} mt={1}>                    
                       <Grid item xs={12}>
                          <PHInput name="email" label="Email" type="text"/>
                       </Grid>
                       <Grid item xs={12}>
                          <PHInput name="password" label="Password" type="password"/>
                       </Grid>
                    </Grid>        
                     <Typography component="p" sx={{textAlign: 'right'}} color="secondary.main" fontWeight={300} mt={1}>
                           <Link href="/forgot-password"> Forgot Password?  </Link>
                     </Typography>
                     <Button sx={{
                        margin: '20px 0px'
                       }} fullWidth={true} 
                       type="submit"
                       disabled={loading}
                     >
                       Login
                     </Button>
                     <Typography component="p" color="secondary.main" fontWeight={300}>
                        Don&apos;t have an account? 
                           <Link href="/register" style={{
                              color: "#1586FD"
                           }}> Create an account </Link>
                     </Typography>
                   </PHForm>
                  </Box>
                </Box>
             </Stack>
           </Container>
        </>
    );
};

export default LoginPage;