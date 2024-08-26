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
import { Search } from "lucide-react"
import { ChangeEvent, useState } from "react"

const Bikes = () => {
	const [brand, setBrand] = useState("")
	const [category, setCategory] = useState("")
	const [status, setStatus] = useState("")
	const [searchTerm, setSearchTerm] = useState("")

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}
	console.log({ brand, category, status, searchTerm })

	return (
		<div>
			<div className="bg-about-us bg-bottom h-64 flex justify-center items-center">
				<h1 className="text-5xl font-orbitron font-bold">Our Bikes</h1>
			</div>
			<div className="max-w-6xl mx-auto -mt-16 z-20">
				<Card className="rounded-none shadow-xl">
					<CardContent className="items-center p-12">
						<div className="grid grid-cols-5 gap-5 items-end">
							<div className="flex flex-col gap-3">
								<h2 className="text-lg self-start font-medium">Search Bikes</h2>
								<div className="relative ml-auto flex-1 md:grow-0 w-full">
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
								<h2 className="text-lg self-start font-medium">
									Filter by Status
								</h2>
								<div className="w-full md:w-auto mb-2 md:mb-0">
									<Select onValueChange={(value) => setStatus(value)}>
										<SelectTrigger>
											<SelectValue placeholder="Select A Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Availability</SelectLabel>
												<SelectItem value="available">Available</SelectItem>
												<SelectItem value="notAvailable">
													Not Available
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="flex flex-col gap-3">
								<h2 className="text-lg self-start font-medium">
									Filter by Category
								</h2>
								<div className="w-full md:w-auto mb-2 md:mb-0 rounded-full">
									<Select onValueChange={(value) => setCategory(value)}>
										<SelectTrigger>
											<SelectValue placeholder="Select A Category" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Categories</SelectLabel>
												<SelectItem value="eBike">E-Bike</SelectItem>
												<SelectItem value="roadBike">Road Bike</SelectItem>
												<SelectItem value="kidsBike">Kids Bike</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="flex flex-col gap-3">
								<h2 className="text-lg self-start font-medium">
									Filter by Brand
								</h2>
								<div className="w-full rounded-full md:w-auto mb-2 md:mb-0">
									<Select onValueChange={(value) => setBrand(value)}>
										<SelectTrigger>
											<SelectValue placeholder="Select A Brand" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Brands</SelectLabel>
												<SelectItem value="eBike">E-Bike</SelectItem>
												<SelectItem value="roadBike">Road Bike</SelectItem>
												<SelectItem value="kidsBike">Kids Bike</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>

							<Button className="bg-accent-foreground hover:bg-gray-200 hover:text-black w-full font-orbitron tracking-wider">
								Reset Filter
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="container lg:px-0 md:px-10 px-5">
				<div className="my-20">
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
						<BikeCard />
						<BikeCard />
						<BikeCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bikes
