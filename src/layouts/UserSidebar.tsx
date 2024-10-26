import { Separator } from "@/components/ui/separator"
import { currentToken, logout } from "@/redux/features/auth/userSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { JwtPayload } from "@/types/user.type"
import { verifyToken } from "@/utils/verifyToken"
import {
	Bike,
	Cog,
	Handshake,
	LayoutDashboard,
	ListCheck,
	LogOut,
	PencilRuler,
	Receipt,
	User,
	Users,
} from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "sonner"

const UserSidebar = () => {
	const token = useAppSelector(currentToken)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { role } = verifyToken(token as string) as JwtPayload

	const handleLogout = () => {
		dispatch(logout())
		toast.success("User logged out successfully!")
		navigate("/")
	}
	return (
		<>
			<div className="lg:h-auto my-5 border-r bg-muted/40 block lg:p-5 md:p-2 rounded-md">
				<div className="flex h-full max-h-screen flex-col gap-2 w-fit">
					<div className="flex-1 font-inter">
						<nav className="grid grid-cols-1 items-start px-2 text-base font-medium lg:px-4">
							{/* these two routes for users and admins */}
							<NavLink
								to="/dashboard"
								className={
									"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
								}
							>
								<LayoutDashboard size={22} />
								Dashboard
							</NavLink>
							<NavLink
								to="/dashboard/my-profile"
								className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white`}
							>
								<User size={22} />
								Profile
							</NavLink>
							<Separator />
							{/* these routes for only admins */}
							{role === "admin" ? (
								<>
									<NavLink
										to="/dashboard/bike-management"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
									>
										<Cog size={22} />
										Bike Management
									</NavLink>
									<NavLink
										to="/dashboard/user-management"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
									>
										<Users size={22} />
										User Management
									</NavLink>
									<NavLink
										to="/dashboard/create-bike"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
									>
										<PencilRuler size={22} />
										Create Bikes
									</NavLink>
									<NavLink
										to="/dashboard/return-bike"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
									>
										<Handshake size={22} />
										Return Bikes
									</NavLink>
									<NavLink
										to="/dashboard/coupon"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
									>
										<Receipt size={22} />
										Create Coupon
									</NavLink>
									<Separator />
								</>
							) : (
								<>
									<NavLink
										to="/dashboard/all-bikes"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
									>
										<Bike size={22} />
										All Bikes
									</NavLink>
									<NavLink
										to="/dashboard/my-rentals"
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
									>
										<ListCheck size={22} />
										My Rentals
									</NavLink>
								</>
							)}

							{/* these routes for users */}

							{/* this route for admin and user */}
							<NavLink
								to="/"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<LogOut size={22} />
								<span onClick={handleLogout}>Log Out</span>
							</NavLink>
						</nav>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserSidebar
