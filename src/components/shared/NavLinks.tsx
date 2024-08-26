import { TNavLinks } from "@/types/navlinks.type"
import { NavLink } from "react-router-dom"

const NavLinks = ({ link, label }: TNavLinks) => {
	return (
		<div>
			<NavLink
				to={link}
				className={"hover:text-white duration-300  font-semibold"}
			>
				{label}
			</NavLink>
		</div>
	)
}

export default NavLinks
