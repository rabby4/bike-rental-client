import { Outlet } from "react-router-dom"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default App
