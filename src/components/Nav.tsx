import { Image, Stack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput/SearchInput";

const Nav = () => {
	return (
		<Stack
			justifyContent="space-between"
			direction={"row"}
			alignItems={"center"}
			margin={4}>
			<Link to={"/"}>
				<Image
					boxSize={"60px"}
					objectFit={"fill"}
					src={logo}
					alt="Company Logo"
				/>
			</Link>
			<SearchInput />
			<ColorModeSwitch></ColorModeSwitch>
		</Stack>
	);
};

export default Nav;
