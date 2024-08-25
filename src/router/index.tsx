import App from "@/App"
import About from "@/pages/About"
import BikeDetails from "@/pages/BikeDetails"
import Bikes from "@/pages/Bikes"
import Blogs from "@/pages/Blogs"
import Contact from "@/pages/Contact"
import Error from "@/pages/Error"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
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
				path: "/bike-details/:id",
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
				path: "/manage-product",
				// element: <ManageProduct />,
				children: [
					{
						index: true,
						// element: <Manage />,
					},
					{
						path: "create-product",
						// element: <CreateProduct />,
					},
					{
						path: "update-product/:id",
						// element: <UpdateProduct />,
					},
				],
			},
		],
	},
])

export default router
