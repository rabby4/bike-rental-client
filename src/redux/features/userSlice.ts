import { createSlice } from "@reduxjs/toolkit"

type TUser = {
	_id: string
	name: string
	email: string
	phone: string
	address: string
	role: string
	createdAt: string
	updatedAt: string
	__v: number
}

type TInitialState = {
	data: TUser[]
}

const initialState: TInitialState = {
	data: [],
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
})

export const {} = userSlice.actions
export default userSlice.reducer
