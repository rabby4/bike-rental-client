import { Button } from "../ui/button"

const Welcome = () => {
	return (
		<div>
			<main className="h-[calc(100vh-60px)] flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div
					className="flex flex-1 justify-center rounded-lg mt-10 shadow-sm"
					x-chunk="dashboard-02-chunk-1"
				>
					<div className="flex flex-col items-center gap-1 text-center">
						<img
							src="https://i.ibb.co/nzxNBpG/8512192.webp"
							alt=""
							className="size-96"
						/>
						<h3 className="text-4xl font-bold tracking-tight font-orbitron ">
							Welcome Golam Rabby
						</h3>
						<p className="text-sm text-muted-foreground font-inter">
							You can rent bikes if you want.
						</p>
						<Button className="mt-4 px-10 bg-accent-foreground font-orbitron tracking-wider">
							Rent Bike
						</Button>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Welcome
