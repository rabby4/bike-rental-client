import baseApi from "@/redux/api/baseApi"

const couponApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createCoupon: builder.mutation({
			query: (data) => {
				return {
					url: "/coupons",
					method: "POST",
					body: data,
				}
			},
			invalidatesTags: ["coupon"],
		}),
		getCoupon: builder.query({
			query: () => {
				return {
					url: `/coupons`,
					method: "GET",
				}
			},
			providesTags: ["coupon"],
		}),
	}),
})
export default couponApi
