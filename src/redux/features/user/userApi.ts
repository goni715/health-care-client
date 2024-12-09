import { baseApi } from "../api/baseApi";


export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/user/get-my-profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useGetSingleUserQuery } = userApi;