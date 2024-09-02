import bikeApi from "@/redux/features/bike/bikeApi"
import { TBike } from "@/types/bikes.type"
import BikeCard from "../shared/BikeCard"
import UseAnimations from "react-useanimations"
import activity from "react-useanimations/lib/activity"
import SectionTitle from "../shared/SectionTitle"

const FeaturedBikes = () => {
	const { data: bikeData, isLoading } = bikeApi.useGetBikeQuery(undefined, {
		pollingInterval: 10000,
	})

	const bikes = bikeData?.data.filter(
		(bike: TBike) => bike.isAvailable === true
	)

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-center">
					<UseAnimations size={50} animation={activity} />
				</div>
			</div>
		)
	}

	return (
		<div className="container my-28">
			<SectionTitle
				title="Featured Bikes"
				description="Visit our bike page and see our amazing bikes."
			/>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 lg:px-0 px-10">
				{bikes?.slice(0, 6)?.map((bike: TBike) => (
					<BikeCard key={bike._id} bike={bike} />
				))}
			</div>
		</div>
	)
}

export default FeaturedBikes
