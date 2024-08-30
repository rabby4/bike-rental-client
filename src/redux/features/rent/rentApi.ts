import baseApi from "@/redux/api/baseApi"

const rentApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		rentBike: builder.mutation({
			query: (data) => {
				return {
					url: "/rentals",
					method: "POST",
					body: data,
				}
			},
			invalidatesTags: ["rent"],
		}),
		getRent: builder.query({
			query: (token) => {
				return {
					url: `/rentals`,
					method: "GET",
					headers: { Authorization: token },
				}
			},
			providesTags: ["rent"],
		}),
		returnBike: builder.mutation({
			query: (returnInfo) => {
				return {
					url: `/rentals/${returnInfo.id}/return`,
					method: "PUT",
					headers: { Authorization: returnInfo.token },
				}
			},
			invalidatesTags: ["rent"],
		}),
		fullPayment: builder.mutation({
			query: (paymentInfo) => {
				return {
					url: `/rentals/${paymentInfo.id}/full-payment`,
					method: "PATCH",
					headers: { Authorization: paymentInfo.token },
				}
			},
			invalidatesTags: ["rent"],
		}),
	}),
})
export default rentApi
