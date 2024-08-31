import { TSectionTitle } from "@/types/global.type"

const SectionTitle = ({ title, description }: TSectionTitle) => {
	return (
		<div className="lg:w-1/2 md:w-2/3 mx-auto text-center space-y-3">
			<img
				src="https://i.ibb.co/vq2CpQr/renroll-1106122708.webp"
				alt=""
				className="mx-auto w-24"
			/>
			<h1 className="md:text-5xl text-3xl font-orbitron font-bold">{title}</h1>
			<p className="font-inter italic ">{description}</p>
		</div>
	)
}

export default SectionTitle
