import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store.ts"
import { RouterProvider } from "react-router-dom"
import router from "./router/index.tsx"
import { PersistGate } from "redux-persist/integration/react"
import { Toaster } from "sonner"
import { ThemeProvider } from "./components/theme/theme-provider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<RouterProvider router={router} />
				</PersistGate>
			</Provider>
			<Toaster richColors />
		</ThemeProvider>
	</React.StrictMode>
)
