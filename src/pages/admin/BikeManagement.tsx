import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import { MoreHorizontal } from "lucide-react"
import moment from "moment"
import { NavLink } from "react-router-dom"
import { toast } from "sonner"

const BikeManagement = () => {
	const { data: bikeData, isLoading } = bikeApi.useGetBikeQuery(undefined)
	const [deleteBike] = bikeApi.useDeleteBikeMutation()
	const bikes = bikeData?.data

	const handleDeleteBike = async (id: string) => {
		const toastId = toast.loading("Deleting bike...")
		try {
			const res = await deleteBike(id).unwrap()
			toast.success(res.message, { id: toastId })
		} catch (error) {
			toast.error("Bike Update Process Failed...", { id: toastId })
		}
	}

	if (isLoading) {
		return <p>loading...</p>
	}
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle className="font-orbitron tracking-wider">
						Manage Bike
					</CardTitle>
					<CardDescription className="font-inter">
						Manage your Bike and view their sales performance.
					</CardDescription>
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
								<TableHead>Bike CC</TableHead>
								<TableHead>Bike Color</TableHead>
								<TableHead className="hidden md:table-cell">Price</TableHead>
								<TableHead className="hidden md:table-cell">Category</TableHead>
								<TableHead className="hidden md:table-cell">
									Created at
								</TableHead>
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
									<TableCell>{bike.cc} CC</TableCell>
									<TableCell className="capitalize">{bike.color}</TableCell>
									<TableCell className="hidden md:table-cell">
										${bike.pricePerHour}
									</TableCell>
									<TableCell className="hidden md:table-cell capitalize">
										{bike.category.replace(/_/g, " ")}
									</TableCell>
									<TableCell className="hidden md:table-cell">
										{moment(bike.createdAt).format("DD-MM-YYY")}
									</TableCell>
									<TableCell>
										<DropdownMenu>
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
												<DropdownMenuItem>
													<Button
														onClick={() => handleDeleteBike(bike._id)}
														className="w-full bg-transparent text-black hover:bg-transparent text-base hover:text-red-600"
													>
														Delete
													</Button>
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
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

export default BikeManagement
