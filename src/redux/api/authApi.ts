import { baseApi } from "./baseApi"

const AUTH_URL = "/auth";


const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData: any) => ({
        url: `/auth/signin`,
        method: "POST",
        data: loginData
      }),
      invalidatesTags:["user"]
    }),
  }),
  overrideExisting: false,
})

export const { useUserLoginMutation } = authApi