"use client"
import { isLoggedIn } from "@/helper/SessionHelper";
import { Typography } from "@mui/material";
import Link from "next/link";


const DashboardLink = () => {
    const isLogin = isLoggedIn(); 

    return (
        <>
             {
                isLogin && (
                  <Typography component={Link} href="/dashboard">Dashboard</Typography>
                )
              }
        </>
    );
};

export default DashboardLink;