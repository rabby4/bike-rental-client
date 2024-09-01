import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import authApi from "@/redux/features/auth/authApi"
import { currentToken } from "@/redux/features/auth/userSlice"
import { useAppSelector } from "@/redux/hook"
import {
	Camera,
	Facebook,
	Instagram,
	Mail,
	MapPin,
	PhoneCall,
	SquarePen,
	Twitter,
	User,
	Youtube,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import UseAnimations from "react-useanimations"
import activity from "react-useanimations/lib/activity"

const Profile = () => {
	const token = useAppSelector(currentToken)
	const { data, isLoading } = authApi.useGetMeQuery(token, {
		pollingInterval: 10000,
	})
	const user = data?.data

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-center">
					<UseAnimations size={50} animation={activity} />
				</div>
			</div>
		)
	}

	return (
		<div>
			<div className="overflow-hidden rounded-sm bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
				<div className="relative z-20 h-48 w-full md:h-65">
					<img
						src={
							"https://probike.templaza.net/wp-content/uploads/2023/07/bg-breadcrumb.jpg"
						}
						alt="profile cover"
						className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
					/>
					<div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
						<label
							htmlFor="cover"
							className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90 xsm:px-4"
						>
							<input type="file" name="cover" id="cover" className="sr-only" />
							<span>
								<Camera />
							</span>
							<span className="font-inter">Edit</span>
						</label>
					</div>
				</div>
				<div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5 -mt-24 dark:bg-[#020817]">
					<div className="relative z-30 mx-auto -mt-22 h-30 md:w-full w-52 max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3 profile-image">
						<div className="relative drop-shadow-2">
							<img src={user?.image} alt="profile" className="rounded-full" />
							<label
								htmlFor="profile"
								className="absolute bottom-0 right-0 flex size-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
							>
								<Camera size={20} />
								<input
									type="file"
									name="profile"
									id="profile"
									className="sr-only"
								/>
							</label>
						</div>
					</div>
					<div className="mt-4 max-w-2xl mx-auto">
						<h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white font-orbitron tracking-wider">
							{user?.firstName} {user?.lastName}
						</h3>
						<p className="font-medium font-inter italic">
							<Badge className="text-sm capitalize">{user?.role}</Badge>
						</p>

						<div className="mt-10">
							<Card className="relative">
								<CardHeader className="pb-0 items-end">
									<Button className="rounded-md px-2 absolute right-0 top-0">
										<NavLink to={"/dashboard/edit-profile"}>
											<SquarePen />
										</NavLink>
									</Button>
								</CardHeader>
								<CardContent className="flex items-center justify-between p-8 font-inter">
									<div>
										<p className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green text-lg">
											<User size={20} />
											<span>{user?.firstName}</span>
											<span>{user?.lastName}</span>
										</p>
										<p className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green text-lg">
											<MapPin size={20} />
											{user?.address}
										</p>
									</div>
									<div>
										<p className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green text-lg">
											<PhoneCall size={20} />
											{user?.phone}
										</p>
										<p className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green text-lg">
											<Mail size={20} />
											{user?.email}
										</p>
									</div>
								</CardContent>
								<CardFooter className="justify-center">
									<div className="mt-6.5">
										<h4 className="mb-3.5 font-medium text-black dark:text-white text-lg font-orbitron">
											Follow me on
										</h4>
										<div className="flex items-center justify-center gap-3.5">
											<div className="flex w-full max-w-sm items-center space-x-5 mt-2 text-white">
												<Facebook className="size-6 text-accent-foreground hover:text-slate-800 duration-300 cursor-pointer" />
												<Instagram className="size-6 text-accent-foreground hover:text-slate-800 duration-300 cursor-pointer" />
												<Twitter className="size-6 text-accent-foreground hover:text-slate-800 duration-300 cursor-pointer" />
												<Youtube className="size-6 text-accent-foreground hover:text-slate-800 duration-300 cursor-pointer" />
											</div>
										</div>
									</div>
								</CardFooter>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
