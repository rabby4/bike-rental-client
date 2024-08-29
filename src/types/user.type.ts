export type TUser = {
	_id: string
	firstName: string
	lastName: string
	email: string
	phone: string
	address: string
	role: string
	image: string
	createdAt: string
	updatedAt: string
	__v: number
}
export type JwtPayload = {
	role: string
}
