import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData: any) => ({
        url: `/auth/signin`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    getAllNormalUsers: build.query({
      query: () => {
        return {
          url: `/normal-users`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    getUserById: build.query({
      query: (UserId: string | undefined) => {
        return {
          url: `/users/${UserId}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    updateUser: build.mutation({
      query: ({ updateInfo, UserId }) => ({
        url: `/users/${UserId}`,
        method: "PATCH",
        data: updateInfo,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: build.mutation({
      query: (UserId) => ({
        url: `/users/${UserId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useUserLoginMutation,
  useGetAllNormalUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation
} = authApi;
