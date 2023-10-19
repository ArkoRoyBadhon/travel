import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postService: build.mutation({
      query: (formData) => ({
        url: `/service`,
        method: "POST",
        data: formData,
      }),
      invalidatesTags: ["service"],
    }),
    getAllServices: build.query({
      // query: (arg: Record<string, any>) => {
      query: () => {
        return {
          url: `/services`,
          method: "GET",
          // params: arg,
        };
      },
      providesTags: ["service"],
    }),
    getServiceById: build.query({
      // query: (arg: Record<string, any>) => {
      query: (id: string | undefined) => {
        return {
          url: `/service/${id}`,
          method: "GET",
          // params: arg,
        };
      },
      providesTags: ["service"],
    }),
    postReview: build.mutation({
      query: (payload) => ({
        url: `/review`,
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["service"],
    }),
    patchService: build.mutation({
      query: ({ id, updateInfo }) => ({
        url: `/service/${id}`,
        method: "PATCH",
        data: updateInfo,
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: build.mutation({
      query: ({ id }) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  usePostServiceMutation,
  useGetAllServicesQuery,
  useGetServiceByIdQuery,
  usePostReviewMutation,
  usePatchServiceMutation,
  useDeleteServiceMutation
} = serviceApi;
