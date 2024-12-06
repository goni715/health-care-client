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
        url: "/specialties/get-all-specialties?page=1&limit=50",
        method: "GET",
      }),
      providesTags: ["Specialties"],
    }),
    deleteSpecialty: build.mutation({
      query: (id) => ({
        url: `/specialties/delete-specialties/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Specialties"],
    }),
  }),
})

export const { useCreateSpecialtyMutation, useGetAllSpecialtiesQuery, useDeleteSpecialtyMutation } = specialtiesApi;