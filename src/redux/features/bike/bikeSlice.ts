import { TBike } from "@/types/bikes.type"
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "@/redux/store"

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
		setCompare: (state, action) => {
			const data = action.payload
			state.data = data
		},
		addBike: (state, action) => {
			try {
				const existingBike = state?.data?.find(
					(bike) => bike._id === action.payload._id
				)
				if (!existingBike) {
					state?.data?.push(action.payload)
				}
			} catch (error) {
				console.log(error)
			}
		},
		removeCompareData: (state, action) => {
			state.data = state?.data?.filter(
				(product) => product._id !== action.payload.id
			)
		},
		removeAllCompareData: (state) => {
			state.data = []
		},
	},
})

export const { setCompare, addBike, removeCompareData, removeAllCompareData } =
	bikeSlice.actions
export default bikeSlice.reducer
export const currentCompareData = (state: RootState) => state.compare.data
