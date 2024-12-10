"use client";
import { TChildren } from "@/types/globals/globalsType";
import { isLoggedIn } from "@/helper/SessionHelper";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";

const MainLayout = ({ children }: TChildren) => {
  const router = useRouter();

  //check login is false
  if (!isLoggedIn()) {
    return router.push("/login");
  }

  return <DashboardLayout> {children} </DashboardLayout>;
};

export default MainLayout;
