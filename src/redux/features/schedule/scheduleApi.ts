import { baseApi } from "../api/baseApi"

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor/get-all-doctors",
        method: "GET",
        params:arg
      }),
      providesTags: ["Doctors"],
    }),
    createSchedule: build.mutation({
      query: (data) => ({
        url: `/schedule/create-schedule`,
        method: 'POST',
        contentType: 'multipart/form-data',
        data:data,
      }),
      //invalidatesTags: [""]
    })
  }),
})

export const { useCreateScheduleMutation } = scheduleApi;