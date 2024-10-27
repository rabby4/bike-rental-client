import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
	useForm,
	SubmitHandler,
	FieldValues,
	Controller,
} from "react-hook-form"
import authApi from "@/redux/features/auth/authApi"
import { toast } from "sonner"
import { userSchema } from "@/schemas/userSchema"
import { zodResolver } from "@hookform/resolvers/zod"

const Register = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [registration] = authApi.useRegistrationMutation()
	const navigate = useNavigate()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(userSchema),
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const toastId = toast.loading("Singing in...")

		const userInfo = {
			...data,
			role: "user",
		}
		try {
			const res = await registration(userInfo).unwrap()
			toast.success(res.message, { id: toastId })
			navigate("/login")
		} catch (error) {
			toast.error("Sign Up process Failed...", { id: toastId })
		}
	}

	return (
		<div className="min-h-[calc(100vh-90px)] grid grid-cols-1 items-center">
			<Card className="mx-auto w-[550px]">
				<CardHeader>
					<CardTitle className="text-2xl font-orbitron tracking-wider">
						Sign Up
					</CardTitle>
					<CardDescription className="font-inter">
						Enter your information below to create to your account!
					</CardDescription>
				</CardHeader>
				<CardContent className="font-inter">
					<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
						<div className="grid grid-cols-2 gap-2">
							<div className="grid gap-2">
								<Label htmlFor="firstName">First Name</Label>
								<Controller
									name="firstName"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="firstName"
												type="text"
												placeholder="First Name"
											/>
											{errors.firstName?.message && (
												<p className="text-red-500 text-xs">
													{errors.firstName?.message as string}
												</p>
											)}
										</>
									)}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="lastName">Last Name</Label>
								<Controller
									name="lastName"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="lastName"
												type="text"
												placeholder="Last Name"
											/>
											{errors.lastName?.message && (
												<p className="text-red-500 text-xs">
													{errors.lastName?.message as string}
												</p>
											)}
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
									rules={{ required: true }}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="phone"
												type="text"
												placeholder="Phone Number"
											/>
											{errors.phone?.message && (
												<p className="text-red-500 text-xs">
													{errors.phone?.message as string}
												</p>
											)}
										</>
									)}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="address">Address</Label>
								<Controller
									name="address"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="address"
												type="text"
												placeholder="Address"
											/>
											{errors.address?.message && (
												<p className="text-red-500 text-xs">
													{errors.address?.message as string}
												</p>
											)}
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
								render={({ field }) => (
									<>
										<Input
											{...field}
											type="text"
											placeholder="Your profile image link"
										/>
									</>
								)}
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Controller
								name="email"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<>
										<Input
											{...field}
											id="email"
											type="email"
											placeholder="example@gmail.com"
										/>
										{errors.email?.message && (
											<p className="text-red-500 text-xs">
												{errors.email?.message as string}
											</p>
										)}
									</>
								)}
							/>
						</div>
						<div className="grid gap-2 relative">
							<Label htmlFor="password">Password</Label>
							<Controller
								name="password"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<>
										<Input
											{...field}
											id="password"
											type={showPassword ? "text" : "password"}
										/>
										{errors.password?.message && (
											<p className="text-red-500 text-xs">
												{errors.password?.message as string}
											</p>
										)}
									</>
								)}
							/>
							<span
								className="cursor-pointer absolute right-3 bottom-2"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
							</span>
						</div>
						<Button
							type="submit"
							className="w-full font-orbitron tracking-wider"
						>
							Sign Up
						</Button>
					</form>

					{/* <div className="grid grid-cols-2 gap-2 font-inter mt-2">
						<Button variant="outline" className="w-full gap-2">
							<Mail size={18} />
							Login with Google
						</Button>
						<Button variant="outline" className="w-full gap-2">
							<Github size={20} />
							Login with Github
						</Button>
					</div> */}
					<div className="mt-4 text-center text-sm">
						Already have an account?
						<Link
							to="/login"
							className="underline hover:text-accent-foreground duration-300"
						>
							Sign In
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default Register
