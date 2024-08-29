import { Separator } from "@/components/ui/separator"
import { logout } from "@/redux/features/auth/userSlice"
import { useAppDispatch } from "@/redux/hook"
import {
	Bike,
	Cog,
	Handshake,
	LayoutDashboard,
	ListCheck,
	LogOut,
	PencilRuler,
	User,
	Users,
} from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "sonner"

const UserSidebar = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleLogout = () => {
		dispatch(logout())
		toast.success("User logged out successfully!")
		navigate("/")
	}
	return (
		<div>
			<div className="md:h-[89vh] my-5 border-r bg-muted/40 block lg:p-5 md:p-2 rounded-md">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex-1 font-inter">
						<nav className="grid md:grid-cols-1 grid-cols-2 items-start px-2 text-base font-medium lg:px-4">
							{/* these two routes for users and admins */}
							<NavLink
								to="/dashboard"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<LayoutDashboard size={22} />
								Dashboard
							</NavLink>
							<NavLink
								to="/dashboard/my-profile"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<User size={22} />
								Profile
							</NavLink>
							<Separator />
							{/* these routes for only admins */}
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
							<Separator />

							{/* these routes for users */}
							<NavLink
								to="/bikes"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<Bike size={22} />
								All Bikes
							</NavLink>
							<NavLink
								to="/bikes"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<ListCheck size={22} />
								My Rentals
							</NavLink>

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
		</div>
	)
}

export default UserSidebar
