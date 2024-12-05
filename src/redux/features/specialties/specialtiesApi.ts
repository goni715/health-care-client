import { baseApi } from "../api/baseApi"

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: `/specialties/create-specialties`,
        method: 'POST',
        contentType: 'multipart/form-data',
        data:data,
      })
    }),
  }),
})

export const { useCreateSpecialtyMutation } = specialtiesApi;