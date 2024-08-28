import { createSlice } from "@reduxjs/toolkit"

export type TUser = {
	id: string
	role: string
	iat: number
	exp: number
}

type TInitialState = {
	user: null | TUser
	token: null | string
}

const initialState: TInitialState = {
	user: null,
	token: null,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { user, token } = action.payload
			state.user = user
			state.token = token
		},
	},
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
