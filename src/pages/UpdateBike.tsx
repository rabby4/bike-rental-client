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
import { CircleAlert } from "lucide-react"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"

const UpdateBike = () => {
	const { control, handleSubmit } = useForm({})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log(data)
	}
	return (
		<div className="w-full p-24 pt-8">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-3 gap-10 mt-10">
					<div className="col-span-2">
						<Card x-chunk="dashboard-07-chunk-0">
							<CardHeader>
								<CardTitle className="font-orbitron">Update Bike</CardTitle>
								<CardDescription className="font-inter">
									Edit the details of this bike and update the bike
								</CardDescription>
							</CardHeader>
							<CardContent className="font-inter">
								<div className="grid gap-6">
									<div className="grid gap-3">
										<Label>Bike Title</Label>
										<Controller
											name="name"
											control={control}
											// rules={{ required: true }}
											render={({ field }) => (
												<Input
													{...field}
													type="text"
													className="w-full"
													placeholder="Write you bike title"
												/>
											)}
										/>
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label>Bike Brand</Label>
											<Controller
												name="brand"
												control={control}
												defaultValue=""
												render={({ field }) => (
													<Select
														{...field}
														onValueChange={(value) => field.onChange(value)}
													>
														<SelectTrigger>
															<SelectValue placeholder="Select Brand" />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="trek">Trek</SelectItem>
															<SelectItem value="specialized">
																Specialized
															</SelectItem>
															<SelectItem value="giant">Giant</SelectItem>
															<SelectItem value="cannondale">
																Cannondale
															</SelectItem>
															<SelectItem value="scott">Scott</SelectItem>
															<SelectItem value="santa_cruz">
																Santa Cruz
															</SelectItem>
															<SelectItem value="bianchi">Bianchi</SelectItem>
														</SelectContent>
													</Select>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Bike Model</Label>
											<Controller
												name="model"
												control={control}
												// rules={{ required: true }}
												render={({ field }) => (
													<Input
														{...field}
														type="text"
														className="w-full"
														placeholder="Write you bike Model"
													/>
												)}
											/>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label>Release Year</Label>
											<Controller
												name="year"
												control={control}
												// rules={{ required: true }}
												render={({ field }) => (
													<Input
														{...field}
														type="text"
														className="w-full"
														placeholder="Write you bike release year"
													/>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Frame Size</Label>
											<Controller
												name="frame"
												control={control}
												// rules={{ required: true }}
												render={({ field }) => (
													<Input
														{...field}
														type="text"
														className="w-full"
														placeholder="Write you bike frame size"
													/>
												)}
											/>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label>Max. support</Label>
											<Controller
												name="support"
												control={control}
												// rules={{ required: true }}
												render={({ field }) => (
													<Input
														{...field}
														type="text"
														className="w-full"
														placeholder="Write you bike Maximum support hr..."
													/>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Color</Label>
											<Controller
												name="color"
												control={control}
												render={({ field }) => (
													<Select
														{...field}
														onValueChange={(value) => field.onChange(value)}
													>
														<SelectTrigger>
															<SelectValue placeholder="Select Color" />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="black">Black</SelectItem>
															<SelectItem value="red">Red</SelectItem>
															<SelectItem value="gray">Gray</SelectItem>
															<SelectItem value="blue">Blue</SelectItem>
														</SelectContent>
													</Select>
												)}
											/>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label htmlFor="cc">Category</Label>
											<Controller
												name="category"
												control={control}
												render={({ field }) => (
													<Select
														{...field}
														onValueChange={(value) => field.onChange(value)}
													>
														<SelectTrigger>
															<SelectValue placeholder="Select Category" />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="road_bike">
																Road Bike
															</SelectItem>
															<SelectItem value="mountain_bike">
																Mountain Bike
															</SelectItem>
															<SelectItem value="hybrid_bike">
																Hybrid Bike
															</SelectItem>
															<SelectItem value="cruiser_bike">
																Cruiser Bike
															</SelectItem>
															<SelectItem value="electric_bike">
																Electric Bike
															</SelectItem>
															<SelectItem value="bmx_bike">BMX Bike</SelectItem>
															<SelectItem value="gravel_bike">
																Gravel Bike
															</SelectItem>
														</SelectContent>
													</Select>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Weight</Label>
											<Controller
												name="weight"
												control={control}
												// rules={{ required: true }}
												render={({ field }) => (
													<Input
														{...field}
														type="text"
														className="w-full"
														placeholder="Write you bike Weight"
													/>
												)}
											/>
										</div>
									</div>
									<div className="grid gap-3">
										<Label>Description</Label>
										<Controller
											name="description"
											control={control}
											// rules={{ required: true }}
											render={({ field }) => (
												<Textarea
													{...field}
													id="description"
													defaultValue=""
													className="min-h-32"
													placeholder="What about your bike..."
												/>
											)}
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
										<Controller
											name="isAvailable"
											control={control}
											defaultValue="true"
											render={({ field }) => (
												<Select
													{...field}
													onValueChange={(value) => field.onChange(value)}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select Availability" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="true">Available</SelectItem>
														<SelectItem value="false">Unavailable</SelectItem>
													</SelectContent>
												</Select>
											)}
										/>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
							<CardHeader>
								<CardTitle className="font-orbitron">Product Image</CardTitle>
								<CardDescription className="font-inter">
									Insert a image url to upload a bike image
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-2 font-inter">
									<Controller
										name="image"
										control={control}
										// rules={{ required: true }}
										render={({ field }) => (
											<Input {...field} type="text" className="w-full " />
										)}
									/>
								</div>
							</CardContent>
						</Card>
						<div className="grid grid-cols-2 items-center justify-between gap-2">
							<Button
								type="reset"
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
								Update Bike
							</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default UpdateBike
