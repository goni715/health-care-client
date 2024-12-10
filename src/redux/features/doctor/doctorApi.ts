import { baseApi } from "../api/baseApi"

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor/get-all-doctors",
        method: "GET",
        params:arg
      }),
      providesTags: ["Doctors"],
    }),
    getSingleDoctor: build.query({
      query: (id) => ({
        url: `/doctor/get-single-doctor/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [
        {type: "Doctor", id:arg}, //Dynamic Tag
      ],
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
    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/delete-doctor/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Doctors"],
    }),
  }),
})

export const { useGetAllDoctorsQuery, useGetSingleDoctorQuery, useCreateDoctorMutation, useDeleteDoctorMutation } = doctorApi;