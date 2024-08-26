import Carousel from "@/components/home/Carousel"
import ChooseUs from "@/components/home/ChooseUs"
import Contact from "@/components/home/Contact"
import FeaturedBikes from "@/components/home/FeaturedBikes"
import Testimonials from "@/components/home/Testimonials"

const Home = () => {
	return (
		<>
			<Carousel />
			<FeaturedBikes />
			<ChooseUs />
			<Testimonials />
			<Contact />
		</>
	)
}

export default Home
