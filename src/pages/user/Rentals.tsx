import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

const Rentals = () => {
	const token = useAppSelector(currentToken)
	const { data: rentalData } = rentApi.useGetRentQuery(token)
	const rentalBikes = rentalData?.data
	console.log(rentalBikes)

	return (
		<div className="p-10">
			<div>
				<h2 className="font-orbitron tracking-wider text-3xl font-bold mb-10">
					Rentals Bikes
				</h2>
			</div>
			<Tabs defaultValue="all" className="flex flex-col items-center">
				<TabsList className="w-full">
					<TabsTrigger
						value="all"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						All Rentals
					</TabsTrigger>
					<TabsTrigger
						value="unpaid"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						Unpaid Rentals
					</TabsTrigger>
					<TabsTrigger
						value="paid"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						Paid Rentals
					</TabsTrigger>
				</TabsList>
				<TabsContent value="all" className="w-full">
					<Card className="w-full">
						<CardContent className="font-inter">
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
									</TableRow>
								</TableHeader>
								<TableBody>
									{rentalBikes?.map((bike: TRental) => (
										<TableRow key={bike._id}>
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
												{bike.bikeId.name}
											</TableCell>
											<TableCell className="capitalize">
												{moment(bike.startTime).format("DD-MM-YYYY, h:mm a")}
											</TableCell>
											<TableCell className="hidden md:table-cell">
												{bike.returnTime
													? moment(bike.returnTime).format("DD-MM-YYYY, h:mm a")
													: "Did`t return yet"}
											</TableCell>

											<TableCell className="hidden md:table-cell">
												${bike.totalCost}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter></CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="unpaid" className="w-full">
					<Card className="w-full">
						<CardContent className="font-inter">
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
									</TableRow>
								</TableHeader>
								<TableBody>
									{rentalBikes?.map((bike: TRental) => (
										<TableRow key={bike._id}>
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
												{bike.bikeId.name}
											</TableCell>
											<TableCell className="capitalize">
												{moment(bike.startTime).format("DD-MM-YYYY, h:mm a")}
											</TableCell>
											<TableCell className="hidden md:table-cell">
												{bike.returnTime ? (
													moment(bike.returnTime).format("DD-MM-YYYY, h:mm a")
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
												${bike.totalCost}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter></CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="paid" className="w-full">
					<Card className="w-full">
						<CardContent className="font-inter">
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
									</TableRow>
								</TableHeader>
								<TableBody>
									{rentalBikes?.map((bike: TRental) => (
										<TableRow key={bike._id}>
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
												{bike.bikeId.name}
											</TableCell>
											<TableCell className="capitalize">
												{moment(bike.startTime).format("DD-MM-YYYY, h:mm a")}
											</TableCell>
											<TableCell className="hidden md:table-cell">
												{bike.returnTime
													? moment(bike.returnTime).format("DD-MM-YYYY, h:mm a")
													: "Did`t return yet"}
											</TableCell>

											<TableCell className="hidden md:table-cell">
												${bike.totalCost}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter></CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default Rentals
