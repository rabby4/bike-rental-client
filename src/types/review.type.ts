import { TUser } from "./user.type"

export type TReview = {
	_id: string
	userId: TUser
	bikeId: string
	rating: number
	comment: string
	createdAt: string
	updatedAt: string
	__v: number
}
