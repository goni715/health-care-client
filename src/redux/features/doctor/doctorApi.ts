import { baseApi } from "../api/baseApi"

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDoctors: build.query({
      query: () => ({
        url: "/doctor/get-all-doctors",
        method: "GET",
      }),
      providesTags: ["Doctors"],
    }),
  }),
})

export const { useGetAllDoctorsQuery } = doctorApi;