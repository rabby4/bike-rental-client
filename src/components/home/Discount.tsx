import { Bike, Copy } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"
import { ISpinWheelProps, SpinWheel } from "spin-wheel-game"
import { Button } from "../ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import couponApi from "@/redux/features/coupon/couponApi"
import { TCoupon, TSegment } from "@/types/coupon.type"

const segmentsColor = [
	"#e23a2e",
	"#1a73e8",
	"#fbbf12",
	"#279847",
	"#C51605",
	"#16325B",
	"#674636",
	"#821131",
	"#FF8225",
	"#EF5A6F",
]

const Discount = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [couponCode, setCouponCode] = useState("")
	const { data: couponData } = couponApi.useGetCouponQuery(undefined, {
		pollingInterval: 10000,
	})

	const segments = couponData?.data?.map((item: TCoupon) => ({
		segmentText: `${item.deal}${item.couponType === "percentage" ? "%" : "Tk"}`,
		segColor: segmentsColor[Math.ceil(Math.random() * 10)],
		couponCode: item.coupon,
	}))

	const handleSpinFinish = (result: string) => {
		const selectedSegment = segments.find(
			(segment: TSegment) => segment.segmentText === result
		)
		if (selectedSegment) {
			setCouponCode(selectedSegment.couponCode)
		}

		setIsDialogOpen(true)
	}
	const handleCopyClick = () => {
		navigator.clipboard
			.writeText(couponCode)
			.then(() => {
				toast.success("Coupon code copied success!")
			})
			.catch((err) => {
				console.error("Failed to copy coupon", err)
			})
	}

	const spinWheelProps: ISpinWheelProps = {
		segments,
		onFinished: handleSpinFinish,
		primaryColor: "#32a852",
		contrastColor: "white",
		buttonText: "",
		isOnlyOnce: true,
		size: 290,
		upDuration: Math.floor(Math.random() * (200 - 100 + 1)) + 100,
		downDuration: Math.floor(Math.random() * (200 - 100 + 1)) + 600,
		fontFamily: "Orbitron",
		arrowLocation: "top",
		showTextOnSpin: false,
		isSpinSound: false,
	}

	return (
		<div className="container mb-28">
			<div className="bg-discount-1 bg-top bg-no-repeat py-24">
				<div className="bg-discount-2 bg-no-repeat bg-center ml-5">
					<h2 className="text-6xl font-orbitron font-bold  text-center mt-5">
						25%
					</h2>
				</div>
				<div className="text-center space-y-5 mt-5">
					<h2 className="md:text-4xl text-3xl font-orbitron font-bold mt-5 text-center">
						Click the below button and get up to 25% discount.
					</h2>
					<Dialog>
						<DialogTrigger asChild>
							<Button className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-6 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
								Wheel Spin Now
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px] bg-transparent border-0">
							<h2 className="text-4xl font-orbitron font-bold mt-5 text-center">
								<SpinWheel {...spinWheelProps} />
								<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
									<DialogContent className="sm:max-w-md">
										<DialogHeader>
											<DialogTitle>Copy this coupon</DialogTitle>
											<DialogDescription>
												Copy this coupon. and you can use it when you will
												payment for your rentals.
											</DialogDescription>
										</DialogHeader>
										<div className="flex items-center space-x-2">
											<div className="grid flex-1 gap-2">
												<Label htmlFor="link" className="sr-only">
													Your coupon code
												</Label>
												<Input id="link" value={couponCode} readOnly />
											</div>
											<Button
												type="submit"
												size="sm"
												className="px-3"
												onClick={handleCopyClick}
											>
												<span className="sr-only">Copy</span>
												<Copy className="h-4 w-4" />
											</Button>
										</div>
									</DialogContent>
								</Dialog>
							</h2>
						</DialogContent>
					</Dialog>
				</div>
			</div>

			<div className="grid md:grid-cols-2 grid-cols-1">
				<div className="bg-discount-3 bg-no-repeat bg-center flex items-center justify-center py-12">
					<img src="https://i.ibb.co/f406ydf/illustration-promo.png" alt="" />
				</div>
				<div>
					<div>
						<div className="flex h-full items-center gap-5 p-6">
							<Bike size={50} />
							<h2 className="text-lg font-bold font-orbitron tracking-wider">
								For bike rental & bike tour <br /> with pick up at:
							</h2>
						</div>
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1">
						<div>
							<div className="flex h-full items-center gap-5 p-6">
								<div className="space-y-4">
									<h2 className="font-bold font-orbitron tracking-wider">
										Kona Central Park
									</h2>
									<address>
										203 West 58th Street <br /> New York <br />
										+800-567-8990
									</address>
									<Link
										to={"/"}
										className="text-accent-foreground duration-300 font-medium underline font-inter"
									>
										See Map
									</Link>
								</div>
							</div>
						</div>
						<div>
							<div className="flex h-full items-center gap-5 p-6">
								<div className="space-y-4">
									<h2 className="font-bold font-orbitron tracking-wider">
										Kona Central Park
									</h2>
									<address>
										203 West 58th Street <br /> New York <br />
										+800-567-8990
									</address>
									<Link
										to={"/"}
										className="text-accent-foreground duration-300 font-medium underline font-inter"
									>
										See Map
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div></div>
		</div>
	)
}

export default Discount
