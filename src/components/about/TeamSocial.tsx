import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const TeamSocial = () => {
	return (
		<div>
			<div className="social-profile ">
				<ul className="flex gap-1 justify-center">
					<li>
						<a
							href="#"
							className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-accent-foreground"
						>
							<Facebook />
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-accent-foreground"
						>
							<Twitter />
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-accent-foreground"
						>
							<Instagram />
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-accent-foreground"
						>
							<Linkedin />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default TeamSocial
