import { configureStore } from "@reduxjs/toolkit"
import bikeReducer from "./features/bikeSlice"
import userReducer from "./features/userSlice"

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
	key: "bike",
	storage,
}

const persistedProductReducer = persistReducer(persistConfig, bikeReducer)

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		bike: persistedProductReducer,
		user: userReducer,
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
