import BikeData from "@/components/compare/BikeData"
import BikeInfo from "@/components/compare/BikeInfo"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

import { Table, TableBody, TableHeader } from "@/components/ui/table"
import {
	currentCompareData,
	removeAllCompareData,
} from "@/redux/features/bike/bikeSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"

const Compare = () => {
	const bikes = useAppSelector(currentCompareData)
	const dispatch = useAppDispatch()

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
					{bikes && bikes.length > 0 ? (
						<Table className="flex">
							<TableHeader className="border-b-0 w-52">
								<BikeInfo />
							</TableHeader>
							<TableBody className="flex">
								{bikes?.map((bike) => (
									<BikeData key={bike._id} bike={bike} />
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
									Bike not found for compare
								</h2>
							</div>
						</>
					)}
				</CardContent>
			</Card>
		</div>
	)
}

export default Compare
