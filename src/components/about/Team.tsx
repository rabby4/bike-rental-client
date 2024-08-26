import TeamSocial from "./TeamSocial"

const Team = () => {
	return (
		<div className="container my-28">
			<div className="">
				<div className="md:w-2/4 mx-auto text-center space-y-3">
					<h1 className="text-4xl font-orbitron font-bold">Our Team Members</h1>
					<p className="italic font-inter">
						Meet our lovely team member and get support from these persons
					</p>
				</div>
				<div className="grid md:grid-cols-4 grid-cols-2 lg:gap-7 gap-3 mt-10">
					<div className="flex gap-4 mt-5 justify-center flex-col text-center">
						<div className="member-img relative cursor-pointer">
							<img
								src="https://probike.templaza.net/wp-content/uploads/2023/08/Our-Team-2.jpg"
								alt=""
							/>
							<TeamSocial />
						</div>
						<div className="-mt-1 text-left">
							<p className="italic font-inter text-accent-foreground">
								Marketing Manager
							</p>
							<h3 className="lg:text-2xl md:text-lg text-base lg:font-bold font-medium font-orbitron">
								Frank Gordon
							</h3>
						</div>
					</div>
					<div className="flex gap-4 mt-5 justify-center flex-col text-center">
						<div className="member-img relative cursor-pointer">
							<img
								src="https://probike.templaza.net/wp-content/uploads/2023/08/Our-Team-5.jpg"
								alt=""
							/>
							<TeamSocial />
						</div>
						<div className="-mt-1 text-left">
							<p className="italic font-inter text-accent-foreground">
								Sale Manager
							</p>
							<h3 className="lg:text-2xl md:text-lg text-base lg:font-bold font-medium font-orbitron">
								Pepper Harlton
							</h3>
						</div>
					</div>
					<div className="flex gap-4 mt-5 justify-center flex-col text-center">
						<div className="member-img relative cursor-pointer">
							<img
								src="https://probike.templaza.net/wp-content/uploads/2023/08/Our-Team-3.jpg"
								alt=""
							/>
							<TeamSocial />
						</div>
						<div className="-mt-1 text-left">
							<p className="italic font-inter text-accent-foreground">
								Mechanic
							</p>
							<h3 className="lg:text-2xl md:text-lg text-base lg:font-bold font-medium font-orbitron">
								Daniel Lond
							</h3>
						</div>
					</div>
					<div className="flex gap-4 mt-5 justify-center flex-col text-center">
						<div className="member-img relative cursor-pointer">
							<img
								src="https://probike.templaza.net/wp-content/uploads/2023/08/Our-Team-6.jpg"
								alt=""
							/>
							<TeamSocial />
						</div>
						<div className="-mt-1 text-left">
							<p className="italic font-inter text-accent-foreground">
								Volunteer
							</p>
							<h3 className="lg:text-2xl md:text-lg text-base lg:font-bold font-medium font-orbitron">
								Victoria Jordan
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Team
