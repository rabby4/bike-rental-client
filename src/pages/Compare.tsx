import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
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
import {
	currentCompareData,
	removeAllCompareData,
	removeCompareData,
} from "@/redux/features/bike/bikeSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"

const Compare = () => {
	const bikes = useAppSelector(currentCompareData)
	const dispatch = useAppDispatch()

	const handleRemove = (id: string) => {
		dispatch(removeCompareData({ id }))
	}
	const handleRemoveAll = () => {
		dispatch(removeAllCompareData())
	}

	return (
		<div className="container my-10">
			<Card>
				<CardHeader className="flex justify-between flex-row">
					<div>
						<CardTitle className="font-orbitron tracking-wider">
							Compare Bikes
						</CardTitle>
						<CardDescription>
							Manage your products and view their sales performance.
						</CardDescription>
					</div>

					<div className="text-xs text-muted-foreground">
						<Button onClick={handleRemoveAll}>Clear Compare Data</Button>
					</div>
				</CardHeader>
				<CardContent>
					<Table className="flex">
						<TableHeader className="border-b-0 w-52">
							<TableRow className="flex flex-col text-base">
								<TableHead className="hidden w-[100px] sm:table-cell p-4 h-24">
									Image
								</TableHead>
								<TableHead className="p-4">Name</TableHead>
								<TableHead className="p-4">Price Per Hour</TableHead>
								<TableHead className="p-4">Brand</TableHead>
								<TableHead className="hidden md:table-cell p-4">
									Model
								</TableHead>
								<TableHead className="hidden md:table-cell p-4">
									Bike CC
								</TableHead>
								<TableHead className="hidden md:table-cell p-4">
									Release year
								</TableHead>
								<TableHead className="hidden md:table-cell p-4">
									Category
								</TableHead>
								<TableHead className="hidden md:table-cell p-4">
									Color
								</TableHead>
								<TableHead className="hidden md:table-cell p-4">
									Frame Size
								</TableHead>
								<TableHead className="hidden md:table-cell p-4">
									Max. Support
								</TableHead>
								<TableHead className="hidden md:table-cell p-4">
									Weight
								</TableHead>
								<TableHead className="hidden md:table-cell p-4 h-16">
									Action
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="flex">
							{bikes.map((bike) => (
								<TableRow key={bike._id} className="flex flex-col capitalize">
									<TableCell className="hidden sm:table-cell h-24 overflow-hidden">
										<img
											alt="Product img"
											className=" rounded-md object-cover"
											height="64"
											src={bike.image}
											width="120"
										/>
									</TableCell>
									<TableCell className="font-medium h-12 text-base font-orbitron">
										{bike.name}
									</TableCell>
									<TableCell className="font-medium h-12">
										${bike.pricePerHour}
									</TableCell>
									<TableCell className="hidden md:table-cell h-12">
										{bike.brand}
									</TableCell>
									<TableCell className="hidden md:table-cell h-12">
										{bike.model}
									</TableCell>
									<TableCell className="hidden md:table-cell h-12">
										{bike.cc} CC
									</TableCell>
									<TableCell className="hidden md:table-cell h-12">
										{bike.year}
									</TableCell>
									<TableCell className="hidden md:table-cell h-12">
										{bike.category.replace(/_/g, " ")}
									</TableCell>
									<TableCell className="hidden md:table-cell h-12">
										{bike.color}
									</TableCell>
									<TableCell className="hidden md:table-cell h-12">
										{bike.frame} CM
									</TableCell>
									<TableCell className="hidden md:table-cell h-12">
										{bike.support} km/h
									</TableCell>
									<TableCell className="hidden md:table-cell h-12">
										{bike.weight} kg
									</TableCell>
									<TableCell className="hidden md:table-cell h-16">
										<Button
											onClick={() => handleRemove(bike._id)}
											className="w-full bg-red-600"
										>
											Remove
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	)
}

export default Compare
