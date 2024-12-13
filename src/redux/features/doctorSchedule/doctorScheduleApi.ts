import { TMeta } from "@/types/globals/globalsType";
import { baseApi } from "../api/baseApi"

const doctorScheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctorSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-schedule/get-my-schedules",
        method: "GET",
        params:arg
      }),
      transformResponse: (response: [], meta: TMeta) => {
        return {
          schedules: response,
          meta,
        };
      },
      providesTags: ["DoctorSchedules"],
    }),
    getAllDoctorSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-schedule/get-all-doctor-schedules",
        method: "GET",
        params:arg
      }),
      transformResponse: (response: [], meta: TMeta) => {
        return {
          doctorSchedules: response,
          meta,
       };
      },
      providesTags: ["DoctorSchedules"],
    }),
    createDoctorSchedule: build.mutation({
      query: (data) => ({
        url: `/doctor-schedule/create-doctor-schedule`,
        method: 'POST',
        data:data,
      }),
      invalidatesTags: ["DoctorSchedules"]
    }),
    deleteDoctorSchedule: build.mutation({
      query: (scheduleId) => ({
        url: `/doctor-schedule/delete-doctor-schedule/${scheduleId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["DoctorSchedules"]
    })
  }),
})

export const { useGetDoctorSchedulesQuery, useGetAllDoctorSchedulesQuery, useCreateDoctorScheduleMutation, useDeleteDoctorScheduleMutation } = doctorScheduleApi;