// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: "pokemonApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
	endpoints: () => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default baseApi
