import { baseApi } from "../api/baseApi"

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/schedule/get-all-schedules",
        method: "GET",
        params:arg
      }),
      providesTags: ["Schedules"],
    }),
    createSchedule: build.mutation({
      query: (data) => ({
        url: `/schedule/create-schedule`,
        method: 'POST',
        data:data,
      }),
      invalidatesTags: ["Schedules"]
    })
  }),
})

export const { useGetAllSchedulesQuery, useCreateScheduleMutation } = scheduleApi;