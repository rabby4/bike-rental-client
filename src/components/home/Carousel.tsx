import { NavLink } from "react-router-dom"
import { Button } from "../ui/button"
import {
	Carousel as Slider,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import FilterForm from "./FilterForm"

const Carousel = () => {
	return (
		<div className="">
			<Slider
				className="w-full -z-10"
				plugins={[
					Autoplay({
						delay: 5000,
					}),
				]}
			>
				<CarouselContent>
					<CarouselItem className="-z-20">
						<div className="p-1 lg:h-[65vh] md:h-[500px] h-[300px] w-full flex items-center bg-carousel-1 bg-center bg-cover bg-no-repeat md:px-10 px-5">
							<div className="container z-10">
								<div className="grid lg:grid-cols-2">
									<div className="md:space-y-5 dark:text-black">
										<h1 className="lg:text-[85px] md:text-6xl text-3xl font-orbitron font-semibold">
											On-road. Off- road. Any road
										</h1>
										<p className="font-inter lg:text-lg md:text-base text-sm">
											It's the most advanced, best performing alloy race bike
											ever made. Fitting, since aluminum is the 13th element.
										</p>
										<Button className="bg-accent-foreground rounded-none hover:text-white lg:px-10 md:px-7 px-5 lg:py-7 py-5 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase lg:text-base md:text-xs cursor-pointer z-20">
											<NavLink to={"/bikes"}>Discover Now</NavLink>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</CarouselItem>
					<CarouselItem>
						<div className="p-1 lg:h-[65vh] md:h-[500px] h-[300px] w-full flex items-center bg-carousel-3 bg-center bg-cover bg-no-repeat md:px-10 px-5">
							<div className="container ">
								<div className="grid lg:grid-cols-2">
									<div className="md:space-y-5">
										<h1 className="lg:text-7xl text- md:text-6xl text-3xl font-orbitron font-semibold text-white">
											Better Bikes for Your Better Journey
										</h1>
										<p className="font-inter lg:text-lg md:text-base text-sm text-white">
											Don’t overthink it. Mellow to mad. Wild to mild. Whatever
											your trail riding style, Habit’s got what you need.
										</p>
										<Button className="bg-accent-foreground rounded-none hover:text-white lg:px-10 md:px-7 px-5 lg:py-7 py-5 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase lg:text-base md:text-xs">
											<NavLink to={"/bikes"}>Discover Now</NavLink>
										</Button>
									</div>
									<div></div>
								</div>
							</div>
						</div>
					</CarouselItem>
					<CarouselItem>
						<div className="p-1 lg:h-[65vh] md:h-[500px] h-[300px] w-full flex items-center bg-carousel-2 bg-center bg-cover bg-no-repeat md:px-10 px-5">
							<div className="container ">
								<div className="grid lg:grid-cols-2">
									<div className="md:space-y-5 dark:text-black">
										<h1 className="lg:text-[85px] md:text-6xl text-3xl font-orbitron font-semibold">
											Break free from the same roads
										</h1>
										<p className="font-inter lg:text-lg md:text-base text-sm">
											Don’t overthink it. Mellow to mad. Wild to mild. Whatever
											your trail riding style, Habit’s got what you need.
										</p>
										<Button className="bg-accent-foreground rounded-none hover:text-white lg:px-10 md:px-7 px-5 lg:py-7 py-5 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase lg:text-base md:text-xs">
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
			<div className="lg:max-w-5xl mx-auto lg:-mt-14 md:-mt-18 z-20">
				<FilterForm />
			</div>
		</div>
	)
}

export default Carousel
