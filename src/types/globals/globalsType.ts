import { ReactNode } from 'react';

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