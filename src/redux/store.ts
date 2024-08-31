import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/auth/userSlice"
import compareReducer from "./features/bike/bikeSlice"

import baseApi from "./api/baseApi"
import storage from "redux-persist/lib/storage"
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist"

const persistConfig = {
	key: "user",
	storage,
}
const persistConfig1 = {
	key: "compare",
	storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer)
const persistedBikeReducer = persistReducer(persistConfig1, compareReducer)

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		user: persistedUserReducer,
		compare: persistedBikeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// parsist store
export const persistor = persistStore(store)
