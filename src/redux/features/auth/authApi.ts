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
			invalidatesTags: ["user"],
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
		getAllUsers: builder.query({
			query: (token) => {
				return {
					url: "/users",
					method: "GET",
					headers: { Authorization: `${token}` },
				}
			},
			providesTags: ["user"],
		}),
		getMe: builder.query({
			query: (token) => {
				return {
					url: "/users/me",
					method: "GET",
					headers: { Authorization: `${token}` },
				}
			},
			providesTags: ["user"],
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
			invalidatesTags: ["user"],
		}),
		updateUserToAdmin: builder.mutation({
			query: (userInfo) => {
				return {
					url: `/users/${userInfo.id}`,
					method: "PATCH",
					headers: { Authorization: `${userInfo.token}` },
				}
			},
			invalidatesTags: ["user"],
		}),
		deleteUser: builder.mutation({
			query: (userInfo) => {
				return {
					url: `/users/${userInfo.id}`,
					method: "DELETE",
					headers: { Authorization: `${userInfo.token}` },
				}
			},
			invalidatesTags: ["user"],
		}),
	}),
})
export default authApi
