import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select"

const FilterForm = () => {
	const { control, handleSubmit } = useForm({})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Card className="rounded-none shadow-xl">
				<CardContent className="items-center p-12">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="grid grid-cols-3 justify-between items-center gap-4">
							<Controller
								name="category"
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										onValueChange={(value) => field.onChange(value)}
										// value={field.value}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select A Category" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Fruits</SelectLabel>
												<SelectItem value="eBike">E-Bike</SelectItem>
												<SelectItem value="roadBike">Road Bike</SelectItem>
												<SelectItem value="kidsBike">Kids Bike</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/>
							<Controller
								name="brand"
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										onValueChange={(value) => field.onChange(value)}
										// value={field.value}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select A Category" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Fruits</SelectLabel>
												<SelectItem value="fuji">Fuji</SelectItem>
												<SelectItem value="giant">Giant</SelectItem>
												<SelectItem value="radon">Radon</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/>
							<Button
								type="submit"
								className="bg-accent-foreground font-orbitron tracking-wider"
							>
								Search
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</>
	)
}

export default FilterForm
