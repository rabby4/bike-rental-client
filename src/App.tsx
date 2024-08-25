import { Outlet } from "react-router-dom"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

function App() {
	return (
		<>
			<Header />
			<div className="min-h-screen">
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default App
