import { ChangeEventHandler, useState } from "react"
import { setHours, setMinutes } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import bikeApi from "@/redux/features/bike/bikeApi"
import { PlusCircle, Share2, Star, StarIcon } from "lucide-react"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { useParams } from "react-router-dom"
import { Calendar } from "@/components/ui/calendar"
import rentApi from "@/redux/features/rent/rentApi"
import { toast } from "sonner"
import UseAnimations from "react-useanimations"
import activity from "react-useanimations/lib/activity"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { currentUser } from "@/redux/features/auth/userSlice"
import { TBike } from "@/types/bikes.type"
import { addBike } from "@/redux/features/bike/bikeSlice"
import { Rating } from "@smastrom/react-rating"
import "@smastrom/react-rating/style.css"
import reviewApi from "@/redux/features/review/reviewApi"
import { TReview } from "@/types/review.type"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import moment from "moment"

const BikeDetails = () => {
	const { id } = useParams()
	const user = useAppSelector(currentUser)
	const dispatch = useAppDispatch()
	const [createRent] = rentApi.useRentBikeMutation()
	const { data: singleBikeData, isLoading } = bikeApi.useGetSingleBikeQuery(
		id,
		{ pollingInterval: 10000 }
	)
	const bike = singleBikeData?.data
	const [createReview] = reviewApi.useCreateReviewMutation()
	const { data: bikeReviews } = reviewApi.useGetReviewsQuery(bike?._id, {
		pollingInterval: 10000,
	})
	const allReviews = bikeReviews?.data
	const { control, handleSubmit } = useForm({})
	const [rating, setRating] = useState(0)
	const [selected, setSelected] = useState<Date>()
	const [timeValue, setTimeValue] = useState<string>("00:00")

	const totalRating = allReviews?.reduce(
		(sum: number, review: TReview) => sum + review?.rating,
		0
	)
	const averageRating = totalRating / allReviews?.length

	function onChange(newValue: number) {
		setRating(newValue)
	}

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const toastId = toast.loading("Review processing...")

		const reviewData = {
			...data,
			rating: rating,
			userId: user?.id,
			bikeId: bike._id,
		}
		try {
			const res = await createReview(reviewData).unwrap()
			toast.success(res.message, { id: toastId })
			if (res.success) {
				toast.success(res.message, { id: toastId })
			}
		} catch (error) {
			toast.error("Failed to add review...", { id: toastId })
		}
	}

	const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const time = e.target.value
		if (!selected) {
			setTimeValue(time)
			return
		}
		const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10))
		const newSelectedDate = setHours(setMinutes(selected, minutes), hours)
		setSelected(newSelectedDate)
		setTimeValue(time)
	}

	const handleDaySelect = (date: Date | undefined) => {
		if (!timeValue || !date) {
			setSelected(date)
			return
		}
		const [hours, minutes] = timeValue
			.split(":")
			.map((str) => parseInt(str, 10))
		const newDate = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			hours,
			minutes
		)
		setSelected(newDate)
	}

	const handleRentBike = async () => {
		const toastId = toast.loading("Bike rent processing...")
		const rentInfo = {
			bikeId: bike._id,
			startTime: selected?.toISOString(),
		}
		try {
			if (!user) {
				toast.error("You should login first!", { id: toastId })
				return
			} else {
				const res = await createRent(rentInfo).unwrap()
				toast.success(res.message, { id: toastId })

				// redirect to payment page
				window.location.href = res.data.paymentSession.payment_url
			}
		} catch (error) {
			toast.error("Bike rent Process Failed...", { id: toastId })
		}
	}

	const handleCompare = (data: TBike) => {
		dispatch(addBike(data))
		toast.success("Successfully add to compare list!")
	}

	const avgRating = (rating: number) => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
			stars.push(
				i <= rating ? (
					<Star
						key={i}
						size={18}
						className="text-yellow-500 fill-yellow-500 "
					/>
				) : (
					<StarIcon key={i} size={18} className="text-yellow-500" />
				)
			)
		}
		return stars
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
		<div>
			<div className="bg-about-us bg-bottom h-64 flex justify-center items-center">
				<h1 className="text-5xl font-orbitron font-bold">Details of Bike</h1>
			</div>
			<div className="container">
				<div className="grid grid-cols-3 gap-10 my-28">
					<div className="col-span-2 space-y-10">
						<h2 className="text-4xl font-orbitron font-bold">{bike.name}</h2>
						<div className="space-x-10 font-orbitron">
							<Button
								onClick={() => handleCompare(bike)}
								className="hover:bg-accent-foreground bg-transparent text-black hover:text-white border"
							>
								<PlusCircle className="mr-2 size-4" /> Compare Bike
							</Button>
							<Button className="hover:bg-accent-foreground bg-transparent text-black hover:text-white border">
								<Share2 className="mr-2 size-4" /> Share This Bike
							</Button>
						</div>
						<div>
							<img src={bike.image} alt="" />
						</div>
						<div className="space-y-5">
							<h2 className="text-4xl font-orbitron font-bold">Description</h2>
							<p className="font-inter">{bike.description}</p>
						</div>

						<div className="space-y-5">
							<div className="space-y-5">
								<h2 className="text-4xl font-orbitron font-bold">
									Leave a Comment
								</h2>
								<p className="font-inter">
									We will store your information. Don't worry your personal
									information will not be published. Required fields are marked
									*
								</p>
							</div>

							<form
								onSubmit={handleSubmit(onSubmit)}
								className="grid gap-4 font-inter space-y-5"
							>
								<div className="">
									<div className="">
										<Label>Your Rating *</Label>
										<Rating
											style={{ maxWidth: 180 }}
											value={rating}
											onChange={onChange}
											transition="zoom"
											isRequired
										/>
									</div>
								</div>
								<div className="">
									<div className="">
										<Label>Comment *</Label>
										<Controller
											name="comment"
											control={control}
											rules={{ required: true }}
											render={({ field }) => (
												<Textarea
													{...field}
													placeholder="What's on you minds..."
													rows={8}
												/>
											)}
										/>
									</div>
								</div>
								<Button
									type="submit"
									className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-7 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase"
								>
									Comment
								</Button>
							</form>
						</div>
					</div>
					<div className="col-span-1">
						<div className="space-y-5 flex flex-col">
							<Card
								className="overflow-hidden rounded-none"
								x-chunk="dashboard-05-chunk-4"
							>
								<CardContent className="p-6 text-sm">
									<div className="grid gap-3">
										<ul className="grid gap-3">
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground uppercase text-base font-inter">
													Price
												</span>
												<span className="text-3xl font-orbitron font-bold">
													${bike.pricePerHour} / (hr)
												</span>
											</li>
										</ul>

										<Dialog>
											<DialogTrigger asChild>
												<Button className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-7 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
													Book Now
												</Button>
											</DialogTrigger>
											<DialogContent className="sm:max-w-[425px] font-inter">
												<DialogHeader>
													<DialogTitle className="font-orbitron">
														Set Time
													</DialogTitle>
													<DialogDescription>
														Set your rent start time and enjoy your ride.
													</DialogDescription>
												</DialogHeader>
												<form style={{ marginBlockEnd: "1em" }}>
													<label>
														Set the time:
														<Input
															type="time"
															value={timeValue}
															onChange={handleTimeChange}
														/>
													</label>
												</form>
												<Calendar
													mode="single"
													selected={selected}
													onSelect={handleDaySelect}
													footer={`Selected date: ${
														selected ? selected.toLocaleString() : "none"
													}`}
													className="rounded-md border font-inter"
												/>
												<DialogFooter>
													<Button
														onClick={handleRentBike}
														type="submit"
														className="bg-accent-foreground font-orbitron"
													>
														Rent This Bike
													</Button>
												</DialogFooter>
											</DialogContent>
										</Dialog>
									</div>
								</CardContent>
							</Card>
							<Card
								className="overflow-hidden rounded-none"
								x-chunk="dashboard-05-chunk-4"
							>
								<CardHeader>
									<span className="text-2xl font-orbitron font-bold">
										Specifications
									</span>
								</CardHeader>
								<CardContent className=" text-sm">
									<div className="grid gap-3 font-inter">
										<div className="font-semibold"></div>
										<ul className="grid gap-3 capitalize">
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground text-base">
													Category
												</span>
												<span className="font-semibold text-base">
													{bike.category.replace(/_/g, " ")}
												</span>
											</li>
											<Separator />
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground text-base">
													Brand
												</span>
												<span className="font-semibold text-base">
													{bike.brand}
												</span>
											</li>
											<Separator />
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground text-base">
													Model
												</span>
												<span className="font-semibold text-base">
													{bike.model}
												</span>
											</li>
											<Separator />
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground text-base">
													Bike CC
												</span>
												<span className="font-semibold text-base">
													{bike.cc} CC
												</span>
											</li>
											<Separator />
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground text-base">
													Release year
												</span>
												<span className="font-semibold text-base">
													{bike.year}
												</span>
											</li>
											<Separator />
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground text-base">
													Bike color
												</span>
												<span className="font-semibold text-base">
													{bike.color}
												</span>
											</li>
											<Separator />
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground text-base">
													Frame Size
												</span>
												<span className="font-semibold text-base">
													{bike.frame} CM
												</span>
											</li>
											<Separator />
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground text-base">
													Max. Support
												</span>
												<span className="font-semibold text-base">
													{bike.support} Km/h
												</span>
											</li>
											<Separator />
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground text-base">
													Weight
												</span>
												<span className="font-semibold text-base">
													{bike.weight} Kg
												</span>
											</li>
										</ul>
									</div>
								</CardContent>
							</Card>
							<Card
								className="overflow-hidden rounded-none"
								x-chunk="dashboard-05-chunk-4"
							>
								<CardHeader>
									<span className="text-2xl font-orbitron font-bold">
										Reviews
									</span>
								</CardHeader>
								<CardContent className=" text-sm">
									<div className="grid gap-3 font-inter">
										<div className="flex gap-3">
											<div className="flex">{avgRating(averageRating)}</div>
											<div className="font-inter">
												({allReviews?.length} Rider Review)
											</div>
										</div>
										<Separator />
										<div className="grid gap-5">
											{allReviews?.map((review: TReview) => (
												<div key={review._id} className="flex gap-3">
													<div className="flex">
														<Avatar>
															<AvatarImage
																src={
																	review.userId.image
																		? review.userId.image
																		: "https://i.ibb.co/H7zTvh7/user.png"
																}
																alt="user profile"
															/>
														</Avatar>
													</div>
													<div className="flex-1">
														<div className="flex gap-3">
															<div className="font-semibold font-orbitron">
																{review.userId.firstName}{" "}
																{review.userId.lastName}
															</div>
															<div className="text-xs text-muted-foreground">
																• {moment(review?.createdAt).fromNow()}
															</div>
														</div>
														<div className="flex">
															{avgRating(review.rating)}
														</div>
														<div className="text-sm mt-2">{review.comment}</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BikeDetails
