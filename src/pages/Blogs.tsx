import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { NavLink } from "react-router-dom"

const Blogs = () => {
	return (
		<div>
			<div className="bg-about-us bg-bottom h-64 flex justify-center items-center">
				<h1 className="text-5xl font-orbitron font-bold dark:text-black">
					Blogs
				</h1>
			</div>
			<div className="container my-28">
				<div className="grid grid-cols-3 gap-10">
					<Card className="action-hover overflow-hidden rounded-none ">
						<CardHeader className="p-0 relative ">
							<img
								src={
									"https://probike.templaza.net/wp-content/uploads/2023/07/paul-green-gOHfFgwyDNM-unsplash.jpg"
								}
								alt=""
							/>
						</CardHeader>
						<CardContent className="space-y-2 pt-2 z-10 relative bg-white dark:bg-[#020817]">
							<p className=" text-gray-400 font-inter font-light text-sm italic tracking-wider">
								By: Nick Clark
							</p>
							<CardTitle className="lg:text-2xl md:text-xl text-xl font-orbitron tracking-wider font-bold">
								18 things you didn’t know about Neilson Powless
							</CardTitle>
							<hr />
							<CardDescription>
								<div className="">
									Most people are aware of roughly how many calories adult
									humans should consume, but protein can sometimes be overlooked
									or a confusing subject, with there being so much differing
									advice out there.
								</div>
							</CardDescription>
							<CardFooter className="p-0">
								<Button className="w-full bg-accent-foreground hover:text-white md:px-10 md:py-6 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase dark:hover:text-black">
									<NavLink to={`/`}>View Details</NavLink>
								</Button>
							</CardFooter>
						</CardContent>
					</Card>
					<Card className="action-hover overflow-hidden rounded-none ">
						<CardHeader className="p-0 relative ">
							<img
								src={
									"https://probike.templaza.net/wp-content/uploads/2023/07/paul-green-gOHfFgwyDNM-unsplash.jpg"
								}
								alt=""
							/>
						</CardHeader>
						<CardContent className="space-y-2 pt-2 z-10 relative bg-white dark:bg-[#020817]">
							<p className=" text-gray-400 font-inter font-light text-sm italic tracking-wider">
								By: Nick Clark
							</p>
							<CardTitle className="lg:text-2xl md:text-xl text-xl font-orbitron tracking-wider font-bold">
								18 things you didn’t know about Neilson Powless
							</CardTitle>
							<hr />
							<CardDescription>
								<div className="">
									Most people are aware of roughly how many calories adult
									humans should consume, but protein can sometimes be overlooked
									or a confusing subject, with there being so much differing
									advice out there.
								</div>
							</CardDescription>
							<CardFooter className="p-0">
								<Button className="w-full bg-accent-foreground hover:text-white md:px-10 md:py-6 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase dark:hover:text-black">
									<NavLink to={`/`}>View Details</NavLink>
								</Button>
							</CardFooter>
						</CardContent>
					</Card>
					<Card className="action-hover overflow-hidden rounded-none ">
						<CardHeader className="p-0 relative ">
							<img
								src={
									"https://probike.templaza.net/wp-content/uploads/2023/07/paul-green-gOHfFgwyDNM-unsplash.jpg"
								}
								alt=""
							/>
						</CardHeader>
						<CardContent className="space-y-2 pt-2 z-10 relative bg-white dark:bg-[#020817]">
							<p className=" text-gray-400 font-inter font-light text-sm italic tracking-wider">
								By: Nick Clark
							</p>
							<CardTitle className="lg:text-2xl md:text-xl text-xl font-orbitron tracking-wider font-bold">
								18 things you didn’t know about Neilson Powless
							</CardTitle>
							<hr />
							<CardDescription>
								<div className="">
									Most people are aware of roughly how many calories adult
									humans should consume, but protein can sometimes be overlooked
									or a confusing subject, with there being so much differing
									advice out there.
								</div>
							</CardDescription>
							<CardFooter className="p-0">
								<Button className="w-full bg-accent-foreground hover:text-white md:px-10 md:py-6 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase dark:hover:text-black">
									<NavLink to={`/`}>View Details</NavLink>
								</Button>
							</CardFooter>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Blogs
