import { currentToken } from "@/redux/features/auth/userSlice"
import { useAppSelector } from "@/redux/hook"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const token = useAppSelector(currentToken)

	if (!token) {
		return <Navigate to={"/login"} replace={true} />
	}

	return children
}

export default ProtectedRoute
