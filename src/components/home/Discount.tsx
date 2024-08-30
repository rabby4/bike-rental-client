import { Bike, Copy } from "lucide-react"
import { Button } from "../ui/button"
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "../ui/resizable"
import { Link } from "react-router-dom"
import { SpinWheel, ISpinWheelProps } from "spin-wheel-game"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useState } from "react"
import { toast } from "sonner"

const segments = [
	{ segmentText: "5%", segColor: "#e23a2e" },
	{ segmentText: "10%", segColor: "#1a73e8" },
	{ segmentText: "15%", segColor: "#fbbf12" },
	{ segmentText: "20%", segColor: "#279847" },
	{ segmentText: "25%", segColor: "#C51605 " },
]

const Discount = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [couponCode, setCouponCode] = useState("")

	const handleSpinFinish = (result: string) => {
		if (result === "5%") {
			setCouponCode("OFF5")
		} else if (result === "10%") {
			setCouponCode("OFF10")
		} else if (result === "15%") {
			setCouponCode("OFF15")
		} else if (result === "20%") {
			setCouponCode("OFF20")
		} else if (result === "25%") {
			setCouponCode("OFF25")
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
		upDuration: 100,
		downDuration: 600,
		fontFamily: "Orbitron",
		arrowLocation: "top",
		showTextOnSpin: false,
		isSpinSound: false,
	}

	return (
		<div className="container mb-28">
			<div className="grid grid-cols-2 justify-center">
				<div className="bg-discount-1 bg-top bg-no-repeat py-24">
					<div className="bg-discount-2 bg-no-repeat bg-center ml-5">
						<h2 className="text-6xl font-orbitron font-bold  text-center mt-5">
							30%
						</h2>
					</div>
					<div className="text-center space-y-5 mt-5">
						<h2 className="text-4xl font-orbitron font-bold mt-5 text-center">
							Reserve Your Bike Online and Save
						</h2>
						<Button className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-6 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
							Book Now
						</Button>
					</div>
				</div>
				<div>
					<h2 className="text-4xl font-orbitron font-bold mt-5 text-center">
						<SpinWheel {...spinWheelProps} />
						{/* Spin Wheel Component here */}
						<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
							<DialogTrigger asChild>
								<Button variant="outline">Share</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-md">
								<DialogHeader>
									<DialogTitle>Share link</DialogTitle>
									<DialogDescription>
										Anyone who has this link will be able to view this.
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
				</div>
			</div>
			<div>
				<ResizablePanelGroup
					direction="horizontal"
					className=" rounded-lg md:min-w-[450px]"
				>
					<ResizablePanel defaultSize={50}>
						<div className="bg-discount-3 bg-no-repeat bg-center flex items-center justify-center py-12">
							<img
								src="https://i.ibb.co/f406ydf/illustration-promo.png"
								alt=""
							/>
						</div>
					</ResizablePanel>
					{/* <ResizableHandle /> */}
					<ResizablePanel defaultSize={50}>
						<ResizablePanelGroup direction="vertical">
							<ResizablePanel defaultSize={25}>
								<div className="flex h-full items-center gap-5 p-6">
									<Bike size={50} />
									<h2 className="text-lg font-bold font-orbitron tracking-wider">
										For bike rental & bike tour <br /> with pick up at:
									</h2>
								</div>
							</ResizablePanel>
							<ResizableHandle />
							<ResizablePanel defaultSize={75}>
								<ResizablePanelGroup direction="horizontal">
									<ResizablePanel defaultSize={50}>
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
									</ResizablePanel>
									<ResizableHandle />
									<ResizablePanel defaultSize={50}>
										<div className="flex h-full items-center p-6">
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
									</ResizablePanel>
								</ResizablePanelGroup>
							</ResizablePanel>
						</ResizablePanelGroup>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	)
}

export default Discount
