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
import { TUser } from "@/types/user.type"
import { MoreHorizontal } from "lucide-react"

const UserManagement = () => {
	const { data: userData, isLoading } = authApi.useGetAllUsersQuery(undefined)
	const users = userData?.data

	console.log(users)

	if (isLoading) {
		return <p>loading...</p>
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
							{users.map((user: TUser) => (
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
									<TableCell className="capitalize">{user.email}</TableCell>
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
												<DropdownMenuItem>Edit</DropdownMenuItem>
												<DropdownMenuItem>Delete</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
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
