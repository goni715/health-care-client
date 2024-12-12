"use client";
import { isLoggedIn, logout } from "@/helper/SessionHelper";
import deleteCookies from "@/services/actions/deleteCookies";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/navigation';


const AuthButton = () => {
   const isLogin = isLoggedIn(); 
   const router = useRouter();

   const handleLogout = () => {
     deleteCookies(['accessToken', 'refreshToken']);
     logout();
     router.refresh()
   }


    return (
      <>
         {isLogin ? (
               <Button color="error" onClick={handleLogout}>
               Logout
             </Button>
            ): (
              <Button component={Link} href="/login">
              Login
            </Button>
            )
        } 
        </>
    );
};

export default AuthButton;