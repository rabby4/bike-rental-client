import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { ChangeEvent, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import UseAnimations from "react-useanimations"
import activity from "react-useanimations/lib/activity"

const AllBikes = () => {
	const [brand, setBrand] = useState("")
	const [category, setCategory] = useState("")
	const [searchTerm, setSearchTerm] = useState("")
	const [params, setParams] = useState<TQueryParam[]>([])
	const { data: bikeData, isLoading } = bikeApi.useGetBikeQuery(params, {
		pollingInterval: 10000,
	})
	const bikes = bikeData?.data.filter(
		(bike: TBike) => bike.isAvailable === true
	)

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
					<CardTitle className="font-orbitron tracking-wider text-center mb-5">
						All Bike
					</CardTitle>
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
					{bikes && bikes?.length > 0 ? (
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
									<TableHead className="hidden md:table-cell">
										Category
									</TableHead>
									<TableHead>Bike Color</TableHead>
									<TableHead className="hidden md:table-cell">Price</TableHead>
									<TableHead className="hidden md:table-cell">
										Availability
									</TableHead>

									<TableHead>
										<span>Actions</span>
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{bikes?.map((bike: TBike) => (
									<TableRow key={bike?._id}>
										<TableCell className="hidden sm:table-cell">
											<img
												alt="Product img"
												className="aspect-square rounded-md object-cover"
												height="64"
												src={bike?.image}
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">{bike?.name}</TableCell>
										<TableCell className="capitalize">{bike?.brand}</TableCell>
										<TableCell className="hidden md:table-cell">
											{bike?.model}
										</TableCell>
										<TableCell>{bike.cc} CC</TableCell>
										<TableCell className="hidden md:table-cell capitalize">
											{bike?.category?.replace(/_/g, " ")}
										</TableCell>
										<TableCell className="capitalize">{bike?.color}</TableCell>
										<TableCell className="hidden md:table-cell">
											${bike?.pricePerHour}
										</TableCell>
										<TableCell className="hidden md:table-cell">
											{bike?.isAvailable ? (
												<Badge className="bg-accent-foreground">
													Available
												</Badge>
											) : (
												<Badge variant={"destructive"}>Not Available</Badge>
											)}
										</TableCell>

										<TableCell>
											<NavLink to={`/bike-details/${bike?._id}`}>
												<Button className="w-full bg-accent-foreground text-base">
													Details
												</Button>
											</NavLink>
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
			</Card>
		</div>
	)
}

export default AllBikes
