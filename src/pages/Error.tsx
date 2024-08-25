/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useRouteError } from "react-router-dom"
import errorAnime from "./../assets/404-page-not-found.json"
import Lottie from "lottie-react"
import { Button } from "@/components/ui/button"

const Error = () => {
	const error: any = useRouteError()
	return (
		<div>
			<div className="flex justify-center items-center h-screen">
				{error.status === 404 && (
					<div className="text-center">
						<div className="max-w-2xl">
							<Lottie animationData={errorAnime}></Lottie>
						</div>
						<Link to="/">
							<Button className="btn text-center bg-green-600 text-white hover:bg-green-500">
								Go Back Home
							</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default Error
