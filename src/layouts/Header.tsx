import { ModeToggle } from "@/components/theme/mode-toggle"
import { useTheme } from "@/components/theme/theme-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import authApi from "@/redux/features/auth/authApi"
// import authApi from "@/redux/features/auth/authApi"
import {
	currentToken,
	currentUser,
	logout,
} from "@/redux/features/auth/userSlice"
import { currentCompareData } from "@/redux/features/bike/bikeSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import {
	CreditCard,
	LayoutDashboard,
	LifeBuoy,
	LogOut,
	Menu,
	Repeat,
	Search,
	Settings,
	User,
} from "lucide-react"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Header = () => {
	const { theme } = useTheme()
	const dispatch = useAppDispatch()
	const token = useAppSelector(currentToken)
	const bikes = useAppSelector(currentCompareData)
	const user = useAppSelector(currentUser)
	const { data } = authApi.useGetMeQuery(token)
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	const [searchTerm, setSearchTerm] = useState("")

	const handleSearch = () => {
		if (searchTerm.trim()) {
			navigate(`/bikes?searchTerm=${encodeURIComponent(searchTerm)}`)
			setIsOpen(false)
		}
	}

	const userImage = data?.data?.image

	const handleLogout = async () => {
		try {
			dispatch(logout())
			toast.success("User logged out successfully!")
			navigate("/")
		} catch (error) {
			toast.error("Something went wrong!")
		}
	}

	return (
		<>
			<div className="py-4 shadow-xl sticky top-0 z-50 bg-white">
				<div className="w-full container grid lg:grid-cols-3 grid-cols-2 justify-between items-center align-middle xl:px-0 md:px-10 px-5">
					<div className="flex-1 flex lg:justify-center md:justify-center justify-start lg:order-2 order-3 lg:col-span-1 sm:col-span-2 md:bg-[#f5f5f5] lg:bg-transparent py-2">
						<div className="md:block hidden">
							<NavigationMenu>
								<NavigationMenuList className="font-inter">
									<NavigationMenuItem>
										<NavLink to={"/"} className={navigationMenuTriggerStyle()}>
											Home
										</NavLink>
									</NavigationMenuItem>

									<NavigationMenuItem>
										<NavLink
											to={"/bikes"}
											className={navigationMenuTriggerStyle()}
										>
											Bikes
										</NavLink>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavLink
											to={"/blogs"}
											className={navigationMenuTriggerStyle()}
										>
											Blogs
										</NavLink>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavLink
											to={"/about-us"}
											className={navigationMenuTriggerStyle()}
										>
											About Us
										</NavLink>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavLink
											to={"/contact-us"}
											className={navigationMenuTriggerStyle()}
										>
											Contact Us
										</NavLink>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>
						<div className="md:hidden visible">
							<Drawer direction="left">
								<DrawerTrigger>
									<Menu />
								</DrawerTrigger>
								<DrawerContent>
									<NavigationMenu>
										<NavigationMenuList className="font-inter flex-col text-left">
											<NavigationMenuItem>
												<NavLink
													to={"/"}
													className={navigationMenuTriggerStyle()}
												>
													<img
														src="https://i.ibb.co/WPy59Zn/logo.png"
														alt="logo"
														className="w-24"
													/>
												</NavLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavLink
													to={"/"}
													className={navigationMenuTriggerStyle()}
												>
													Home
												</NavLink>
											</NavigationMenuItem>

											<NavigationMenuItem>
												<NavLink
													to={"/bikes"}
													className={navigationMenuTriggerStyle()}
												>
													Bikes
												</NavLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavLink
													to={"/blogs"}
													className={navigationMenuTriggerStyle()}
												>
													Blogs
												</NavLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavLink
													to={"/about-us"}
													className={navigationMenuTriggerStyle()}
												>
													About Us
												</NavLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavLink
													to={"/contact-us"}
													className={navigationMenuTriggerStyle()}
												>
													Contact Us
												</NavLink>
											</NavigationMenuItem>
										</NavigationMenuList>
									</NavigationMenu>
									{/* <DrawerFooter>
										<div>
											<Heart />
										</div>
									</DrawerFooter> */}
								</DrawerContent>
							</Drawer>
						</div>
					</div>
					<div className=" flex-1 flex lg:justify-start md:justify-start justify-center col-span-2 md:col-span-1 lg:order-1 order-1 lg:mb-0 mb-3">
						<NavLink to={"/"}>
							<img
								src={
									theme === "light"
										? "https://i.ibb.co/WPy59Zn/logo.png"
										: "https://i.ibb.co/w7N05NV/White-Logo.png"
								}
								alt="logo"
								className="w-32"
							/>
						</NavLink>
					</div>
					<div className="flex-1 flex justify-end order-3 md:order-2 ">
						<NavigationMenu>
							<NavigationMenuList className="font-ralway">
								<NavigationMenuItem>
									<Dialog open={isOpen} onOpenChange={setIsOpen}>
										<DialogTrigger asChild>
											<Button variant="link">
												<Search />
											</Button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[425px]">
											<DialogHeader>
												<DialogTitle className="font-orbitron text-xl">
													Search Bike
												</DialogTitle>
												<DialogDescription>
													Search your favorite bike and enjoy your ride.
												</DialogDescription>
											</DialogHeader>
											<div className="grid gap-4 py-4">
												<div className="">
													<Input
														id="name"
														placeholder="Search bike..."
														className=""
														value={searchTerm}
														onChange={(e) => setSearchTerm(e.target.value)}
													/>
												</div>
											</div>
											<DialogFooter>
												<Button
													className="bg-accent-foreground w-full font-orbitron tracking-wider px-10"
													onClick={handleSearch}
												>
													Search
												</Button>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								</NavigationMenuItem>
								<NavigationMenuItem className="relative">
									<NavLink
										to={"/compare"}
										className={navigationMenuTriggerStyle()}
									>
										<Repeat />
										<span className="size-5 flex items-center justify-center rounded-full text-sm text-white bg-accent-foreground absolute right-2 -top-[2px]">
											{bikes.length}
										</span>
									</NavLink>
								</NavigationMenuItem>
								<NavigationMenuItem className="relative">
									<ModeToggle />
								</NavigationMenuItem>

								{user ? (
									<NavigationMenuItem className="relative">
										<DropdownMenu>
											<DropdownMenuTrigger asChild className="cursor-pointer">
												<Avatar>
													<AvatarImage
														src={
															user
																? userImage
																: "https://i.ibb.co/H7zTvh7/user.png"
														}
														alt="user profile"
													/>
													<AvatarFallback>CN</AvatarFallback>
												</Avatar>
											</DropdownMenuTrigger>
											<DropdownMenuContent
												align="end"
												className="w-56 transform-none"
											>
												<DropdownMenuLabel>My Account</DropdownMenuLabel>
												<DropdownMenuSeparator />
												<DropdownMenuGroup>
													<DropdownMenuItem>
														<LayoutDashboard className="mr-2 h-4 w-4" />
														<NavLink to={"/dashboard"}>Dashboard</NavLink>
													</DropdownMenuItem>
													<DropdownMenuItem>
														<User className="mr-2 h-4 w-4" />
														<NavLink to={"/dashboard/my-profile"}>
															Profile
														</NavLink>
													</DropdownMenuItem>
													<DropdownMenuItem>
														<CreditCard className="mr-2 h-4 w-4" />
														<span>Billing</span>
													</DropdownMenuItem>
													<DropdownMenuItem>
														<Settings className="mr-2 h-4 w-4" />
														<span>Settings</span>
													</DropdownMenuItem>
												</DropdownMenuGroup>
												<DropdownMenuSeparator />

												<DropdownMenuItem>
													<LifeBuoy className="mr-2 h-4 w-4" />
													<span>Support</span>
												</DropdownMenuItem>

												<DropdownMenuSeparator />
												<DropdownMenuItem>
													<LogOut className="mr-2 h-4 w-4" />
													<Button
														onClick={handleLogout}
														className="bg-transparent p-0 hover:bg-transparent text-black hover:text-accent-foreground dark:text-white"
													>
														Log out
													</Button>
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</NavigationMenuItem>
								) : (
									<NavLink to={"/login"}>
										<Button
											type="submit"
											className="bg-accent-foreground w-full font-orbitron tracking-wider px-10"
										>
											LogIn
										</Button>
									</NavLink>
								)}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
			</div>
		</>
	)
}
export default Header
