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
							Tempore usmod incididunt labore lorem ipsum enim sed veniam
						</p>
					</div>
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold lg:text-right text-center">
							Different Types of Bikes
						</h2>
						<p className="font-inter lg:text-right text-center">
							Labore tempore usmod incididunt lorem ipsum enim sed veniam
						</p>
					</div>
				</div>
				<div data-aos="fade-up" data-aos-duration="1500">
					<img
						src="https://i.ibb.co/phJ2Wpg/renroll-1104289928.webp"
						alt=""
						className="mx-auto"
					/>
				</div>
				<div
					className="flex flex-col lg:justify-around md:items-center md:gap-5 gap-3 lg:w-3/4 w-full"
					data-aos="fade-left"
					data-aos-duration="1500"
				>
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold lg:text-left text-center">
							Fully Insured Rental Service
						</h2>
						<p className="font-inter lg:text-left text-center">
							Tempore usmod incididunt labore lorem ipsum enim sed veniam
						</p>
					</div>
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold lg:text-left text-center">
							Different Types of Bikes
						</h2>
						<p className="font-inter lg:text-left text-center">
							Labore tempore usmod incididunt lorem ipsum enim sed veniam
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChooseUs
