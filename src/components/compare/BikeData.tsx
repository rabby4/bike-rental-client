import { useAppDispatch } from "@/redux/hook"
import { Button } from "../ui/button"
import { TableCell, TableRow } from "../ui/table"
import { removeCompareData } from "@/redux/features/bike/bikeSlice"
import { TBike } from "@/types/bikes.type"

const BikeData = ({ bike }: { bike: TBike }) => {
	const dispatch = useAppDispatch()

	const handleRemove = (id: string) => {
		dispatch(removeCompareData({ id }))
	}
	return (
		<div>
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
				<TableCell className="font-medium h-12">${bike.pricePerHour}</TableCell>
				<TableCell className="hidden md:table-cell h-12">
					{bike.brand}
				</TableCell>
				<TableCell className="hidden md:table-cell h-12">
					{bike.model}
				</TableCell>
				<TableCell className="hidden md:table-cell h-12">
					{bike.cc} CC
				</TableCell>
				<TableCell className="hidden md:table-cell h-12">{bike.year}</TableCell>
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
		</div>
	)
}

export default BikeData
