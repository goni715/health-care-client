"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from 'next/dynamic';
import useUserInfo from "@/hooks/useUserInfo";




const Navbar = () => {
  const AuthButton = dynamic(() => import('@/components/shared/Navbar/AuthButton'), { 
    ssr: false,
    loading: () =>  <button className="logout-button"> logout</button>,
  })

  // const DashboardLink = dynamic(() => import('@/components/shared/Navbar/DashboardLink'), { 
  //   ssr: false,
  //   //loading: () =>  <button className="logout-button"> logout</button>,
  // })

  const userInfo = useUserInfo();





    return (
      <>
        <Container>
          <Stack
            py={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" component={Link} href="/" fontWeight={600}>
              P
              <Box component="span" color="primary.main">
                H
              </Box>{" "}
              Health Care
            </Typography>
            <Stack direction="row" gap={4}>
              <Typography component={Link} href="/consultation">
                Consultation
              </Typography>
              <Typography>Health Plans</Typography>
              <Typography>Medicine</Typography>
              <Typography>Diagnostics</Typography>
              <Typography>NGOs</Typography>
              {/* <DashboardLink/> */}
              {
                userInfo?.id && (
                  <Typography component={Link} href="/dashboard">Dashboard</Typography>
                )
              }
             
            </Stack>
           <AuthButton/>
          
          </Stack>
        </Container>
      </>
    );
};

export default Navbar;