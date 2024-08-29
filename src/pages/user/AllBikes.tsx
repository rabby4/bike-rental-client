import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import bikeApi from "@/redux/features/bike/bikeApi"
import { TBike } from "@/types/bikes.type"
import { NavLink } from "react-router-dom"

const AllBikes = () => {
	const { data: bikeData, isLoading } = bikeApi.useGetBikeQuery(undefined)
	const bikes = bikeData?.data

	if (isLoading) return <p>Loading...</p>
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle className="font-orbitron tracking-wider">
						All Bike
					</CardTitle>
				</CardHeader>
				<CardContent className="font-inter">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="hidden w-[100px] sm:table-cell">
									<span className="sr-only">img</span>
								</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Brand</TableHead>
								<TableHead className="hidden md:table-cell">Model</TableHead>
								<TableHead>Bike CC</TableHead>
								<TableHead className="hidden md:table-cell">Category</TableHead>
								<TableHead>Bike Color</TableHead>
								<TableHead className="hidden md:table-cell">Price</TableHead>

								<TableHead>
									<span>Actions</span>
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{bikes.map((bike: TBike) => (
								<TableRow key={bike._id}>
									<TableCell className="hidden sm:table-cell">
										<img
											alt="Product img"
											className="aspect-square rounded-md object-cover"
											height="64"
											src={bike.image}
											width="64"
										/>
									</TableCell>
									<TableCell className="font-medium">{bike.name}</TableCell>
									<TableCell className="capitalize">{bike.brand}</TableCell>
									<TableCell className="hidden md:table-cell">
										{bike.model}
									</TableCell>
									<TableCell>{bike.cc} CC</TableCell>
									<TableCell className="hidden md:table-cell capitalize">
										{bike.category.replace(/_/g, " ")}
									</TableCell>
									<TableCell className="capitalize">{bike.color}</TableCell>
									<TableCell className="hidden md:table-cell">
										${bike.pricePerHour}
									</TableCell>

									<TableCell>
										<NavLink to={`/bike-details/${bike._id}`}>
											<Button className="w-full bg-accent-foreground text-base">
												Details
											</Button>
										</NavLink>
										{/* <DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													aria-haspopup="true"
													size="icon"
													variant="ghost"
												>
													<MoreHorizontal className="h-4 w-4" />
													<span className="sr-only">Toggle menu</span>
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuItem>
													<NavLink to={`/dashboard/update-bike/${bike._id}`}>
														<Button className="w-full bg-transparent text-black hover:bg-transparent text-base hover:text-accent-foreground">
															Edit
														</Button>
													</NavLink>
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu> */}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter>
					{/* <div className="text-xs text-muted-foreground">
						Showing <strong>1-10</strong> of <strong>32</strong> products
					</div> */}
				</CardFooter>
			</Card>
		</div>
	)
}

export default AllBikes
