import { baseApi } from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBooks: build.query({
      // query: (arg: Record<string, any>) => {
      query: () => {
        return {
          url: `/all-booking`,
          method: "GET",
          // params: arg,
        };
      },
      providesTags: ["booking"],
    }),
    getAllBookingByUser: build.query({
      query: (id:string | undefined) => {
        return {
          url: `/all-booking/${id}`,
          method: "GET",
        };
      },
      providesTags: ["booking"],
    }),
    postBooking: build.mutation({
      query: (payload) => ({
        url: `/create-booking`,
        method: "POST",
        data: payload
      }),
      invalidatesTags:["booking"]
    }),
  }),
});

export const { useGetAllBooksQuery, useGetAllBookingByUserQuery, usePostBookingMutation } = bookingApi;
