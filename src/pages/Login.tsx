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
import { ReactNode, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
	useForm,
	SubmitHandler,
	FieldValues,
	Controller,
} from "react-hook-form"
import authApi from "@/redux/features/auth/authApi"
import { toast } from "sonner"
import { verifyToken } from "@/utils/verifyToken"
import { useAppDispatch } from "@/redux/hook"
import { setUser } from "@/redux/features/auth/userSlice"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query" // Import types
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/schemas/userSchema"

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [login] = authApi.useLoginUserMutation()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	})
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	// 	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
	// 		const toastId = toast.loading("Logging in...")
	// 		try {
	// 			const res = await login(data)
	// 			console.log(res)
	// 			if (res?.data) {
	// 				toast.success(res.data.message, { id: toastId })
	// 			} else {
	// 				return toast.error("Credentials no match", { id: toastId })
	// 			}
	//
	// 			const user = verifyToken(res.data.token)
	// 			dispatch(setUser({ user: user, token: res.data.token }))
	//
	// 			navigate("/dashboard")
	// 		} catch (error) {
	// 			toast.error("Login Failed...", { id: toastId })
	// 		}
	// 	}
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const toastId = toast.loading("Logging in...")
		try {
			const res = await login(data)

			if (res?.error) {
				if (res.error && "data" in res.error) {
					const error = res.error as FetchBaseQueryError
					if (
						error.data &&
						typeof error.data === "object" &&
						"message" in error.data
					) {
						return toast.error(error.data.message as ReactNode, { id: toastId })
					}
				}
				return toast.error("An unknown error occurred.", { id: toastId })
			}

			toast.success(res.data.message, { id: toastId })

			const user = verifyToken(res.data.token)
			dispatch(setUser({ user: user, token: res.data.token }))

			navigate("/dashboard")
		} catch (error) {
			toast.error("An unexpected error occurred...", { id: toastId })
		}
	}

	return (
		<div className="min-h-[calc(100vh-90px)] grid grid-cols-1 items-center">
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl font-orbitron tracking-wider">
						Sign In
					</CardTitle>
					<CardDescription className="font-inter">
						Enter your email and password below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
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
											placeholder="example@gmail.com"
											type="email"
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
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
								<Link
									to="#"
									className="ml-auto inline-block text-sm underline hover:text-accent-foreground duration-300"
								>
									Forgot your password?
								</Link>
							</div>
							<Controller
								name="password"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<>
										<Input
											{...field}
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
							Sign In
						</Button>
					</form>
					{/* <div className="grid grid-cols-2 gap-2 font-inter mt-2">
						<Button variant="outline" className="w-full gap-2">
							Login with Google
						</Button>
						<Button variant="outline" className="w-full gap-2">
							Login with Github
						</Button>
					</div> */}
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?
						<Link
							to="/registration"
							className="underline hover:text-accent-foreground duration-300"
						>
							Sign up
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default Login
