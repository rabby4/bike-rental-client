import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

const Journey = () => {
	return (
		<div className="container mx-auto">
			<Tabs defaultValue="beginning" className="flex flex-col items-center">
				<TabsList className="w-full" aria-orientation="vertical">
					<TabsTrigger
						value="beginning"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						<strong className="text-accent-foreground">2020: </strong>The
						Beginning
					</TabsTrigger>
					<TabsTrigger
						value="fleet"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						<strong className="text-accent-foreground">2021: </strong> Expanding
						Our Fleet
					</TabsTrigger>
					<TabsTrigger
						value="location"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						<strong className="text-accent-foreground">2022: </strong> Opening
						New Locations
					</TabsTrigger>
					<TabsTrigger
						value="eBike"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						<strong className="text-accent-foreground">2023: </strong>
						Introducing E-Bikes
					</TabsTrigger>
					<TabsTrigger
						value="leading"
						className="h-full flex-1 text-sm font-orbitron tracking-wider"
					>
						<strong className="text-accent-foreground">2024: </strong> Leading
						the Way
					</TabsTrigger>
				</TabsList>
				<TabsContent value="beginning">
					<div className="grid grid-cols-2">
						<div className="flex justify-center">
							<img
								src="https://i.ibb.co/bdNyKwm/renroll-1542431160.webp"
								alt=""
								className="w-2/3"
							/>
						</div>

						<div className="space-y-3 flex flex-col justify-center">
							<h1 className="text-4xl font-orbitron font-bold">
								The Beginning
							</h1>
							<p className="italic font-inter">
								ProBike was founded by a group of passionate cyclists who wanted
								to share their love of biking with the community. We started
								with just a small fleet of bikes in a modest shop, aiming to
								provide a reliable and enjoyable bike rental experience.
							</p>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="fleet">
					<div className="grid grid-cols-2">
						<div className="flex justify-center">
							<img
								src="https://cdn3.iconfinder.com/data/icons/sports-h-s/64/14._Sailing_water_sea_yacht_racing_fleet_teams-512.png"
								alt=""
								className="w-2/4"
							/>
						</div>

						<div className="space-y-3 flex flex-col justify-center">
							<h1 className="text-4xl font-orbitron font-bold">
								Expanding Our Fleet
							</h1>
							<p className="italic font-inter">
								As the demand for our services grew, we expanded our collection
								of bikes. From mountain bikes to road bikes, we began offering a
								variety of options to cater to different cycling preferences and
								needs.
							</p>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="location">
					<div className="grid grid-cols-2">
						<div className="flex justify-center">
							<img
								src="https://cdn4.iconfinder.com/data/icons/blueline-navigation/64/map-512.png"
								alt=""
								className="w-2/4"
							/>
						</div>

						<div className="space-y-3 flex flex-col justify-center">
							<h1 className="text-4xl font-orbitron font-bold">
								Opening New Locations
							</h1>
							<p className="italic font-inter">
								To better serve our growing customer base, we opened additional
								rental locations. This expansion allowed us to reach more
								communities and make biking accessible to even more people.
							</p>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="eBike">
					<div className="grid grid-cols-2">
						<div className="flex justify-center">
							<img
								src="https://cdn0.iconfinder.com/data/icons/technology-321/512/44_Electric_Bike_E_Bike_Electric_Vehicle_Green_Energy_Renewable_Energy-512.png"
								alt=""
								className="w-2/4"
							/>
						</div>

						<div className="space-y-3 flex flex-col justify-center">
							<h1 className="text-4xl font-orbitron font-bold">
								Introducing E-Bikes and Guided Tours
							</h1>
							<p className="italic font-inter">
								ProBike introduced e-bikes to our fleet, offering a convenient
								option for those looking to explore longer distances or
								challenging terrains. We also started offering guided tours,
								giving riders the opportunity to discover scenic routes with the
								help of experienced guides.
							</p>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="leading">
					<div className="grid grid-cols-2">
						<div className="flex justify-center">
							<img
								src="https://cdn0.iconfinder.com/data/icons/meta-skills-flat-1/64/leading-winner-celebration-teamwork-success-512.png"
								alt=""
								className="w-2/4"
							/>
						</div>

						<div className="space-y-3 flex flex-col justify-center">
							<h1 className="text-4xl font-orbitron font-bold">
								Leading the Way
							</h1>
							<p className="italic font-inter">
								Today, ProBike is a leader in the bike rental industry. Our
								commitment to quality, customer satisfaction, and sustainability
								remains at the core of everything we do. We continue to innovate
								and adapt, ensuring that biking is accessible and enjoyable for
								everyone.
							</p>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default Journey
