"use client";
import { TChildren } from "@/types/globals/globalsType";
import { isLoggedIn } from "@/helper/SessionHelper";

const AuthLayout = ({ children }: TChildren) => {

  //check login is false
  if(isLoggedIn()) {
    window.location.href="/";
    return;
   
  }else{
    return (
      <div> {children} </div>
    )
  }
};

export default AuthLayout;
