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
import { Star, StarIcon } from "lucide-react"
import reviewApi from "@/redux/features/review/reviewApi"
import { TReview } from "@/types/review.type"

type BikeCardProps = {
	bike: TBike
}

const BikeCard: React.FC<BikeCardProps> = ({ bike }) => {
	const dispatch = useAppDispatch()
	const handleCompare = (data: TBike) => {
		dispatch(addBike(data))
		toast.success("Successfully add to compare list!")
	}
	const { data: bikeReviews } = reviewApi.useGetReviewsQuery(bike?._id, {
		pollingInterval: 10000,
	})
	const allReviews = bikeReviews?.data
	const totalRating = allReviews?.reduce(
		(sum: number, review: TReview) => sum + review?.rating,
		0
	)
	const averageRating = totalRating / allReviews?.length

	const avgRating = (rating: number) => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
			stars.push(
				i <= rating ? (
					<Star
						key={i}
						size={15}
						className="text-yellow-500 fill-yellow-500 "
					/>
				) : (
					<StarIcon key={i} size={15} className="text-yellow-500" />
				)
			)
		}
		return stars
	}

	return (
		<div>
			<Card className="action-hover overflow-hidden rounded-none ">
				<CardHeader className="p-0 relative ">
					<img src={bike?.image} alt="" width={"450px"} height={"265px"} />
					<div className="action-buttons flex justify-center px-5 z-0 absolute bottom-0 w-full">
						<Button
							onClick={() => handleCompare(bike)}
							className="bg-accent-foreground font-inter"
						>
							Add To Compare
						</Button>
					</div>
				</CardHeader>
				<CardContent className="space-y-2 pt-2 z-10 relative bg-white dark:bg-[#020817]">
					<div className="flex justify-between">
						<p className=" text-gray-400 font-inter font-light text-sm italic tracking-wider">
							{bike.category.replace(/_/g, " ")}
						</p>
						<div className="flex">{avgRating(averageRating)}</div>
					</div>
					<CardTitle className="lg:text-2xl md:text-xl text-xl font-orbitron tracking-wider font-bold">
						{bike?.name}
					</CardTitle>
					<hr />
					<CardDescription>
						<div className="flex lg:gap-7 my-7 lg:text-base text-sm">
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
									M. Support: <strong>{bike?.support} KM/h</strong>
								</p>
								<p>
									Weight: <strong>{bike?.weight} KG</strong>
								</p>
							</div>
						</div>
					</CardDescription>
					<CardFooter className="p-0">
						<Button
							// onClick={handleSendDetails}
							className="w-full bg-accent-foreground hover:text-white md:px-10 md:py-6 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase dark:hover:text-black"
						>
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
