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
	}),
})
export default rentApi
