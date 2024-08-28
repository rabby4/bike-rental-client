import { RootState } from "@/redux/store"
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
		logout: (state) => {
			state.user = null
			state.token = null
		},
	},
})

export const { setUser, logout } = userSlice.actions
export default userSlice.reducer
export const currentToken = (state: RootState) => state.user.token
export const currentUser = (state: RootState) => state.user.user
