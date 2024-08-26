import { NavLink } from "react-router-dom"
import { Button } from "../ui/button"
import {
	Carousel as Slider,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Carousel = () => {
	return (
		<div className="">
			<Slider
				className="w-full"
				plugins={[
					Autoplay({
						delay: 5000,
					}),
				]}
			>
				<CarouselContent>
					<CarouselItem>
						<div className="p-1 lg:h-[calc(100vh-100px)] md:h-[500px] h-[300px] w-full flex items-center bg-carousel-1 bg-cover bg-no-repeat md:px-10 px-5">
							<div className="container ">
								<div className="grid grid-cols-2">
									<div className="md:space-y-5">
										<h1 className="md:text-[85px] text-6xl font-orbitron font-semibold">
											On-road. Off- road. Any road
										</h1>
										<p className="font-inter text-lg">
											It's the most advanced, best performing alloy race bike
											ever made. Fitting, since aluminum is the 13th element.
										</p>
										<Button className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-7 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
											<NavLink to={"/bikes"}>Discover Now</NavLink>
										</Button>
									</div>
									<div></div>
								</div>
							</div>
						</div>
					</CarouselItem>
					<CarouselItem>
						<div className="p-1 lg:h-[calc(100vh-100px)] md:h-[500px] h-[300px] w-full flex items-center bg-carousel-2 bg-cover bg-no-repeat md:px-10 px-5">
							<div className="container ">
								<div className="grid grid-cols-2">
									<div className="md:space-y-5">
										<h1 className="md:text-[85px] text-6xl font-orbitron font-semibold">
											Break free from the same roads
										</h1>
										<p className="font-inter text-lg">
											Don’t overthink it. Mellow to mad. Wild to mild. Whatever
											your trail riding style, Habit’s got what you need.
										</p>
										<Button className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-7 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
											<NavLink to={"/bikes"}>Discover Now</NavLink>
										</Button>
									</div>
									<div></div>
								</div>
							</div>
						</div>
					</CarouselItem>
				</CarouselContent>
			</Slider>
		</div>
	)
}

export default Carousel
