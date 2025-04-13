/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../apiSlice";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: "/order",
        method: "POST",
        body: { productId, quantity },
      }),
      invalidatesTags: ["order"],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
    updateOrder: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/order/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["order"],
    }),
    getOwnOrders: builder.query<any, void>({
      query: () => ({
        url: "/order/own_order",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  usePlaceOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useGetOwnOrdersQuery,
} = orderApi;
