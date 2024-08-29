import moment from "moment"
import { useEffect, useState } from "react"

const CurrentTime: React.FC = () => {
	const [currentTime, setCurrentTime] = useState<string>(
		moment().format("DD-MM-YYYY, h:mm:ss a")
	)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(moment().format("DD-MM-YYYY, h:mm:ss a"))
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<>
			<p>{currentTime}</p>
		</>
	)
}

export default CurrentTime
