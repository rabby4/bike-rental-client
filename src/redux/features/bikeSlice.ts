import { createSlice } from "@reduxjs/toolkit"

type TBike = {
	_id: string
	name: string
	description: string
	pricePerHour: number
	isAvailable: boolean
	cc: number
	year: number
	model: string
	brand: string
	__v: number
}

type TInitialState = {
	data: TBike[]
}

const initialState: TInitialState = {
	data: [],
}

const bikeSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		// setCart: (state, action) => {
		// 	console.log(state?.data)
		// 	const data = action.payload
		// 	state.data = data
		// },
		// addProduct: (state, action) => {
		// 	try {
		// 		const existingProduct = state?.data?.find(
		// 			(product) => product._id === action.payload._id
		// 		)
		// 		if (!existingProduct) {
		// 			state?.data?.push(action.payload)
		// 		}
		// 	} catch (error) {
		// 		console.log(error)
		// 	}
		// },
		// removeCartData: (state, action) => {
		// 	state.data = state?.data?.filter(
		// 		(product) => product._id !== action.payload.id
		// 	)
		// },
		// removeAllCartData: (state) => {
		// 	state.data = []
		// },
	},
})

export const {} = bikeSlice.actions
export default bikeSlice.reducer
