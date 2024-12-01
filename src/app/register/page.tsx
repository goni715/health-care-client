"use client";
import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import modifyFormData from "@/utils/modifyFormData";
import registerPatient from "@/services/actions/registerPatient";
import {
  ErrorToast,
  LoadingToast,
  SuccessToast,
} from "@/helper/ValidationHelper";
import { useRouter } from "next/navigation";
import loginUser from "@/services/actions/loginUser";
import { setToken } from "@/helper/SessionHelper";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import {useState} from 'react';


const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
       const formData = modifyFormData(data);
       const toastId = LoadingToast('Processing...');
       setLoading(true)

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
                setLoading(false)
             }

          }else{
             ErrorToast(res.message, toastId);
             setLoading(false)
          }
       }catch(err){
          ErrorToast('Something Went Wrong', toastId);
          setLoading(false)
       }
  };

  return (
    <>
      <Container>
        <Stack
          sx={{
            justifyContent: "center",
            minHeight: "100vh",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              boxShadow: 1,
              borderRadius: 1,
              p: 4,
              textAlign: "center",
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  marginBottom: "8px",
                }}
              >
                <Image
                  src={assets.svgs.logo}
                  width={50}
                  height={50}
                  alt="logo"
                />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  Patient Register
                </Typography>
              </Box>
            </Stack>
            <Box>
              <PHForm onSubmit={onSubmit}>
                <Grid container spacing={2} mt={1}>
                  <Grid item xs={12}>
                    <PHInput
                      label="Name"
                      type="text"
                      name="patientData.name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PHInput
                      label="Email"
                      type="text"
                      name="patientData.email"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PHInput label="Password" type="password" name="password" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PHInput
                      label="Contact Number"
                      type="text"
                      name="patientData.contactNumber"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PHInput
                      label="Address"
                      type="text"
                      name="patientData.address"
                    />
                  </Grid>
                </Grid>
                <Button
                  sx={{
                    margin: "20px 0px",
                  }}
                  fullWidth={true}
                  type="submit"
                  disabled={loading}
                >
                  Register
                </Button>
                <Typography
                  component="p"
                  color="secondary.main"
                  fontWeight={300}
                >
                  Do you have already an account?
                  <Link
                    href="/login"
                    style={{
                      color: "#1586FD",
                    }}
                  >
                    {" "}
                    Login{" "}
                  </Link>
                </Typography>
              </PHForm>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default RegisterPage;
