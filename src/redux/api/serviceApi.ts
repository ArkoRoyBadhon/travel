import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
      query: (id:string | undefined) => {
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
        data: payload
      }),
      invalidatesTags:["service"]
    }),
  }),
});

export const { useGetAllServicesQuery, useGetServiceByIdQuery, usePostReviewMutation } = serviceApi;
