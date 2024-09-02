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
import bikeApi from "@/redux/features/bike/bikeApi"
import { createBikeSchema } from "@/schemas/bikeSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const CreateBike = () => {
	const [createBike] = bikeApi.useCreateBikeMutation()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createBikeSchema),
	})
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const toastId = toast.loading("Upload processing...")

		const bikeData = {
			...data,
			cc: Number(data.cc),
			year: Number(data.year),
			frame: Number(data.frame),
			weight: Number(data.support),
			support: Number(data.support),
			isAvailable: true,
			pricePerHour: Number(data.support),
		}

		try {
			const res = await createBike(bikeData).unwrap()
			toast.success(res.message, { id: toastId })
			console.log(res)
			if (res.success) {
				toast.success(res.message, { id: toastId })
				navigate("/dashboard/bike-management")
			}
		} catch (error) {
			toast.error("Failed to upload bike...", { id: toastId })
		}
	}
	return (
		<div className="w-full lg:p-24 md:p-10 pt-8">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
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
										<Label>Bike Title</Label>
										<Controller
											name="name"
											control={control}
											rules={{ required: true }}
											render={({ field }) => (
												<>
													<Input
														{...field}
														type="text"
														className="w-full"
														placeholder="Write you bike title"
													/>
													{errors.name?.message && (
														<p className="text-red-500 text-xs">
															{errors.name?.message as string}
														</p>
													)}
												</>
											)}
										/>
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label>Bike Brand</Label>
											<Controller
												name="brand"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<>
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
														{errors.brand?.message && (
															<p className="text-red-500 text-xs">
																{errors.brand?.message as string}
															</p>
														)}
													</>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Bike Model</Label>
											<Controller
												name="model"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<>
														<Input
															{...field}
															type="text"
															className="w-full"
															placeholder="Write you bike Model"
														/>
														{errors.model?.message && (
															<p className="text-red-500 text-xs">
																{errors.model?.message as string}
															</p>
														)}
													</>
												)}
											/>
										</div>
									</div>

									<div className="grid grid-cols-3 gap-5 justify-between">
										<div className="grid gap-3">
											<Label>Bike CC</Label>
											<Controller
												name="cc"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<>
														<Input
															{...field}
															type="text"
															className="w-full"
															placeholder="Write you bike CC"
														/>
														{errors.cc?.message && (
															<p className="text-red-500 text-xs">
																{errors.cc?.message as string}
															</p>
														)}
													</>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Release Year</Label>
											<Controller
												name="year"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<>
														<Input
															{...field}
															type="text"
															className="w-full"
															placeholder="Write you bike release year"
														/>
														{errors.year?.message && (
															<p className="text-red-500 text-xs">
																{errors.year?.message as string}
															</p>
														)}
													</>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Frame Size (cm)</Label>
											<Controller
												name="frame"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<>
														<Input
															{...field}
															type="text"
															className="w-full"
															placeholder="Write you bike frame size"
														/>
														{errors.frame?.message && (
															<p className="text-red-500 text-xs">
																{errors.frame?.message as string}
															</p>
														)}
													</>
												)}
											/>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-5 justify-between">
										<div className="grid gap-3">
											<Label>Max. support (km/h)</Label>
											<Controller
												name="support"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<>
														<Input
															{...field}
															type="text"
															className="w-full"
															placeholder="Write you bike Maximum support hr..."
														/>
														{errors.support?.message && (
															<p className="text-red-500 text-xs">
																{errors.support?.message as string}
															</p>
														)}
													</>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Color</Label>
											<Controller
												name="color"
												control={control}
												render={({ field }) => (
													<>
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
														{errors.color?.message && (
															<p className="text-red-500 text-xs">
																{errors.color?.message as string}
															</p>
														)}
													</>
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
													<>
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
																<SelectItem value="bmx_bike">
																	BMX Bike
																</SelectItem>
																<SelectItem value="gravel_bike">
																	Gravel Bike
																</SelectItem>
															</SelectContent>
														</Select>
														{errors.category?.message && (
															<p className="text-red-500 text-xs">
																{errors.category?.message as string}
															</p>
														)}
													</>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Weight (kg)</Label>
											<Controller
												name="weight"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<>
														<Input
															{...field}
															type="text"
															className="w-full"
															placeholder="Write you bike Weight"
														/>
														{errors.weight?.message && (
															<p className="text-red-500 text-xs">
																{errors.weight?.message as string}
															</p>
														)}
													</>
												)}
											/>
										</div>
									</div>
									<div className="grid gap-3">
										<Label>Description</Label>
										<Controller
											name="description"
											control={control}
											rules={{ required: true }}
											render={({ field }) => (
												<>
													<Textarea
														{...field}
														id="description"
														defaultValue=""
														className="min-h-32"
														placeholder="What about your bike..."
													/>
													{errors.description?.message && (
														<p className="text-red-500 text-xs">
															{errors.description?.message as string}
														</p>
													)}
												</>
											)}
										/>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
					<div className="lg:col-span-1 md:col-span-2 grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:space-y-10 justify-between gap-5">
						<Card x-chunk="dashboard-07-chunk-3">
							<CardHeader>
								<CardTitle className="font-orbitron">Bike Price</CardTitle>
							</CardHeader>
							<CardContent className="font-inter">
								<div className="grid gap-6">
									<div className="grid gap-3">
										<Label>Price Per Hour</Label>
										<Controller
											name="pricePerHour"
											control={control}
											rules={{ required: true }}
											render={({ field }) => (
												<>
													<Input
														{...field}
														type="text"
														className="w-full"
														placeholder="Write you bike Weight"
													/>
													{errors.pricePerHour?.message && (
														<p className="text-red-500 text-xs">
															{errors.pricePerHour?.message as string}
														</p>
													)}
												</>
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
										rules={{ required: true }}
										render={({ field }) => (
											<>
												<Input {...field} type="text" className="w-full " />
												{errors.image?.message && (
													<p className="text-red-500 text-xs">
														{errors.image?.message as string}
													</p>
												)}
											</>
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
