import { Button } from "../ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card"

const BikeCard = () => {
	return (
		<div>
			<Card className="action-hover overflow-hidden rounded-none">
				<CardHeader className="p-0 relative ">
					<img
						src={
							"https://probike.templaza.net/wp-content/uploads/2023/08/2.jpg"
						}
						alt=""
					/>
					<div className="action-buttons flex justify-center px-5 z-0 absolute bottom-0 w-full">
						<Button className="bg-accent-foreground font-inter">
							Add To Compare
						</Button>
					</div>
				</CardHeader>
				<CardContent className="space-y-2 pt-2 z-10 relative bg-white">
					<p className=" text-gray-400 font-inter font-light text-sm italic tracking-wider">
						E-Bike
					</p>
					<CardTitle className="text-2xl font-orbitron tracking-wider font-bold">
						Mondraker CHASER RX
					</CardTitle>
					<hr />
					<CardDescription>
						<div className="flex gap-7 my-7">
							<div className="space-y-3">
								<p>
									Brand: <strong>Mondrake</strong>
								</p>
								<p>
									Torque: <strong>50 Nm - 70 Nm</strong>
								</p>
								<p>
									Color: <strong>violet</strong>
								</p>
								<p>
									Chain: <strong>Shimano CN-M6100</strong>
								</p>
							</div>
							<div className="space-y-3">
								<p>
									Brand: <strong>Mondrake</strong>
								</p>
								<p>
									Torque: <strong>50 Nm - 70 Nm</strong>
								</p>
								<p>
									Color: <strong>violet</strong>
								</p>
								<p>
									Chain: <strong>Shimano CN-M6100</strong>
								</p>
							</div>
						</div>
					</CardDescription>
					<CardFooter className="p-0">
						<Button className="w-full bg-accent-foreground hover:text-white md:px-10 md:py-6 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
							View Details - ($100 / hr)
						</Button>
					</CardFooter>
				</CardContent>
			</Card>
		</div>
	)
}

export default BikeCard
