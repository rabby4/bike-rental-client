import { z } from "zod"

export const userSchema = z.object({
	firstName: z.string({ required_error: "First Name is required" }),
	lastName: z.string({ required_error: "Last Name is required" }),
	email: z.string({ required_error: "Email is required" }),
	password: z.string({ required_error: "Password is required" }),
	phone: z.string({ required_error: "Phone number is required" }),
	address: z.string({ required_error: "Address is required" }),
	image: z.string(),
})

export const loginSchema = z.object({
	email: z.string({ required_error: "Email is required" }),
	password: z.string({ required_error: "Password is required" }),
})
