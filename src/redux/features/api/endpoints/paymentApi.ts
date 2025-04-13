import { baseApi } from "../../../api/baseApi";


const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makePayment: builder.mutation({
        query:(data)=>({
            url: '/order',
            method: "POST",
            body: data,
        })
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/order/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
    
  }),
});



export const {useMakePaymentMutation, useVerifyOrderQuery} = paymentApi