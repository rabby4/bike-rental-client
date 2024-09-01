/* eslint-disable no-mixed-spaces-and-tabs */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { currentToken } from "@/redux/features/auth/userSlice"
import rentApi from "@/redux/features/rent/rentApi"
import { useAppSelector } from "@/redux/hook"
import { TRental } from "@/types/rentals.type"
import CurrentTime from "@/utils/CurrentTime"
import { CircleAlert } from "lucide-react"
import moment from "moment"
import { toast } from "sonner"
import UseAnimations from "react-useanimations"
import activity from "react-useanimations/lib/activity"

const ReturnBike = () => {
	const token = useAppSelector(currentToken)
	const [returnBike] = rentApi.useReturnBikeMutation()
	const { data: rentalData, isLoading } = rentApi.useGetRentQuery(token, {
		pollingInterval: 10000,
	})
	const rentalBikes = rentalData?.data

	const handleReturn = async (id: string) => {
		const toastId = toast.loading("Bike return processing...")
		const returnInfo = {
			token,
			id,
		}

		const rentals = rentalBikes.find((rent: TRental) => rent._id === id)

		try {
			if (rentals.isReturned) {
				toast.error("This bike is already returned!", { id: toastId })
				return
			} else {
				const res = await returnBike(returnInfo).unwrap()
				toast.success(res.message, { id: toastId })
			}
		} catch (error) {
			toast.error("Bike return Process Failed...", { id: toastId })
		}
	}

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-center">
					<UseAnimations size={50} animation={activity} />
				</div>
			</div>
		)
	}

	return (
		<div className="p-10">
			<div>
				<h2 className="font-orbitron tracking-wider text-3xl font-bold mb-10">
					Rentals Bikes
				</h2>
			</div>
			<Card className="w-full">
				<CardContent className="font-inter">
					{rentalBikes && rentalBikes.length > 0 ? (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="hidden w-[100px] sm:table-cell">
										<span className="sr-only">img</span>
									</TableHead>
									<TableHead>Name</TableHead>
									<TableHead>Start Time</TableHead>
									<TableHead className="hidden md:table-cell">
										Return Time
									</TableHead>
									<TableHead>Total Cost</TableHead>
									<TableHead>Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{rentalBikes?.map((bike: TRental) => (
									<TableRow key={bike?._id}>
										<TableCell className="hidden sm:table-cell">
											<img
												alt="Product img"
												className="aspect-square rounded-md object-cover"
												height="64"
												src={bike?.bikeId?.image}
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											{bike?.bikeId?.name}
										</TableCell>
										<TableCell className="capitalize">
											{moment(bike?.startTime).format("DD-MM-YYYY, h:mm a")}
										</TableCell>
										<TableCell className="hidden md:table-cell">
											{bike.returnTime ? (
												moment(bike?.returnTime).format("DD-MM-YYYY, h:mm a")
											) : (
												<div className="flex gap-3">
													<CurrentTime />
													<TooltipProvider>
														<Tooltip>
															<TooltipTrigger
																asChild
																className="cursor-pointer"
															>
																<CircleAlert />
															</TooltipTrigger>
															<TooltipContent>
																<p>This bike is currently on rent!</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</div>
											)}
										</TableCell>
										<TableCell className="hidden md:table-cell">
											${bike?.totalCost}
										</TableCell>
										<TableCell className="hidden md:table-cell">
											<Button
												onClick={() => handleReturn(bike?._id)}
												className="bg-accent-foreground font-orbitron tracking-wider px-10 py-5 rounded-none duration-500"
											>
												Calculate
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<>
							<div className="w-1/3 py-20 mx-auto col-span-full">
								<img
									src="https://i.ibb.co/2hx2jQf/folder.png"
									alt=""
									width={"300px"}
									className="mx-auto"
								/>
								<h2 className="text-center font-orbitron lg:text-5xl md:text-3xl text-xl font-bold">
									Bike not found
								</h2>
							</div>
						</>
					)}
				</CardContent>
				<CardFooter></CardFooter>
			</Card>
		</div>
	)
}

export default ReturnBike
