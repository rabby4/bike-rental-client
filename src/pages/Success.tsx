import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"

const Success = () => {
	return (
		<div className="container ">
			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div
					className="flex flex-1 min-h-[calc(100vh-150px)] items-center justify-center rounded-lg border border-dashed shadow-sm"
					x-chunk="dashboard-02-chunk-1"
				>
					<div className="flex flex-col items-center gap-1 text-center">
						<h3 className="text-2xl font-bold tracking-tight">
							Successfully rent the bike. Enjoy your ride.
						</h3>
						<p className="text-sm text-muted-foreground">
							your rent placed successfully. now you can go home page to click
							below button.
						</p>
						<NavLink to={"/"}>
							<Button className="mt-4 bg-accent-foreground font-orbitron">
								Go To Home
							</Button>
						</NavLink>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Success
