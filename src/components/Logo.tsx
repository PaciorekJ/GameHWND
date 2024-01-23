import { Image } from "@chakra-ui/react";

import logo from "../assets/logo.svg";

const Logo = () => {
	return (
		<Image
			boxSize={"60px"}
			objectFit={"fill"}
			src={logo}
			alt="Company Logo"
		/>
	);
};

export default Logo;
