import baseApi from "@/redux/api/baseApi"
import { TQueryParam } from "@/types/bikes.type"

const bikeApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createBike: builder.mutation({
			query: (formData) => {
				return {
					url: "/bikes",
					method: "POST",
					body: formData,
				}
			},
			invalidatesTags: ["bike"],
		}),
		getBike: builder.query({
			query: (args) => {
				const params = new URLSearchParams()

				if (args) {
					args.forEach((item: TQueryParam) => {
						params.append(item.name, item.value as string)
					})
				}
				return {
					url: `/bikes?${params.toString()}`,
					method: "GET",
					// params: params,
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
		updateBike: builder.mutation({
			query: (options) => {
				return {
					url: `/bikes/${options.id}`,
					method: "PUT",
					body: options.data,
					headers: { Authorization: `${options.token}` },
				}
			},
			invalidatesTags: ["bike"],
		}),
		deleteBike: builder.mutation({
			query: (id) => {
				return {
					url: `/bikes/${id}`,
					method: "DELETE",
				}
			},
			invalidatesTags: ["bike"],
		}),
	}),
})
export default bikeApi
