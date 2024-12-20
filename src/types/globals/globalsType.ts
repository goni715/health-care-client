import { ReactNode } from 'react';
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { USER_ROLE } from '@/constants/global.constant';

export type TChildren = {
  children: ReactNode
}


export interface ILoginUser {
    email: string;
    password: string;
}

export type TMeta = {
  page: number;
  limit: number;
  totalPages: number;
  total: number;
};

export type TUserRole = keyof typeof USER_ROLE;


export interface TDrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: TDrawerItem[];
}


export type ResponseSuccessType = {
  data: any;
  meta?: TMeta;
};


export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IAuthUser = {
  id: string;
  iat: number;
  email: string;
  role: TUserRole;
};

