// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://bike-rental-service-rose.vercel.app/api",
	}),
	tagTypes: ["bike"],
	endpoints: (builder) => ({
		getBike: builder.query({
			query: () => {
				return {
					url: `/bikes`,
					method: "GET",
				}
			},
			providesTags: ["bike"],
		}),
		// getSingleBike: builder.query({
		// 	query: (id) => {
		// 		return {
		// 			url: `/bikes/${id}`,
		// 			method: "GET",
		// 		}
		// 	},
		// 	providesTags: ["bike"],
		// }),
		// postBike: builder.mutation({
		// 	query: (data) => {
		// 		return {
		// 			url: "/bikes",
		// 			method: "POST",
		// 			body: data,
		// 		}
		// 	},
		// 	invalidatesTags: ["bike"],
		// }),
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default baseApi
