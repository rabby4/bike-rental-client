import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import couponApi from "@/redux/features/coupon/couponApi"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { toast } from "sonner"

const Coupon = () => {
	const [createCoupon] = couponApi.useCreateCouponMutation()
	const { control, handleSubmit } = useForm({})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const toastId = toast.loading("Coupon creating...")

		const couponData = {
			...data,
			deal: Number(data.deal),
		}

		try {
			const res = await createCoupon(couponData).unwrap()
			toast.success(res.message, { id: toastId })
		} catch (error) {
			toast.error("Coupon create failed...", { id: toastId })
		}
	}

	return (
		<div>
			<div className="max-w-4xl mx-auto z-20 mt-10">
				<Card className="rounded-none ">
					<CardContent className="items-center p-12">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="grid md:gap-5 gap-2">
								<div className="flex flex-col gap-3">
									<Label>Coupon Code</Label>
									<Controller
										name="coupon"
										control={control}
										rules={{ required: true }}
										render={({ field }) => (
											<Input
												{...field}
												type="text"
												className="w-full"
												placeholder="Write you coupon code"
											/>
										)}
									/>
								</div>
								<div className="flex flex-col gap-3">
									<Label>Coupon Deal/Amount</Label>
									<Controller
										name="deal"
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
								</div>
								<div className="flex flex-col gap-3">
									<Label>Coupon type</Label>
									<Controller
										name="couponType"
										control={control}
										rules={{ required: true }}
										render={({ field }) => (
											<Select
												{...field}
												onValueChange={(value) => field.onChange(value)}
											>
												<SelectTrigger>
													<SelectValue placeholder="Select coupon type" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="percentage">
														Percentage (%)
													</SelectItem>
													<SelectItem value="flat">Flat Rate</SelectItem>
												</SelectContent>
											</Select>
										)}
									/>
								</div>

								<Button
									onClick={onSubmit}
									className="bg-accent-foreground hover:bg-gray-200 hover:text-black w-full font-orbitron tracking-wider self-end"
								>
									Create Coupon
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default Coupon
