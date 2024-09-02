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
import { currentToken } from "@/redux/features/auth/userSlice"
import bikeApi from "@/redux/features/bike/bikeApi"
import { useAppSelector } from "@/redux/hook"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"
import UseAnimations from "react-useanimations"
import activity from "react-useanimations/lib/activity"

const UpdateBike = () => {
	const { id } = useParams()
	const token = useAppSelector(currentToken)
	const { data: singleBikeData, isLoading } = bikeApi.useGetSingleBikeQuery(
		id,
		{ pollingInterval: 10000 }
	)
	const [updateBike] = bikeApi.useUpdateBikeMutation()
	const navigate = useNavigate()

	const bike = singleBikeData?.data

	const { control, handleSubmit } = useForm({
		defaultValues: {
			name: bike?.name,
			brand: bike?.brand,
			category: bike?.category,
			cc: bike?.cc,
			color: bike?.color,
			description: bike?.description,
			frame: bike?.frame,
			image: bike?.image,
			model: bike?.model,
			pricePerHour: bike?.pricePerHour,
			support: bike?.support,
			weight: bike?.weight,
			year: bike?.year,
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const toastId = toast.loading("Updating bike info...")
		const bikeInfo = {
			id,
			data,
			token,
		}
		try {
			const res = await updateBike(bikeInfo).unwrap()
			toast.success(res.message, { id: toastId })
			navigate("/dashboard/bike-management")
		} catch (error) {
			toast.error("Bike Update Process Failed...", { id: toastId })
		}
	}

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-center">
					<UseAnimations size={50} animation={activity} />
				</div>
			</div>
		)
	}

	return (
		<div className="w-full p-24 pt-8">
			<form
				onSubmit={handleSubmit(onSubmit)}
				defaultValue={singleBikeData?.data}
			>
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
										<Label>Bike Title</Label>
										<Controller
											name="name"
											control={control}
											defaultValue={bike?.name}
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
												defaultValue={bike?.brand}
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
												defaultValue={bike?.model}
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

									<div className="grid grid-cols-3 gap-5 justify-between">
										<div className="grid gap-3">
											<Label>Bike CC</Label>
											<Controller
												name="cc"
												control={control}
												defaultValue={bike?.cc}
												render={({ field }) => (
													<Input
														{...field}
														type="text"
														className="w-full"
														placeholder="Write you bike CC"
													/>
												)}
											/>
										</div>
										<div className="grid gap-3">
											<Label>Release Year</Label>
											<Controller
												name="year"
												control={control}
												defaultValue={bike?.year}
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
											<Label>Frame Size (cm)</Label>
											<Controller
												name="frame"
												control={control}
												defaultValue={bike?.frame}
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
											<Label>Max. support (km/h)</Label>
											<Controller
												name="support"
												control={control}
												defaultValue={bike?.support}
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
												defaultValue={bike?.color}
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
												defaultValue={bike?.category}
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
											<Label>Weight (kg)</Label>
											<Controller
												name="weight"
												control={control}
												defaultValue={bike?.weight}
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
											defaultValue={bike?.description}
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
								<CardTitle className="font-orbitron">Bike Price</CardTitle>
							</CardHeader>
							<CardContent className="font-inter">
								<div className="grid gap-6">
									<div className="grid gap-3">
										<Label>Price Per Hour</Label>
										<Controller
											name="pricePerHour"
											control={control}
											defaultValue={bike?.pricePerHour}
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
										defaultValue={bike?.image}
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
