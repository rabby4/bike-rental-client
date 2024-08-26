const ChooseUs = () => {
	return (
		<div className="container">
			<div className="md:w-2/4 mx-auto text-center space-y-3">
				<img
					src="https://i.ibb.co/vq2CpQr/renroll-1106122708.webp"
					alt=""
					className="mx-auto w-24"
				/>
				<h1 className="text-5xl font-orbitron font-bold">Why Choose ProBike</h1>
				<p className="font-inter italic ">
					Visit our bike page and see our amazing bikes.
				</p>
			</div>
			<div className="grid grid-cols-3 gap-5 mt-10 lg:px-0 px-10">
				<div className="flex flex-col justify-around w-3/4 justify-self-end">
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold text-right">
							Fully Insured Rental Service
						</h2>
						<p className="font-inter text-right">
							Tempore usmod incididunt labore lorem ipsum enim sed veniam
						</p>
					</div>
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold text-right">
							Different Types of Bikes
						</h2>
						<p className="font-inter text-right">
							Labore tempore usmod incididunt lorem ipsum enim sed veniam
						</p>
					</div>
				</div>
				<div>
					<img
						src="https://i.ibb.co/phJ2Wpg/renroll-1104289928.webp"
						alt=""
						className="mx-auto"
					/>
				</div>
				<div className="flex flex-col justify-around w-3/4">
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold ">
							Fully Insured Rental Service
						</h2>
						<p className="font-inter ">
							Tempore usmod incididunt labore lorem ipsum enim sed veniam
						</p>
					</div>
					<div className="space-y-5">
						<h2 className="font-orbitron text-3xl font-bold ">
							Different Types of Bikes
						</h2>
						<p className="font-inter ">
							Labore tempore usmod incididunt lorem ipsum enim sed veniam
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChooseUs
