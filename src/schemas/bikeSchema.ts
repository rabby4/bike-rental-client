import { z } from "zod"

export const createBikeSchema = z.object({
	name: z.string({ required_error: "Bike Name is required" }),
	description: z.string({ required_error: "Description is required" }),
	pricePerHour: z.string({ required_error: "Price is required" }),
	cc: z.string({ required_error: "Bike CC is required" }),
	year: z.string({ required_error: "Release Year is required" }),
	model: z.string({ required_error: "Bike model is required" }),
	brand: z.string({ required_error: "Bike brand is required" }),
	category: z.string({ required_error: "Bike category is required" }),
	color: z.string({ required_error: "Bike color is required" }),
	frame: z.string({ required_error: "Bike frame size is required" }),
	image: z.string({ required_error: "Bike image is required" }),
	support: z.string({ required_error: "Bike maximum support is required" }),
	weight: z.string({ required_error: "Bike weight is required" }),
})
