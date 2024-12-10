"use client";
import { TChildren } from "@/types/globals/globalsType";
import { isLoggedIn } from "@/helper/SessionHelper";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }: TChildren) => {

  //check login is false
  if (!isLoggedIn()) {
    return (
      <div> {children} </div>
    )
  }else{
    window.location.href="/"
  }

};

export default AuthLayout;
