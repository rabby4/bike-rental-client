import { TBike } from "@/types/bikes.type"
import { Button } from "../ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card"
import { NavLink } from "react-router-dom"
import { addBike } from "@/redux/features/bike/bikeSlice"
import { useAppDispatch } from "@/redux/hook"
import { toast } from "sonner"

type BikeCardProps = {
	bike: TBike
}

const BikeCard: React.FC<BikeCardProps> = ({ bike }) => {
	const dispatch = useAppDispatch()
	const handleCompare = (data: TBike) => {
		dispatch(addBike(data))
		toast.success("Successfully add to compare list!")
	}
	return (
		<div>
			<Card className="action-hover overflow-hidden rounded-none">
				<CardHeader className="p-0 relative ">
					<img src={bike?.image} alt="" />
					<div className="action-buttons flex justify-center px-5 z-0 absolute bottom-0 w-full">
						<Button
							onClick={() => handleCompare(bike)}
							className="bg-accent-foreground font-inter"
						>
							Add To Compare
						</Button>
					</div>
				</CardHeader>
				<CardContent className="space-y-2 pt-2 z-10 relative bg-white">
					<p className=" text-gray-400 font-inter font-light text-sm italic tracking-wider">
						{bike.category.replace(/_/g, " ")}
					</p>
					<CardTitle className="text-2xl font-orbitron tracking-wider font-bold">
						{bike?.name}
					</CardTitle>
					<hr />
					<CardDescription>
						<div className="flex gap-7 my-7 text-base">
							<div className="space-y-3 capitalize w-1/2">
								<p>
									Brand: <strong>{bike?.brand}</strong>
								</p>
								<p>
									Model: <strong>{bike?.model}</strong>
								</p>
								<p>
									Bike CC: <strong>{bike?.cc} CC</strong>
								</p>
								<p>
									R. Year: <strong>{bike?.year}</strong>
								</p>
							</div>
							<div className="space-y-3 capitalize w-1/2">
								<p>
									Color: <strong>{bike?.color}</strong>
								</p>
								<p>
									Frame Size: <strong>{bike?.frame} CM</strong>
								</p>
								<p>
									Max Support: <strong>{bike?.support} KM/h</strong>
								</p>
								<p>
									Weight: <strong>{bike?.weight} KG</strong>
								</p>
							</div>
						</div>
					</CardDescription>
					<CardFooter className="p-0">
						<Button className="w-full bg-accent-foreground hover:text-white md:px-10 md:py-6 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
							<NavLink to={`/bike-details/${bike._id}`}>
								View Details - (${bike.pricePerHour} / hr)
							</NavLink>
						</Button>
					</CardFooter>
				</CardContent>
			</Card>
		</div>
	)
}

export default BikeCard
