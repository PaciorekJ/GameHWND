import { Heading, Highlight, Stack } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<Stack
			justifyContent="space-between"
			direction={"row"}
			alignItems={"center"}>
			<Link to={"/"}>
				<Logo />
			</Link>
			<Heading
				color={"gray.100"}
				style={{ textShadow: "1px 1px 2px black" }}
				padding={4}
				as={"h1"}
				size={"4xl"}
				marginTop={3}>
				<Highlight query={"Hound"} styles={{ color: "gray.300" }}>
					GameHound
				</Highlight>
			</Heading>
			<ColorModeSwitch></ColorModeSwitch>
		</Stack>
	);
};

export default Nav;
