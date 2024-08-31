import UserSidebar from "@/layouts/UserSidebar"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
	return (
		<div className="grid w-full  lg:grid-cols-[280px_1fr]">
			<UserSidebar />
			<main className="min-h-[calc(100vh-60px)] flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div
					className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm"
					x-chunk="dashboard-02-chunk-1 w-full"
				>
					<div className="flex flex-col w-full">
						<Outlet />
					</div>
				</div>
			</main>
		</div>
	)
}

export default Dashboard
