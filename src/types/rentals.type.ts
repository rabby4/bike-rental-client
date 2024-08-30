import { TBike } from "./bikes.type"

export type TRental = {
	_id: string
	userId: string
	bikeId: TBike
	startTime: string
	returnTime: string
	totalCost: number
	isReturned: boolean
	advancePay: number
	fullPay: boolean
	__v: number
}
