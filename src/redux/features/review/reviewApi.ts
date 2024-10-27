import baseApi from "@/redux/api/baseApi"

const reviewApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createReview: builder.mutation({
			query: (data) => {
				return {
					url: "/reviews",
					method: "POST",
					body: data,
				}
			},
			invalidatesTags: ["reviews"],
		}),
		getReviews: builder.query({
			query: (bikeId) => {
				return {
					url: `/reviews/${bikeId}`,
					method: "GET",
				}
			},
			providesTags: ["reviews"],
		}),
	}),
})
export default reviewApi
