import baseApi from "@/redux/api/baseApi"

const bikeApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createBike: builder.mutation({
			query: (data) => {
				return {
					url: "/bikes",
					method: "POST",
					body: data,
				}
			},
			invalidatesTags: ["bike"],
		}),
		getBike: builder.query({
			query: () => {
				return {
					url: `/bikes`,
					method: "GET",
				}
			},
			providesTags: ["bike"],
		}),
		getSingleBike: builder.query({
			query: (id) => {
				return {
					url: `/bikes/${id}`,
					method: "GET",
				}
			},
			providesTags: ["bike"],
		}),

		// updateBike: builder.mutation({
		// 	query: (options) => {
		// 		return {
		// 			url: `/bikes/${options.id}`,
		// 			method: "PUT",
		// 			body: options.data,
		// 		}
		// 	},
		// 	invalidatesTags: ["bike"],
		// }),
		// deleteBike: builder.mutation({
		// 	query: (id) => {
		// 		return {
		// 			url: `/bikes/${id}`,
		// 			method: "DELETE",
		// 		}
		// 	},
		// 	invalidatesTags: ["bike"],
		// }),
	}),
})
export default bikeApi
