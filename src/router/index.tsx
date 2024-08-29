import App from "@/App"
import Welcome from "@/components/shared/Welcome"
import About from "@/pages/About"
import BikeDetails from "@/pages/BikeDetails"
import BikeManagement from "@/pages/admin/BikeManagement"
import Bikes from "@/pages/Bikes"
import Blogs from "@/pages/Blogs"
import Contact from "@/pages/Contact"
import CreateBike from "@/pages/admin/CreateBike"
import Dashboard from "@/pages/user/Dashboard"
import Error from "@/pages/Error"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Profile from "@/pages/user/Profile"
import Register from "@/pages/Register"
import ReturnBike from "@/pages/admin/ReturnBike"
import UpdateBike from "@/pages/admin/UpdateBike"
import UserManagement from "@/pages/admin/UserManagement"
import { createBrowserRouter } from "react-router-dom"
import EditProfile from "@/pages/user/EditProfile"
import Compare from "@/pages/Compare"

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
				path: "/compare",
				element: <Compare />,
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
						path: "my-profile",
						element: <Profile />,
					},
					{
						path: "edit-profile",
						element: <EditProfile />,
					},
					{
						path: "create-bike",
						element: <CreateBike />,
					},
					{
						path: "update-bike",
						element: <UpdateBike />,
					},
					{
						path: "bike-management",
						element: <BikeManagement />,
					},
					{
						path: "user-management",
						element: <UserManagement />,
					},
					{
						path: "return-bike",
						element: <ReturnBike />,
					},
				],
			},
		],
	},
])

export default router
