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
import { Eye, EyeOff, Github, Mail } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
	const [showPassword, setShowPassword] = useState(false)

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
					<div className="grid gap-4">
						<div className="grid grid-cols-2 gap-2">
							<div className="grid gap-2">
								<Label htmlFor="firstName">First Name</Label>
								<Input
									id="firstName"
									type="text"
									placeholder="First Name"
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="lastName">Last Name</Label>
								<Input
									id="lastName"
									type="text"
									placeholder="Last Name"
									required
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<div className="grid gap-2">
								<Label htmlFor="phone">Phone Number</Label>
								<Input
									id="phone"
									type="text"
									placeholder="Phone Number"
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="address">Address</Label>
								<Input
									id="address"
									type="text"
									placeholder="Address..."
									required
								/>
							</div>
						</div>

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
							<Label htmlFor="password">Password</Label>
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
							Sign Up
						</Button>
						<div className="grid grid-cols-2 gap-2 font-inter">
							<Button variant="outline" className="w-full gap-2">
								<Mail size={18} />
								Login with Google
							</Button>
							<Button variant="outline" className="w-full gap-2">
								<Github size={20} />
								Login with Github
							</Button>
						</div>
					</div>
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
