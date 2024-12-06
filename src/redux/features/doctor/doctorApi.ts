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
    createDoctor: build.mutation({
      query: (data) => ({
        url: `/user/create-doctor`,
        method: 'POST',
        contentType: 'multipart/form-data',
        data:data,
      }),
      invalidatesTags: ["Doctors"],
    }),
  }),
})

export const { useGetAllDoctorsQuery, useCreateDoctorMutation } = doctorApi;