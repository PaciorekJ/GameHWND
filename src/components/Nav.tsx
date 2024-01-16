import { Heading, Stack, Highlight } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "./Logo";

const Nav = () => {
	return (
		<Stack
			justifyContent="space-between"
			direction={"row"}
			alignItems={"center"}>
			<Logo></Logo>
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
