import BikeCard from "../shared/BikeCard"

const FeaturedBikes = () => {
	return (
		<div className="container my-28">
			<div className="md:w-2/4 mx-auto text-center space-y-3">
				<img
					src="https://i.ibb.co/vq2CpQr/renroll-1106122708.webp"
					alt=""
					className="mx-auto w-24"
				/>
				<h1 className="text-5xl font-orbitron font-bold">Featured Bikes</h1>
				<p className="font-inter italic ">
					Visit our bike page and see our amazing bikes.
				</p>
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 lg:px-0 px-10">
				<BikeCard />
				<BikeCard />
				<BikeCard />
			</div>
		</div>
	)
}

export default FeaturedBikes
