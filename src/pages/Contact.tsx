import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
	return (
		<div>
			<div className="bg-about-us bg-bottom h-64 flex justify-center items-center">
				<h1 className="text-5xl font-orbitron font-bold dark:text-black">
					Our Bikes
				</h1>
			</div>
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187878219!2d90.33728799397399!3d23.78097572837469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1720689165997!5m2!1sen!2sbd"
					width="600"
					height="450"
					style={{ border: 0, width: "100%" }}
					loading="lazy"
				></iframe>
			</div>
			<div className="bg-contact bg-cover bg-no-repeat bg-center relative">
				<div className=" bg-black absolute bg-opacity-50 inset-0 z-10"></div>
				<div className="container py-36 z-20 relative">
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-20 mt-10 lg:px-0 md:px-10 px-5">
						<div
							className="space-y-10 order-2"
							data-aos="fade-left"
							data-aos-duration="1000"
						>
							<div>
								<div className="space-y-3 md:px-0 px-5 text-white">
									<img
										src="https://i.ibb.co/vq2CpQr/renroll-1106122708.webp"
										alt=""
										className="w-24"
									/>
									<h1 className="text-4xl font-orbitron font-bold">
										Get in touch with our cycling community
									</h1>
									<p className="italic font-inter">
										Our collection of gear and apparel, developed and tested by
										some of the top teams and athletes in pro racing, continues
										to expand. Our industry-leading E-bikes are redefining
										what’s possible for cyclists of all abilities.
									</p>
								</div>
							</div>
						</div>

						<div
							className="space-y-10 order-1"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							<Card className="rounded-none">
								<CardHeader>
									<div>
										<h2 className="text-2xl font-orbitron font-medium">
											Contact Us for Any Questions
										</h2>
									</div>
								</CardHeader>
								<CardContent>
									<form className="space-y-5 font-inter">
										<div className="flex gap-5">
											<div className="grid w-full max-w-sm items-center gap-1.5">
												<Label
													htmlFor="firsName"
													className="font-normal text-lg"
												>
													First Name
												</Label>
												<Input
													type="text"
													id="firsName"
													placeholder="First Name"
												/>
											</div>
											<div className="grid w-full max-w-sm items-center gap-1.5">
												<Label
													htmlFor="lastName"
													className="font-normal text-lg"
												>
													Last Name
												</Label>
												<Input
													type="text"
													id="lastName"
													placeholder="Last Name"
												/>
											</div>
										</div>
										<div className="flex gap-5">
											<div className="grid w-full max-w-sm items-center gap-1.5">
												<Label htmlFor="phone" className="font-normal text-lg">
													Phone Number
												</Label>
												<Input
													type="phone"
													id="phone"
													placeholder="Phone Number"
												/>
											</div>
											<div className="grid w-full max-w-sm items-center gap-1.5">
												<Label htmlFor="email" className="font-normal text-lg">
													Email
												</Label>
												<Input type="email" id="email" placeholder="Email" />
											</div>
										</div>
										<div className="grid w-full gap-1.5">
											<Label htmlFor="message" className="font-normal text-lg">
												Your message
											</Label>
											<Textarea
												placeholder="Type your message here."
												id="message"
											/>
										</div>
										<div>
											<Button className="bg-accent-foreground font-orbitron tracking-wider">
												Send Message
											</Button>
										</div>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
