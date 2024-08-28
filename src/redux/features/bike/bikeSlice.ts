import { TBike } from "@/types/bikes.type"
import { createSlice } from "@reduxjs/toolkit"

type TInitialState = {
	data: TBike[]
}

const initialState: TInitialState = {
	data: [],
}

const bikeSlice = createSlice({
	name: "bike",
	initialState,
	reducers: {
		setWish: (state, action) => {
			const data = action.payload
			state.data = data
		},
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

export const { setWish } = bikeSlice.actions
export default bikeSlice.reducer
