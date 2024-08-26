import Carousel from "@/components/home/Carousel"
import ChooseUs from "@/components/home/ChooseUs"
import Contact from "@/components/home/Contact"
import Discount from "@/components/home/Discount"
import FeaturedBikes from "@/components/home/FeaturedBikes"
import Testimonials from "@/components/home/Testimonials"

const Home = () => {
	return (
		<>
			<Carousel />
			<div data-aos="fade-up" data-aos-duration="1500">
				<FeaturedBikes />
			</div>
			<ChooseUs />
			<Testimonials />
			<Discount />
			<Contact />
		</>
	)
}

export default Home
