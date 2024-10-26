import SectionTitle from "../shared/SectionTitle"

const ChooseUs = () => {
	return (
		<div className="container">
			<SectionTitle
				title="Why Choose ProBike"
				description="Visit our bike page and see our amazing bikes."
			/>
			<div className="grid lg:grid-cols-3 gap-5 mt-10 lg:px-0 px-10">
				<div
					className="flex flex-col lg:justify-around md:items-center md:gap-5 gap-3 lg:w-3/4 w-full lg:justify-self-end"
					data-aos="fade-right"
					data-aos-duration="1500"
				>
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold lg:text-right text-center">
							Fully Insured Rental Service
						</h2>
						<p className="font-inter lg:text-right text-center">
							Ride worry-free with our fully insured rentals, covering potential
							damages for a safer ride.
						</p>
					</div>
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold lg:text-right text-center">
							Different Types of Bikes
						</h2>
						<p className="font-inter lg:text-right text-center">
							From mountain trails to city streets, choose the perfect bike for
							every adventure
						</p>
					</div>
				</div>
				<div data-aos="fade-up" data-aos-duration="1500">
					<img
						src="https://i.ibb.co/phJ2Wpg/renroll-1104289928.webp"
						alt=""
						className="mx-auto rounded-full"
					/>
				</div>
				<div
					className="flex flex-col lg:justify-around md:items-center md:gap-5 gap-3 lg:w-3/4 w-full"
					data-aos="fade-left"
					data-aos-duration="1500"
				>
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold lg:text-left text-center">
							Flexible Rental Plans
						</h2>
						<p className="font-inter lg:text-left text-center">
							Enjoy flexible rental options daily, weekly, or monthly to suit
							your schedule and budget.
						</p>
					</div>
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold lg:text-left text-center">
							Easy Booking and Support
						</h2>
						<p className="font-inter lg:text-left text-center">
							Book online with ease, and rely on our team for support at every
							step.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChooseUs
