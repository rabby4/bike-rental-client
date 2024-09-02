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
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Search } from "lucide-react"
import bikeApi from "@/redux/features/bike/bikeApi"
import { TBike, TQueryParam } from "@/types/bikes.type"
import { MoreHorizontal } from "lucide-react"
import moment from "moment"
import { ChangeEvent, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import UseAnimations from "react-useanimations"
import activity from "react-useanimations/lib/activity"
import Swal from "sweetalert2"

const BikeManagement = () => {
	const [brand, setBrand] = useState("")
	const [category, setCategory] = useState("")
	const [searchTerm, setSearchTerm] = useState("")
	const [params, setParams] = useState<TQueryParam[]>([])
	const { data: bikeData, isLoading } = bikeApi.useGetBikeQuery(params, {
		pollingInterval: 10000,
	})
	const [deleteBike] = bikeApi.useDeleteBikeMutation()
	const bikes = bikeData?.data.filter(
		(bike: TBike) => bike.isAvailable === true
	)

	const handleDeleteBike = async (id: string) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				deleteBike(id).unwrap()
				Swal.fire({
					title: "Deleted!",
					text: "Bike data has been deleted.",
					icon: "success",
				})
			}
		})
	}

	useEffect(() => {
		const params = []

		if (brand) {
			params.push({ name: "brand", value: brand })
		}
		if (category) {
			params.push({ name: "category", value: category })
		}
		if (searchTerm) {
			params.push({ name: "searchTerm", value: searchTerm })
		}

		setParams(params)
	}, [brand, category, searchTerm])

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const handleResetFilter = () => {
		setParams([])
		setSearchTerm("")
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
		<div>
			<Card>
				<CardHeader>
					<CardTitle className="font-orbitron tracking-wider text-center">
						Manage Bike
					</CardTitle>
					<CardDescription className="font-inter text-center">
						Manage your Bike and view their sales performance.
					</CardDescription>
					<div className="max-w-6xl mx-auto z-20">
						<Card className="rounded-none shadow-md">
							<CardContent className="items-center p-12">
								<div className="grid grid-cols-4 gap-5 items-end">
									<div className="flex flex-col gap-3">
										<h2 className="self-start font-medium font-orbitron">
											Search Bikes
										</h2>
										<div className="relative ml-auto flex-1 md:grow-0 w-full text-inter">
											<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
											<Input
												type="search"
												placeholder="Search..."
												className="w-full bg-background pl-8 "
												value={searchTerm}
												onChange={handleChange}
											/>
										</div>
									</div>

									<div className="flex flex-col gap-3">
										<h2 className="self-start font-medium font-orbitron">
											Filter by Category
										</h2>
										<div className="w-full md:w-auto mb-2 md:mb-0 rounded-full font-inter">
											<Select onValueChange={(value) => setCategory(value)}>
												<SelectTrigger>
													<SelectValue placeholder="Select A Category" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Categories</SelectLabel>
														<SelectItem value="road_bike">Road Bike</SelectItem>
														<SelectItem value="mountain_bike">
															Mountain Bike
														</SelectItem>
														<SelectItem value="hybrid_bike">
															Hybrid Bike
														</SelectItem>
														<SelectItem value="cruiser_bike">
															Cruiser Bike
														</SelectItem>
														<SelectItem value="electric_bike">
															Electric Bike
														</SelectItem>
														<SelectItem value="bmx_bike">BMX Bike</SelectItem>
														<SelectItem value="gravel_bike">
															Gravel Bike
														</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</div>
									</div>

									<div className="flex flex-col gap-3">
										<h2 className="self-start font-medium font-orbitron">
											Filter by Brand
										</h2>
										<div className="w-full rounded-full md:w-auto mb-2 md:mb-0 font-inter">
											<Select onValueChange={(value) => setBrand(value)}>
												<SelectTrigger>
													<SelectValue placeholder="Select A Brand" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Brands</SelectLabel>
														<SelectItem value="trek">Trek</SelectItem>
														<SelectItem value="specialized">
															Specialized
														</SelectItem>
														<SelectItem value="giant">Giant</SelectItem>
														<SelectItem value="cannondale">
															Cannondale
														</SelectItem>
														<SelectItem value="scott">Scott</SelectItem>
														<SelectItem value="santa_cruz">
															Santa Cruz
														</SelectItem>
														<SelectItem value="bianchi">Bianchi</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</div>
									</div>

									<Button
										onClick={handleResetFilter}
										className="bg-accent-foreground hover:bg-gray-200 hover:text-black w-full font-orbitron tracking-wider"
									>
										Reset Filter
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</CardHeader>
				<CardContent className="font-inter">
					{bikes && bikes.length > 0 ? (
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
									<TableHead className="hidden md:table-cell">
										Category
									</TableHead>
									<TableHead className="hidden md:table-cell">
										Created at
									</TableHead>
									<TableHead>
										<span>Actions</span>
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{bikes?.map((bike: TBike) => (
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
											{moment(bike.createdAt).format("DD-MM-YYYY")}
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
