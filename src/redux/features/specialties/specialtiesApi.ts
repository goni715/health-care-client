import { baseApi } from "../api/baseApi"

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: `/specialties/create-specialties`,
        method: 'POST',
        contentType: 'multipart/form-data',
        data:data,
      }),
      invalidatesTags: ["Specialties"],
    }),
    getAllSpecialties: build.query({
      query: () => ({
        url: "/specialties/get-all-specialties",
        method: "GET",
      }),
      providesTags: ["Specialties"],
    }),
  }),
})

export const { useCreateSpecialtyMutation, useGetAllSpecialtiesQuery } = specialtiesApi;