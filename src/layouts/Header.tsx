import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
	CreditCard,
	Heart,
	LayoutDashboard,
	LifeBuoy,
	LogOut,
	Menu,
	Search,
	Settings,
	User,
} from "lucide-react"
import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<>
			<div className="py-4">
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
								src="https://i.ibb.co/WPy59Zn/logo.png"
								alt="logo"
								className="w-32"
							/>
						</NavLink>
					</div>
					<div className="flex-1 flex justify-end order-3 md:order-2 ">
						<NavigationMenu>
							<NavigationMenuList className="font-ralway">
								<NavigationMenuItem>
									<NavLink to={"/"} className={navigationMenuTriggerStyle()}>
										<Search />
									</NavLink>
								</NavigationMenuItem>
								<NavigationMenuItem className="relative">
									<NavLink to={"/"} className={navigationMenuTriggerStyle()}>
										<Heart />
										<span className="size-5 flex items-center justify-center rounded-full text-sm text-white bg-accent-foreground absolute right-2 -top-[2px]">
											0
										</span>
									</NavLink>
								</NavigationMenuItem>
								<NavigationMenuItem className="relative">
									{/* <NavLink
										to={"/cart"}
										className={navigationMenuTriggerStyle()}
									> */}
									<DropdownMenu>
										<DropdownMenuTrigger asChild className="cursor-pointer">
											<Avatar>
												<AvatarImage
													src="https://github.com/shadcn.png"
													alt="@shadcn"
												/>
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>
										</DropdownMenuTrigger>
										<DropdownMenuContent className="w-56 transform-none">
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
												<span>Log out</span>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
									{/* <ShoppingCart /> */}
									{/* <span className="size-5 flex items-center justify-center rounded-full text-sm text-white bg-accent-foreground absolute right-2 -top-[2px]">
										<p>0</p>
									</span> */}
									{/* </NavLink> */}
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
			</div>
		</>
	)
}
export default Header
