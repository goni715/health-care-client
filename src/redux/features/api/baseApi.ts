import { axiosBaseQuery } from '@/helper/axiosBaseQuery';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ['Specialties', 'Doctors'],
  endpoints: () => ({})
})

