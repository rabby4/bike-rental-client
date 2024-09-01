import { Mail, MapPin, PhoneCall } from "lucide-react"
import { Button } from "../ui/button"

const AboutUs = () => {
	return (
		<div>
			<div className="bg-about-us bg-bottom h-64 flex justify-center items-center">
				<h1 className="text-5xl font-orbitron font-bold dark:text-black">
					About Us
				</h1>
			</div>
			<div className="container ">
				<div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-20 my-28">
					<div>
						<img
							src="https://probike.templaza.net/wp-content/uploads/elementor/thumbs/About-Us-2-qn7jrjyljgrpb5ikjbr4z61udwuzeua3tzdw3uv7mg.jpg"
							alt=""
							className="size-11/12"
						/>
					</div>
					<div className="space-y-5">
						<h2 className="text-4xl font-semibold font-orbitron tracking-wider">
							Bicycles are our works, but also our passion
						</h2>
						<p className="font-inter">
							Each of us has our own challenges, goals and reasons to ride. At
							Probike, our purpose is to help you unleash your full potential no
							matter the chosen path. We do this with our products, our people
							and the stories we share. Come feel what it’s like to be
							limitless. Come ride with us. We will bring you the greatest
							feeling.
						</p>
						<p className="font-inter">
							Probike is the world’s leading brand of high-quality bicycles and
							cycling gear. Part of the Probike Group, which was founded in
							1972, the brand combines craftsmanship, technology and innovative
							design.
						</p>
						<Button className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-7 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
							Discover Now
						</Button>
					</div>
				</div>
				<div className="grid md:grid-cols-3 grid-cols-1 mt-20 justify-between border border-gray-200 md:py-5 p-10 rounded-md">
					<div className="flex gap-4 mt-5 md:justify-center">
						<MapPin size={30} className="text-accent-foreground" />
						<div className="-mt-1">
							<h3 className="text-lg font-bold font-orbitron">Address:</h3>
							<p className="italic font-inter">Mirpur, Dhaka, Bangladesh</p>
						</div>
					</div>
					<div className="flex gap-4 mt-5 md:justify-center">
						<PhoneCall size={30} className="text-accent-foreground" />
						<div className="-mt-1">
							<h3 className="text-lg font-bold font-orbitron">Phone:</h3>
							<p className="italic font-inter">+880123456789</p>
						</div>
					</div>
					<div className="flex gap-4 mt-5 md:justify-center">
						<Mail size={30} className="text-accent-foreground" />
						<div className="-mt-1">
							<h3 className="text-lg font-bold font-orbitron">Email:</h3>
							<p className="italic font-inter">help@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
