import { TableHead, TableRow } from "../ui/table"

const BikeInfo = () => {
	return (
		<>
			<TableRow className="flex flex-col text-base">
				<TableHead className="hidden w-[100px] sm:table-cell p-4 h-24">
					Image
				</TableHead>
				<TableHead className="p-4">Name</TableHead>
				<TableHead className="p-4">Price Per Hour</TableHead>
				<TableHead className="p-4">Brand</TableHead>
				<TableHead className="hidden md:table-cell p-4">Model</TableHead>
				<TableHead className="hidden md:table-cell p-4">Bike CC</TableHead>
				<TableHead className="hidden md:table-cell p-4">Release year</TableHead>
				<TableHead className="hidden md:table-cell p-4">Category</TableHead>
				<TableHead className="hidden md:table-cell p-4">Color</TableHead>
				<TableHead className="hidden md:table-cell p-4">Frame Size</TableHead>
				<TableHead className="hidden md:table-cell p-4">Max. Support</TableHead>
				<TableHead className="hidden md:table-cell p-4">Weight</TableHead>
				<TableHead className="hidden md:table-cell p-4 h-16">Action</TableHead>
			</TableRow>
		</>
	)
}

export default BikeInfo
