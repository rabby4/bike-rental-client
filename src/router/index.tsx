import App from "@/App"
import Welcome from "@/components/shared/Welcome"
import About from "@/pages/About"
import BikeDetails from "@/pages/BikeDetails"
import Bikes from "@/pages/Bikes"
import Blogs from "@/pages/Blogs"
import Contact from "@/pages/Contact"
import Dashboard from "@/pages/Dashboard"
import Error from "@/pages/Error"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Profile from "@/pages/Profile"
import Register from "@/pages/Register"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error></Error>,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/about-us",
				element: <About />,
			},
			{
				path: "/contact-us",
				element: <Contact />,
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
			{
				path: "/bikes",
				element: <Bikes />,
			},
			{
				path: "/bike-details",
				element: <BikeDetails />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/registration",
				element: <Register />,
			},
			{
				path: "/cart",
				// element: <Cart />,
			},
			{
				path: "/checkout",
				// element: <Checkout />,
			},
			{
				path: "/thank-you",
				// element: <ThankYou />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
				children: [
					{
						index: true,
						element: <Welcome />,
					},
					{
						path: "create-product",
						// element: <CreateProduct />,
					},
					{
						path: "my-profile",
						element: <Profile />,
					},
				],
			},
		],
	},
])

export default router
