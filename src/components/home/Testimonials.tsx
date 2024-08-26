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
				<div className="md:w-2/4 mx-auto text-center space-y-3 text-white">
					<img
						src="https://i.ibb.co/vq2CpQr/renroll-1106122708.webp"
						alt=""
						className="mx-auto w-24"
					/>
					<h1 className="text-5xl font-orbitron font-bold ">Testimonials</h1>
					<p className="font-inter italic ">
						The Probike strives to give the best customer service possible. We
						believe every customer should feel welcome and comfortable in our
						shops.
					</p>
				</div>
				<div className="max-w-3xl mx-auto mt-10">
					<Carousel className="w-full">
						<CarouselContent>
							{testimonials.map((item) => (
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
