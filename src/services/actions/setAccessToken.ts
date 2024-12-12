"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


const setAccessToken = (token: string, redirectURL?:string) => {
     cookies().set('accessToken', token);
     if(redirectURL){
        redirect(redirectURL)
     }
}

export default setAccessToken;