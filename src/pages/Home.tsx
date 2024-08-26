import Carousel from "@/components/home/Carousel"
import ChooseUs from "@/components/home/ChooseUs"
import FeaturedBikes from "@/components/home/FeaturedBikes"
import Testimonials from "@/components/home/Testimonials"

const Home = () => {
	return (
		<>
			<Carousel />
			<FeaturedBikes />
			<ChooseUs />
			<Testimonials />
		</>
	)
}

export default Home
