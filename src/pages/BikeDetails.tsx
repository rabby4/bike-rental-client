import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import bikeApi from "@/redux/features/bike/bikeApi"
import { PlusCircle, Share2 } from "lucide-react"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { useParams } from "react-router-dom"

const BikeDetails = () => {
	const { id } = useParams()
	const { data: singleBikeData, isLoading } = bikeApi.useGetSingleBikeQuery(id)
	const bike = singleBikeData?.data

	const { control, handleSubmit } = useForm({})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data)
	}

	if (isLoading) {
		return <p>Loading...</p>
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
							<Button className="hover:bg-accent-foreground bg-transparent text-black hover:text-white border">
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
									Your email address will not be published. Required fields are
									marked *
								</p>
							</div>

							<form
								onSubmit={handleSubmit(onSubmit)}
								className="grid gap-4 font-inter space-y-5"
							>
								<div className="">
									<div className="">
										<Label>Comment</Label>
										<Controller
											name="comment"
											control={control}
											rules={{ required: true }}
											render={({ field }) => (
												<Textarea
													{...field}
													placeholder="What's on you minds..."
												/>
											)}
										/>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-2">
									<div className="grid gap-2">
										<Label>Your Name</Label>
										<Controller
											name="name"
											control={control}
											rules={{ required: true }}
											render={({ field }) => (
												<Input
													{...field}
													type="text"
													placeholder="Enter you full name"
												/>
											)}
										/>
									</div>
									<div className="grid gap-2">
										<Label>Email Address</Label>
										<Controller
											name="email"
											control={control}
											rules={{ required: true }}
											render={({ field }) => (
												<Input
													{...field}
													type="email"
													placeholder="Enter your email"
												/>
											)}
										/>
									</div>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="terms" />
									<Label htmlFor="terms">
										Save my name, email, and website in this browser for the
										next time I comment.
									</Label>
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
										<div className="font-semibold"></div>
										<ul className="grid gap-3">
											<li className="flex items-center justify-between">
												<span className="text-muted-foreground uppercase text-base font-inter">
													Price
												</span>
												<span className="text-3xl font-orbitron font-bold">
													${bike.pricePerHour}
												</span>
											</li>
										</ul>
										<Button
											type="submit"
											className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-7 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase"
										>
											Book Now
										</Button>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BikeDetails
