/* eslint-disable @typescript-eslint/no-explicit-any */
// import bikeApi from "@/redux/features/bike/bikeApi"
// import { Button } from "../ui/button"
// import { Card, CardContent } from "../ui/card"
// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectLabel,
// 	SelectTrigger,
// 	SelectValue,
// } from "../ui/select"
// import { useEffect, useState } from "react"
// import { TQueryParam } from "@/types/bikes.type"
//
// const FilterForm = () => {
// 	const [brand, setBrand] = useState("")
// 	const [category, setCategory] = useState("")
// 	const [searchTerm, setSearchTerm] = useState("")
// 	const [params, setParams] = useState<TQueryParam[]>([])
// 	const { data: bikeData } = bikeApi.useGetBikeQuery(params, {
// 		pollingInterval: 10000,
// 	})
//
// 	useEffect(() => {
// 		const params = []
//
// 		if (brand) {
// 			params.push({ name: "brand", value: brand })
// 		}
// 		if (category) {
// 			params.push({ name: "category", value: category })
// 		}
// 		if (searchTerm) {
// 			params.push({ name: "searchTerm", value: searchTerm })
// 		}
//
// 		setParams(params)
// 	}, [brand, category, searchTerm])
//
// 	return (
// 		<>
// 			<Card className="rounded-none shadow-xl">
// 				<CardContent className="items-center md:p-12 py-8">
// 					<form>
// 						<div className="grid grid-cols-3 justify-between items-center md:gap-4 gap-1">
// 							<Select onValueChange={(value) => setCategory(value)}>
// 								<SelectTrigger>
// 									<SelectValue placeholder="Select A Category" />
// 								</SelectTrigger>
// 								<SelectContent>
// 									<SelectGroup>
// 										<SelectLabel>Categories</SelectLabel>
// 										<SelectItem value="road_bike">Road Bike</SelectItem>
// 										<SelectItem value="mountain_bike">Mountain Bike</SelectItem>
// 										<SelectItem value="hybrid_bike">Hybrid Bike</SelectItem>
// 										<SelectItem value="cruiser_bike">Cruiser Bike</SelectItem>
// 										<SelectItem value="electric_bike">Electric Bike</SelectItem>
// 										<SelectItem value="bmx_bike">BMX Bike</SelectItem>
// 										<SelectItem value="gravel_bike">Gravel Bike</SelectItem>
// 									</SelectGroup>
// 								</SelectContent>
// 							</Select>
//
// 							<Select onValueChange={(value) => setBrand(value)}>
// 								<SelectTrigger>
// 									<SelectValue placeholder="Select A Brand" />
// 								</SelectTrigger>
// 								<SelectContent>
// 									<SelectGroup>
// 										<SelectLabel>Brands</SelectLabel>
// 										<SelectItem value="trek">Trek</SelectItem>
// 										<SelectItem value="specialized">Specialized</SelectItem>
// 										<SelectItem value="giant">Giant</SelectItem>
// 										<SelectItem value="cannondale">Cannondale</SelectItem>
// 										<SelectItem value="scott">Scott</SelectItem>
// 										<SelectItem value="santa_cruz">Santa Cruz</SelectItem>
// 										<SelectItem value="bianchi">Bianchi</SelectItem>
// 									</SelectGroup>
// 								</SelectContent>
// 							</Select>
// 							<Button
// 								type="submit"
// 								className="bg-accent-foreground font-orbitron tracking-wider"
// 							>
// 								Filter
// 							</Button>
// 						</div>
// 					</form>
// 				</CardContent>
// 			</Card>
// 		</>
// 	)
// }
//
// export default FilterForm
import { useState } from "react"
import { useNavigate } from "react-router-dom" // Import useNavigate
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select"

const FilterForm = () => {
	const [brand, setBrand] = useState("")
	const [category, setCategory] = useState("")
	// const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate()

	const handleFilter = (e: any) => {
		e.preventDefault()
		// Construct the query string from selected values
		const queryParams = new URLSearchParams()
		if (brand) queryParams.append("brand", brand)
		if (category) queryParams.append("category", category)
		// if (searchTerm) queryParams.append("searchTerm", searchTerm);

		// Redirect to the bikes page with the query parameters
		navigate(`/bikes?${queryParams.toString()}`)
	}

	return (
		<Card className="rounded-none shadow-xl">
			<CardContent className="items-center md:p-12 py-8">
				<form onSubmit={handleFilter}>
					<div className="grid grid-cols-3 justify-between items-center md:gap-4 gap-1">
						<Select onValueChange={(value) => setCategory(value)}>
							<SelectTrigger>
								<SelectValue placeholder="Select A Category" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Categories</SelectLabel>
									<SelectItem value="road_bike">Road Bike</SelectItem>
									<SelectItem value="mountain_bike">Mountain Bike</SelectItem>
									<SelectItem value="hybrid_bike">Hybrid Bike</SelectItem>
									<SelectItem value="cruiser_bike">Cruiser Bike</SelectItem>
									<SelectItem value="electric_bike">Electric Bike</SelectItem>
									<SelectItem value="bmx_bike">BMX Bike</SelectItem>
									<SelectItem value="gravel_bike">Gravel Bike</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<Select onValueChange={(value) => setBrand(value)}>
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

						<Button
							type="submit"
							className="bg-accent-foreground font-orbitron tracking-wider"
						>
							Filter
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	)
}

export default FilterForm
