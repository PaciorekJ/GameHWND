import { Heading, Highlight, Stack } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput/SearchInput";

const Nav = () => {
	return (
		<Stack
			justifyContent="space-between"
			direction={"row"}
			alignItems={"center"}
			margin={4}>
			<Link to={"/"}>
				<Logo />
			</Link>
			<SearchInput />
			<ColorModeSwitch></ColorModeSwitch>
		</Stack>
	);
};

export default Nav;
