import { Bike, LayoutDashboard, ListCheck, User } from "lucide-react"
import { NavLink } from "react-router-dom"

const UserSidebar = () => {
	return (
		<div>
			<div className="md:h-[89vh] my-5 border-r bg-muted/40 block lg:p-5 md:p-2 rounded-md">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex-1">
						<nav className="grid md:grid-cols-1 grid-cols-2 items-start px-2 text-base font-medium lg:px-4">
							<NavLink
								to="/dashboard"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<LayoutDashboard size={50} className="h-4 w-4" />
								Dashboard
							</NavLink>
							<NavLink
								to="/dashboard/my-profile"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<User className="h-4 w-4" />
								Profile
							</NavLink>
							<NavLink
								to="/bikes"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<Bike className="h-4 w-4" />
								All Bikes
							</NavLink>
							<NavLink
								to="/bikes"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<ListCheck className="h-4 w-4" />
								My Rentals
							</NavLink>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserSidebar
