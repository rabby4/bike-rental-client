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
import { Link } from "react-router-dom"

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)

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
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="example@gmail.com"
								required
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
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								required
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
						<div className="grid grid-cols-2 gap-2 font-inter">
							<Button variant="outline" className="w-full gap-2">
								Login with Google
							</Button>
							<Button variant="outline" className="w-full gap-2">
								Login with Github
							</Button>
						</div>
					</div>
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
