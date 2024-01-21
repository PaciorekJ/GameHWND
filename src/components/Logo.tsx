import { Image } from "@chakra-ui/react";

import logo from "../assets/logo.svg";

const Logo = () => {
	return (
		<Image boxSize={"60px"} objectFit={"cover"} src={logo} alt="Company Logo" />
	);
};

export default Logo;
