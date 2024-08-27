import { Separator } from "@/components/ui/separator"
import {
	Bike,
	Cog,
	Handshake,
	LayoutDashboard,
	ListCheck,
	PencilRuler,
	User,
	Users,
} from "lucide-react"
import { NavLink } from "react-router-dom"

const UserSidebar = () => {
	return (
		<div>
			<div className="md:h-[89vh] my-5 border-r bg-muted/40 block lg:p-5 md:p-2 rounded-md">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex-1">
						<nav className="grid md:grid-cols-1 grid-cols-2 items-start px-2 text-base font-medium lg:px-4">
							{/* these two routes for users and admins */}
							<NavLink
								to="/dashboard"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<LayoutDashboard size={20} />
								Dashboard
							</NavLink>
							<NavLink
								to="/dashboard/my-profile"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<User size={20} />
								Profile
							</NavLink>
							<Separator />
							{/* these routes for only admins */}
							<NavLink
								to="/dashboard/bike-management"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<Cog size={20} />
								Bike Management
							</NavLink>
							<NavLink
								to="/dashboard/user-management"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<Users size={20} />
								User Management
							</NavLink>
							<NavLink
								to="/bikes"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<Bike size={20} />
								All Bikes
							</NavLink>
							<NavLink
								to="/create-bike"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<PencilRuler size={20} />
								Create Bikes
							</NavLink>
							<NavLink
								to="/return-bike"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<Handshake size={20} />
								Return Bikes
							</NavLink>
							<Separator />
							{/* these routes for users */}
							<NavLink
								to="/bikes"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<Bike size={20} />
								All Bikes
							</NavLink>
							<NavLink
								to="/bikes"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
							>
								<ListCheck size={20} />
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
