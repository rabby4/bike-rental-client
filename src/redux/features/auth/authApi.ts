import baseApi from "@/redux/api/baseApi"

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		loginUser: builder.mutation({
			query: (data) => {
				return {
					url: "/auth/login",
					method: "POST",
					body: data,
				}
			},
		}),
		registration: builder.mutation({
			query: (data) => {
				return {
					url: "/auth/signup",
					method: "POST",
					body: data,
				}
			},
		}),
	}),
})
export default authApi
