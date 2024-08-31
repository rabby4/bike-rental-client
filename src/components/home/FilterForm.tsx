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
	return (
		<>
			<Card className="rounded-none shadow-xl">
				<CardContent className="items-center md:p-12 py-8">
					<form>
						<div className="grid grid-cols-3 justify-between items-center md:gap-4 gap-1">
							<Select>
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

							<Select>
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
		</>
	)
}

export default FilterForm
