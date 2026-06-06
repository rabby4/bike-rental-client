import { currentToken, currentUser, logout, TUser } from "@/redux/features/auth/userSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { verifyToken } from "@/utils/verifyToken"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({
	children,
	role,
}: {
	children: ReactNode
	role?: string
}) => {
	const token = useAppSelector(currentToken)
	const user = useAppSelector(currentUser)
	const dispatch = useAppDispatch()

	if (!token && !user) {
		return <Navigate to={"/login"} replace={true} />
	}

	const decoded = verifyToken(token as string) as TUser

	if (decoded.exp * 1000 < Date.now()) {
		dispatch(logout())
		return <Navigate to={"/login"} replace={true} />
	}

	if (role && decoded.role !== role) {
		return <Navigate to={"/dashboard"} replace={true} />
	}

	return children
}

export default ProtectedRoute
