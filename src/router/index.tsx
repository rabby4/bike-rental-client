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
import ProtectedRoute from "@/layouts/ProtectedRoute"
import AllBikes from "@/pages/user/AllBikes"
import Rentals from "@/pages/user/Rentals"
import Success from "@/pages/Success"
import Coupon from "@/pages/admin/Coupon"

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
				path: "/confirmation",
				element: <Success />,
			},
			{
				path: "/dashboard",
				element: (
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				),
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
						path: "coupon",
						element: <Coupon />,
					},
					{
						path: "all-bikes",
						element: <AllBikes />,
					},
					{
						path: "my-rentals",
						element: <Rentals />,
					},
					{
						path: "update-bike/:id",
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
