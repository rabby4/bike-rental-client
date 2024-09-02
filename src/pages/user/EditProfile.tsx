import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import authApi from "@/redux/features/auth/authApi"
import { useAppSelector } from "@/redux/hook"
import { Camera } from "lucide-react"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const EditProfile = () => {
	const token = useAppSelector((state) => state.user.token)
	const { data: userData } = authApi.useGetMeQuery(token)
	const [updateMe] = authApi.useUpdateMeMutation()
	const user = userData?.data
	const navigate = useNavigate()
	const { control, handleSubmit } = useForm({
		defaultValues: {
			firstName: user?.firstName,
			lastName: user?.lastName,
			email: user?.email,
			phone: user?.phone,
			address: user?.address,
			image: user?.image,
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const toastId = toast.loading("Singing in...")
		const userInfo = {
			data,
			token,
		}
		try {
			const res = await updateMe(userInfo).unwrap()
			toast.success(res.message, { id: toastId })
			navigate("/dashboard/my-profile")
		} catch (error) {
			toast.error("Profile Update Process Failed...", { id: toastId })
		}
	}
	return (
		<div className="pb-28 grid grid-cols-1 items-center">
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
				<div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5 -mt-24">
					<div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
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
					</div>
				</div>
			</div>
			<Card className="mx-auto w-1/2">
				<CardHeader>
					<CardTitle className="text-2xl font-orbitron tracking-wider">
						Edit Profile
					</CardTitle>
				</CardHeader>
				<CardContent className="font-inter">
					<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
						<div className="grid grid-cols-2 gap-2">
							<div className="grid gap-2">
								<Label htmlFor="firstName">First Name</Label>
								<Controller
									name="firstName"
									control={control}
									defaultValue={user?.firstName}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="firstName"
												type="text"
												placeholder={user?.firstName}
											/>
										</>
									)}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="lastName">Last Name</Label>
								<Controller
									name="lastName"
									control={control}
									defaultValue={user?.lastName}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="lastName"
												type="text"
												placeholder={user?.lastName}
											/>
										</>
									)}
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<div className="grid gap-2">
								<Label htmlFor="phone">Phone Number</Label>
								<Controller
									name="phone"
									control={control}
									defaultValue={user?.phone}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="phone"
												type="text"
												placeholder={user?.phone}
											/>
										</>
									)}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="address">Address</Label>
								<Controller
									name="address"
									control={control}
									defaultValue={user?.address}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="address"
												type="text"
												placeholder={user?.address}
											/>
										</>
									)}
								/>
							</div>
						</div>
						<div className="grid gap-2">
							<Label>Profile Picture</Label>
							<Controller
								name="image"
								control={control}
								defaultValue={user?.image}
								render={({ field }) => (
									<>
										<Input {...field} type="text" placeholder={user?.image} />
									</>
								)}
							/>
						</div>
						<Button
							type="submit"
							className="w-full font-orbitron tracking-wider"
						>
							Update Profile
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default EditProfile
