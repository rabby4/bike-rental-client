import BikeCard from "@/components/shared/BikeCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
import bikeApi from "@/redux/features/bike/bikeApi"
import { TBike, TQueryParam } from "@/types/bikes.type"
import { Search } from "lucide-react"
import { ChangeEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import UseAnimations from "react-useanimations"
import activity from "react-useanimations/lib/activity"

const Bikes = () => {
	const location = useLocation()
	const navigate = useNavigate()
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

	// Function to parse query parameters from the URL
	const getQueryParams = () => {
		const searchParams = new URLSearchParams(location.search)
		return {
			brand: searchParams.get("brand") || "",
			category: searchParams.get("category") || "",
			searchTerm: searchParams.get("searchTerm") || "",
		}
	}

	// Set initial state based on URL query parameters
	useEffect(() => {
		const { brand, category, searchTerm } = getQueryParams()
		setBrand(brand)
		setCategory(category)
		setSearchTerm(searchTerm)
	}, [location.search])

	// Update filter parameters when brand, category, or searchTerm changes
	useEffect(() => {
		const params = []
		if (brand) params.push({ name: "brand", value: brand })
		if (category) params.push({ name: "category", value: category })
		if (searchTerm) params.push({ name: "searchTerm", value: searchTerm })

		setParams(params)
	}, [brand, category, searchTerm])

	// Handle search input change
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	// Reset filters and update the URL
	const handleResetFilter = () => {
		setBrand("")
		setCategory("")
		setSearchTerm("")
		setParams([])
		navigate("/bikes") // Reset URL to remove query parameters
	}

	// Handle filter selections
	// const handleFilter = () => {
	// 	const queryParams = new URLSearchParams()
	// 	if (brand) queryParams.append("brand", brand)
	// 	if (category) queryParams.append("category", category)
	// 	if (searchTerm) queryParams.append("searchTerm", searchTerm)
	// 	navigate(`/bikes?${queryParams.toString()}`)
	// }

	// Show loading animation while data is being fetched
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
			<div className="bg-about-us bg-bottom h-64 flex justify-center items-center">
				<h1 className="text-5xl font-orbitron font-bold dark:text-black">
					Our Bikes
				</h1>
			</div>
			<div className="max-w-6xl mx-auto -mt-16 z-20">
				<Card className="rounded-none shadow-xl">
					<CardContent className="items-center p-12">
						<div className="grid lg:grid-cols-4 grid-cols-2 md:gap-5 gap-2">
							<div className="flex flex-col gap-3">
								<h2 className="self-start font-medium font-orbitron md:text-base text-sm">
									Search Bikes
								</h2>
								<div className="relative ml-auto flex-1 md:grow-0 w-full text-inter">
									<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
									<Input
										type="search"
										placeholder="Search..."
										className="w-full bg-background pl-8"
										value={searchTerm}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="flex flex-col gap-3">
								<h2 className="self-start font-medium font-orbitron md:text-base text-sm">
									Filter by Category
								</h2>
								<div className="w-full md:w-auto mb-2 md:mb-0 rounded-full font-inter">
									<Select
										onValueChange={(value) => setCategory(value)}
										value={category}
									>
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
												<SelectItem value="hybrid_bike">Hybrid Bike</SelectItem>
												<SelectItem value="cruiser_bike">
													Cruiser Bike
												</SelectItem>
												<SelectItem value="electric_bike">
													Electric Bike
												</SelectItem>
												<SelectItem value="bmx_bike">BMX Bike</SelectItem>
												<SelectItem value="gravel_bike">Gravel Bike</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="flex flex-col gap-3">
								<h2 className="self-start font-medium font-orbitron md:text-base text-sm">
									Filter by Brand
								</h2>
								<div className="w-full rounded-full md:w-auto mb-2 md:mb-0 font-inter">
									<Select
										onValueChange={(value) => setBrand(value)}
										value={brand}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select A Brand" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Brands</SelectLabel>
												<SelectItem value="trek">Trek</SelectItem>
												<SelectItem value="specialized">Specialized</SelectItem>
												<SelectItem value="giant">Giant</SelectItem>
												<SelectItem value="cannondale">Cannondale</SelectItem>
												<SelectItem value="scott">Scott</SelectItem>
												<SelectItem value="santa_cruz">Santa Cruz</SelectItem>
												<SelectItem value="bianchi">Bianchi</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>

							<Button
								onClick={handleResetFilter}
								className="bg-accent-foreground hover:bg-gray-200 hover:text-black w-full font-orbitron tracking-wider self-end"
							>
								Reset Filter
							</Button>
						</div>
						{/* <Button
							onClick={handleFilter} // Trigger the filter and update URL
							className="mt-4 bg-primary font-orbitron tracking-wider self-end"
						>
							Apply Filter
						</Button> */}
					</CardContent>
				</Card>
			</div>
			<div className="container lg:px-0 md:px-10 px-5">
				<div className="my-20">
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
						{bikes && bikes.length > 0 ? (
							bikes.map((bike: TBike) => (
								<BikeCard key={bike._id} bike={bike} />
							))
						) : (
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
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bikes
