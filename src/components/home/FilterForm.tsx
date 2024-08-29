import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
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
import { useEffect, useState } from "react"
import { TQueryParam } from "@/types/bikes.type"

const FilterForm = () => {
	const [brand, setBrand] = useState("")
	const [category, setCategory] = useState("")
	const [params, setParams] = useState<TQueryParam[]>([])
	// const { control, handleSubmit } = useForm({})

	useEffect(() => {
		const params = []

		if (brand) {
			params.push({ name: "brand", value: brand })
		}
		if (category) {
			params.push({ name: "category", value: category })
		}

		setParams(params)
	}, [brand, category])

	// const onSubmit: SubmitHandler<FieldValues> = (data) => {
	// 	console.log(data)
	// }
	return (
		<>
			<Card className="rounded-none shadow-xl">
				<CardContent className="items-center p-12">
					<form>
						<div className="grid grid-cols-3 justify-between items-center gap-4">
							{/* <Controller
								name="category"
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										onValueChange={(value) => field.onChange(value)}
										// value={field.value}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select A Category" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Fruits</SelectLabel>
												<SelectItem value="eBike">E-Bike</SelectItem>
												<SelectItem value="roadBike">Road Bike</SelectItem>
												<SelectItem value="kidsBike">Kids Bike</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/> */}
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
							{/* <Controller
								name="brand"
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										onValueChange={(value) => field.onChange(value)}
										// value={field.value}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select A Category" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Fruits</SelectLabel>
												<SelectItem value="fuji">Fuji</SelectItem>
												<SelectItem value="giant">Giant</SelectItem>
												<SelectItem value="radon">Radon</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/> */}
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
								Search
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</>
	)
}

export default FilterForm
