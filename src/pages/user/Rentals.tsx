/* eslint-disable no-mixed-spaces-and-tabs */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { currentToken } from "@/redux/features/auth/userSlice"
import couponApi from "@/redux/features/coupon/couponApi"
import rentApi from "@/redux/features/rent/rentApi"
import { useAppSelector } from "@/redux/hook"
import { TCoupon } from "@/types/coupon.type"
import { TRental } from "@/types/rentals.type"
import CurrentTime from "@/utils/CurrentTime"
import { CircleAlert } from "lucide-react"
import moment from "moment"
import { useState } from "react"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { toast } from "sonner"

const Rentals = () => {
	const token = useAppSelector(currentToken)
	const [fullPayment] = rentApi.useFullPaymentMutation()
	const { data: rentalData } = rentApi.useGetRentQuery(token, {
		pollingInterval: 10000,
	})
	const rentalBikes = rentalData?.data
	const { data: couponData } = couponApi.useGetCouponQuery(undefined, {
		pollingInterval: 10000,
	})
	const couponCode = couponData?.data
	const [totalAmount, setTotalAmount] = useState(0)
	const unpaidRentals = rentalBikes?.filter(
		(bike: TRental) => bike.fullPay === false
	)
	const paidRentals = rentalBikes?.filter(
		(bike: TRental) => bike.fullPay === true
	)

	const { handleSubmit, register, control } = useForm<FieldValues>()

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const findBike = rentalBikes.find(
			(bike: TRental) => String(bike?._id) === String(data?.bikeId)
		)

		const findCoupon = couponCode.find(
			(coupon: TCoupon) => coupon.coupon === data.coupon
		)

		if (data?.coupon === findCoupon?.coupon) {
			if (findCoupon?.couponType === "percentage") {
				const amount = (findBike?.totalCost / 100) * (100 - findCoupon?.deal)
				setTotalAmount(amount)
			} else if (findCoupon?.couponType === "flat") {
				const amount = findBike?.totalCost - findCoupon?.deal
				setTotalAmount(amount)
			}
		}
	}

	const handleFullPay = async (id: string) => {
		const toastId = toast.loading("Payment processing...")
		const paymentInfo = {
			id,
			token,
		}
		const unpaid = unpaidRentals.find((rent: TRental) => rent._id === id)

		try {
			if (!unpaid?.isReturned) {
				toast.error("This bike is not return yet!", { id: toastId })
			} else {
				const res = await fullPayment(paymentInfo).unwrap()
				if (res.success) {
					toast.success(res.message, { id: toastId })
					window.location.href = res.data.paymentSession.payment_url
				}
			}
		} catch (error) {
			toast.error("Bike rent Process Failed...", { id: toastId })
		}
	}

	return (
		<div className="p-10">
			<div>
				<h2 className="font-orbitron tracking-wider text-3xl font-bold mb-10">
					Rentals Bikes
				</h2>
			</div>
			<Tabs defaultValue="unpaid" className="flex flex-col items-center">
				<TabsList className="w-full">
					<TabsTrigger
						value="unpaid"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						Unpaid Rentals
					</TabsTrigger>
					<TabsTrigger
						value="paid"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						Paid Rentals
					</TabsTrigger>
				</TabsList>
				<TabsContent value="unpaid" className="w-full">
					<Card className="w-full">
						<CardContent className="font-inter">
							{unpaidRentals && unpaidRentals?.length > 0 ? (
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="hidden w-[100px] sm:table-cell">
												<span className="sr-only">img</span>
											</TableHead>
											<TableHead>Name</TableHead>
											<TableHead>Start Time</TableHead>
											<TableHead className="hidden md:table-cell">
												Return Time
											</TableHead>
											<TableHead className="hidden md:table-cell">
												Coupon
											</TableHead>
											<TableHead>Total Cost</TableHead>
											<TableHead>Action</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{unpaidRentals?.map((bike: TRental) => (
											<TableRow key={bike?._id}>
												<TableCell className="hidden sm:table-cell">
													<img
														alt="Product img"
														className="aspect-square rounded-md object-cover"
														height="64"
														src={bike?.bikeId?.image}
														width="64"
													/>
												</TableCell>
												<TableCell className="font-medium">
													{bike?.bikeId?.name}
												</TableCell>
												<TableCell className="capitalize">
													{moment(bike?.startTime).format("DD-MM-YYYY, h:mm a")}
												</TableCell>
												<TableCell className="hidden md:table-cell">
													{bike?.returnTime ? (
														moment(bike?.returnTime).format(
															"DD-MM-YYYY, h:mm a"
														)
													) : (
														<div className="flex gap-3">
															<CurrentTime />
															<TooltipProvider>
																<Tooltip>
																	<TooltipTrigger
																		asChild
																		className="cursor-pointer"
																	>
																		<CircleAlert />
																	</TooltipTrigger>
																	<TooltipContent>
																		<p>This bike is currently on rent!</p>
																	</TooltipContent>
																</Tooltip>
															</TooltipProvider>
														</div>
													)}
												</TableCell>

												<TableCell className="hidden md:table-cell w-16">
													<form
														onSubmit={handleSubmit(onSubmit)}
														className="flex flex-col gap-3"
													>
														<Controller
															name="coupon"
															control={control}
															rules={{ required: true }}
															render={({ field }) => (
																<Input
																	{...field}
																	type="text"
																	className="w-full"
																	placeholder="Write you coupon deal"
																/>
															)}
														/>
														{/* <input
															type="text"
															{...register("coupon")}
															className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
														/> */}
														<input
															type="hidden"
															value={bike?._id}
															{...register("bikeId")}
														/>

														<Button type="submit">Submit Coupon</Button>
													</form>
												</TableCell>
												<TableCell className="hidden md:table-cell">
													<p>
														Total Amount: $
														{totalAmount
															? totalAmount?.toFixed(2)
															: bike?.totalCost?.toFixed(2)}
													</p>
													<p>Advance Pay: ${bike?.advancePay?.toFixed(2)}</p>
													<p>
														Due Amount: $
														{totalAmount
															? (totalAmount - bike?.advancePay).toFixed(2)
															: (bike?.totalCost - bike?.advancePay).toFixed(2)}
													</p>
												</TableCell>
												<TableCell className="hidden md:table-cell">
													<Button
														onClick={() => handleFullPay(bike?._id)}
														className="bg-accent-foreground font-orbitron tracking-wider px-10 py-5 rounded-none duration-500"
													>
														Payment
													</Button>
												</TableCell>
											</TableRow>
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
											Unpaid rentals not found
										</h2>
									</div>
								</>
							)}
						</CardContent>
						<CardFooter></CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="paid" className="w-full">
					<Card className="w-full">
						<CardContent className="font-inter">
							{paidRentals && paidRentals?.length > 0 ? (
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="hidden w-[100px] sm:table-cell">
												<span className="sr-only">img</span>
											</TableHead>
											<TableHead>Name</TableHead>
											<TableHead>Start Time</TableHead>
											<TableHead className="hidden md:table-cell">
												Return Time
											</TableHead>
											<TableHead>Total Cost</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{paidRentals?.map((bike: TRental) => (
											<TableRow key={bike._id}>
												<TableCell className="hidden sm:table-cell">
													<img
														alt="Product img"
														className="aspect-square rounded-md object-cover"
														height="64"
														src={bike?.bikeId?.image}
														width="64"
													/>
												</TableCell>
												<TableCell className="font-medium">
													{bike?.bikeId?.name}
												</TableCell>
												<TableCell className="capitalize">
													{moment(bike?.startTime).format("DD-MM-YYYY, h:mm a")}
												</TableCell>
												<TableCell className="hidden md:table-cell">
													{bike.returnTime
														? moment(bike?.returnTime).format(
																"DD-MM-YYYY, h:mm a"
														  )
														: "Did`t return yet"}
												</TableCell>

												<TableCell className="hidden md:table-cell">
													${bike?.totalCost}
												</TableCell>
											</TableRow>
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
											Bike not found
										</h2>
									</div>
								</>
							)}
						</CardContent>
						<CardFooter></CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default Rentals
