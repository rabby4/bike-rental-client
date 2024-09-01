import { Star, StarIcon } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import testimonials from "./../../data/testimonials.json"
import Autoplay from "embla-carousel-autoplay"
import SectionTitle from "../shared/SectionTitle"

const Testimonials = () => {
	const rating = (rating: number) => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
			stars.push(
				i <= rating ? (
					<Star key={i} className="text-yellow-500 fill-yellow-500 size-4" />
				) : (
					<StarIcon key={i} className="text-gray-500 size-4" />
				)
			)
		}
		return stars
	}
	return (
		<div className="bg-testimonials bg-no-repeat bg-cover bg-center py-36 my-28">
			<div className="container">
				<div className="text-white">
					<SectionTitle
						title="Testimonials"
						description="The Probike strives to give the best customer service possible. We
						believe every customer should feel welcome and comfortable in our
						shops."
					/>
				</div>
				<div className="max-w-3xl mx-auto mt-10">
					<Carousel
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
						className="w-full"
					>
						<CarouselContent>
							{testimonials?.map((item) => (
								<CarouselItem key={item.id}>
									<div className="p-1">
										<Card className="bg-white bg-opacity-50 border-0 text-center">
											<CardContent className="flex flex-col items-center justify-center p-6 font-inter space-y-1">
												<span className="leading-7">{item.review}</span>
												<img
													src={item.img}
													alt=""
													className="size-16 rounded-full"
												/>
												<h2 className="font-orbitron text-lg font-semibold">
													{item.name}
												</h2>
												<p className="font-inter italic">{item.role}</p>
												<div className="flex justify-start">
													{rating(item.rating)}
												</div>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
