import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import authApi from "@/redux/features/auth/authApi"
import { currentToken } from "@/redux/features/auth/userSlice"
import { useAppSelector } from "@/redux/hook"
import { TUser } from "@/types/user.type"
import { MoreHorizontal } from "lucide-react"
import { toast } from "sonner"
import UseAnimations from "react-useanimations"
import activity from "react-useanimations/lib/activity"
import Swal from "sweetalert2"

const UserManagement = () => {
	const [updateUserToAdmin] = authApi.useUpdateUserToAdminMutation()
	const [deleteUser] = authApi.useDeleteUserMutation()

	const { data: userData, isLoading } = authApi.useGetAllUsersQuery(undefined, {
		pollingInterval: 10000,
	})
	const token = useAppSelector(currentToken)
	const users = userData?.data

	const handleUpdateUser = async (id: string) => {
		const toastId = toast.loading("Updating user...")

		const userInfo = {
			id,
			token,
		}

		try {
			const res = await updateUserToAdmin(userInfo).unwrap()
			toast.success(res.message, { id: toastId })
		} catch (error) {
			toast.error("User Update Process Failed...", { id: toastId })
		}
	}

	const handleDeleteUser = async (id: string) => {
		const userInfo = {
			id,
			token,
		}

		try {
			Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete it!",
			}).then((result) => {
				if (result.isConfirmed) {
					deleteUser(userInfo).unwrap()
					Swal.fire({
						title: "Deleted!",
						text: "User data has been deleted.",
						icon: "success",
					})
				}
			})
		} catch (error) {
			toast.error("User Delete Process Failed...")
		}
	}

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
			<Card>
				<CardHeader>
					<CardTitle className="font-orbitron tracking-wider">
						Manage User
					</CardTitle>
				</CardHeader>
				<CardContent className="font-inter">
					{users && users.length > 0 ? (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="hidden w-[100px] sm:table-cell">
										<span className="sr-only">img</span>
									</TableHead>
									<TableHead>Full Name</TableHead>
									<TableHead>Email</TableHead>
									<TableHead>Phone</TableHead>
									<TableHead>Address</TableHead>
									<TableHead className="hidden md:table-cell">Role</TableHead>
									<TableHead>
										<span>Actions</span>
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{users?.map((user: TUser) => (
									<TableRow key={user._id}>
										<TableCell className="hidden sm:table-cell">
											<img
												alt="Product img"
												className="aspect-square rounded-md object-cover"
												height="64"
												src={user.image}
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											{user.firstName} {user.lastName}
										</TableCell>
										<TableCell>{user.email}</TableCell>
										<TableCell>{user.phone}</TableCell>
										<TableCell className="capitalize">{user.address}</TableCell>
										<TableCell className="hidden md:table-cell capitalize">
											<Badge
												variant={user.role == "admin" ? "default" : "secondary"}
											>
												{user.role}
											</Badge>
										</TableCell>
										<TableCell>
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button
														aria-haspopup="true"
														size="icon"
														variant="ghost"
													>
														<MoreHorizontal className="h-4 w-4" />
														<span className="sr-only">Toggle menu</span>
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuLabel>Actions</DropdownMenuLabel>
													<DropdownMenuItem>
														<Button
															onClick={() => handleUpdateUser(user._id)}
															className="w-full bg-transparent text-black hover:bg-transparent text-base hover:text-accent-foreground"
														>
															Make Admin
														</Button>
													</DropdownMenuItem>
													<DropdownMenuItem>
														<Button
															onClick={() => handleDeleteUser(user._id)}
															className="w-full bg-transparent text-black hover:bg-transparent text-base hover:text-red-600"
														>
															Delete
														</Button>
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<>
							<div className="w-1/3 py-20 mx-auto col-span-full">
								<img
									src="https://i.ibb.co/2hx2jQf/folder.png"
									alt=""
									width={"300px"}
									className="mx-auto"
								/>
								<h2 className="text-center font-orbitron lg:text-5xl md:text-3xl text-xl font-bold">
									Users not found
								</h2>
							</div>
						</>
					)}
				</CardContent>
				<CardFooter>
					<div className="text-xs text-muted-foreground">
						Showing <strong>1-10</strong> of <strong>32</strong> products
					</div>
				</CardFooter>
			</Card>
		</div>
	)
}

export default UserManagement
