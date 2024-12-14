import { TMeta } from "@/types/globals/globalsType";
import { baseApi } from "../api/baseApi"

export const appointmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAppointment: build.mutation({
      query: (data) => ({
        url: "/appointment",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Appointments"],
    }),
    getAllAppointments: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/appointment",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: TMeta) => {
        return {
          appointments: response,
          meta,
        };
      },
      providesTags: ["Appointment"],
    }),
    getMyAppointments: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/appointment/my-appointments",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: TMeta) => {
        return {
          appointments: response,
          meta,
        };
      },
      providesTags: ["Appointments"],
    }),
  
  }),
});

export const {
  useCreateAppointmentMutation,
  useGetAllAppointmentsQuery,
  useGetMyAppointmentsQuery,
  useGetAppointmentQuery,
  useAppointmentStatusChangeMutation,
  useDeleteAppointmentMutation,
} = appointmentApi;
