import { Bike } from "lucide-react"
import { Button } from "../ui/button"
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "../ui/resizable"
import { Link } from "react-router-dom"

const Discount = () => {
	return (
		<div className="container mb-28">
			<div className="bg-discount-1 bg-top bg-no-repeat py-24">
				<div className="bg-discount-2 bg-no-repeat bg-center ml-5">
					<h2 className="text-6xl font-orbitron font-bold  text-center mt-5">
						30%
					</h2>
				</div>
				<div className="text-center space-y-5 mt-5">
					<h2 className="text-5xl font-orbitron font-bold mt-5 text-center">
						Reserve Your Bike Online and Save
					</h2>
					<Button className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-6 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
						Book Now
					</Button>
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
