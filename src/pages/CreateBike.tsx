import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { CircleAlert, Upload } from "lucide-react"

const CreateBike = () => {
	return (
		<div className="w-full p-24 pt-8">
			<form>
				<div className="grid grid-cols-3 gap-10 mt-10">
					<div className="col-span-2">
						<Card x-chunk="dashboard-07-chunk-0">
							<CardHeader>
								<CardTitle className="font-orbitron">Upload A Bike</CardTitle>
								<CardDescription className="font-inter">
									Add the details of a bike and upload the bike
								</CardDescription>
							</CardHeader>
							<CardContent className="font-inter">
								<div className="grid gap-6">
									<div className="grid gap-3">
										<Label htmlFor="title">Name</Label>
										<Input id="title" type="text" className="w-full" />
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label htmlFor="cc">Bike Brand</Label>
											<Input id="cc" type="text" className="w-full" />
										</div>
										<div className="grid gap-3">
											<Label htmlFor="name">Bike Model</Label>
											<Input id="name" type="text" className="w-full" />
										</div>
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label htmlFor="cc">Release Year</Label>
											<Input id="cc" type="text" className="w-full" />
										</div>
										<div className="grid gap-3">
											<Label htmlFor="name">Frame Size</Label>
											<Input id="name" type="text" className="w-full" />
										</div>
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label htmlFor="cc">Max. support</Label>
											<Input id="cc" type="text" className="w-full" />
										</div>
										<div className="grid gap-3">
											<Label htmlFor="name">Color</Label>
											<Input id="name" type="text" className="w-full" />
										</div>
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label htmlFor="cc">Category</Label>
											<Input id="cc" type="text" className="w-full" />
										</div>
										<div className="grid gap-3">
											<Label htmlFor="name">Weight</Label>
											<Input id="name" type="text" className="w-full" />
										</div>
									</div>

									<div className="grid gap-3">
										<Label htmlFor="description">Description</Label>
										<Textarea
											id="description"
											defaultValue=""
											className="min-h-32"
										/>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
					<div className="col-span-1 space-y-10">
						<Card x-chunk="dashboard-07-chunk-3">
							<CardHeader>
								<CardTitle className="font-orbitron">
									Bike Availability
								</CardTitle>
							</CardHeader>
							<CardContent className="font-inter">
								<div className="grid gap-6">
									<div className="grid gap-3">
										<Label htmlFor="status" className="flex items-center gap-4">
											Availability
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<CircleAlert size={16} />
													</TooltipTrigger>
													<TooltipContent>
														<p>Default is Available</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</Label>
										<Select defaultValue="true">
											<SelectTrigger id="status" aria-label="Select status">
												<SelectValue placeholder="Select Availability" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="true">Available</SelectItem>
												<SelectItem value="false">Unavailable</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
							<CardHeader>
								<CardTitle className="font-orbitron">Product Image</CardTitle>
								<CardDescription className="font-inter">
									Lipsum dolor sit amet, consectetur adipiscing elit
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-2 font-inter">
									<div className="grid grid-cols-3 gap-2">
										<button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
											<Upload className="h-4 w-4 text-muted-foreground" />
											<span className="sr-only">Upload</span>
										</button>
									</div>
								</div>
							</CardContent>
						</Card>
						<div className="grid grid-cols-2 items-center justify-between gap-2">
							<Button
								variant="outline"
								size="sm"
								className="hover:text-white font-orbitron tracking-wider hover:bg-red-600 duration-500 rounded-none px-10 py-5"
							>
								Discard
							</Button>
							<Button
								type="submit"
								size="sm"
								className="bg-accent-foreground font-orbitron tracking-wider px-10 py-5 rounded-none duration-500"
							>
								Upload Bike
							</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default CreateBike
