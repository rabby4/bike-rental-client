// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../store"

const baseQuery = fetchBaseQuery({
	baseUrl: "https://bike-rental-service-rose.vercel.app/api",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).user.token

		if (token) {
			headers.set("authorization", `${token}`)
		}
		return headers
	},
})

// Define a service using a base URL and expected endpoints
const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: baseQuery,
	tagTypes: ["bike"],
	endpoints: () => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default baseApi
