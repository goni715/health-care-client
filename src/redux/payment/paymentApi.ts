import { baseApi } from "../features/api/baseApi";


const paymentApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      initialPayment: build.mutation({
         query: (id: string) => ({
            url: `/payment/init-payment/${id}`,
            method: 'POST',
         }),
         invalidatesTags: ["Payments"],
      }),
   }),
});

export const { useInitialPaymentMutation } = paymentApi;

export default paymentApi;
