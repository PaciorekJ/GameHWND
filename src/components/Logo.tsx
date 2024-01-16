import { HStack, Image, Text } from "@chakra-ui/react";

import logo from "../assets/logo.svg";

const Logo = () => {
	return (
		<HStack marginLeft={3}>
			<Image margin={4} boxSize="75px" src={logo} alt="Company Logo" />
			<Text textAlign={"center"}></Text>
		</HStack>
	);
};

export default Logo;
