import { currentToken, currentUser } from "@/redux/features/auth/userSlice"
import { useAppSelector } from "@/redux/hook"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const token = useAppSelector(currentToken)
	const user = useAppSelector(currentUser)

	if (!token && !user) {
		return <Navigate to={"/login"} replace={true} />
	}

	return children
}

export default ProtectedRoute
