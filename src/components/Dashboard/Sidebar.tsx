import { List, Stack, Typography } from "@mui/material";
import logo from "@/assets/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
import generateMenuItems from "@/utils/generateMenuItems";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/helper/SessionHelper";
import { TUserRole } from "@/types/globals/globalsType";
import { useEffect, useState } from "react";

type IAuthUser = {
  id: string;
  iat: number;
  email: string;
  role: TUserRole;
};

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as IAuthUser;
    setUserRole(role);
  }, []);

  const menuItems = generateMenuItems(userRole as TUserRole);

  return (
    <>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        component={Link}
        href="/"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Image src={logo} width={40} height={40} alt="logo" />
        <Typography variant="h6" component="h1">
          Health Care
        </Typography>
      </Stack>
      <div>
        <List>
          {menuItems?.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </List>
      </div>
    </>
  );
};

export default Sidebar;
