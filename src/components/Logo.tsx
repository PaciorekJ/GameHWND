import { HStack, Image, Text } from "@chakra-ui/react";

import logo from "../assets/logo.svg";

const Logo = () => {
	return (
		<HStack>
			<Image boxSize="50px" src={logo} alt="Company Logo" />
			<Text textAlign={"center"}></Text>
		</HStack>
	);
};

export default Logo;
