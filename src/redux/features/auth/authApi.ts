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
		getMe: builder.query({
			query: (token) => {
				return {
					url: "/users/me",
					method: "GET",
					headers: { Authorization: `${token}` },
				}
			},
		}),
		updateMe: builder.mutation({
			query: (userInfo) => {
				return {
					url: "/users/me",
					method: "PUT",
					body: userInfo.data,
					headers: { Authorization: `${userInfo.token}` },
				}
			},
		}),
	}),
})
export default authApi
