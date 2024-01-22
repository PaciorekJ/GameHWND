import { Image } from "@chakra-ui/react";

import logo from "../assets/logo.svg";

const Logo = () => {
	return (
		<Image
			boxSize={{ base: "20px", md: "40px", lg: "60px" }}
			objectFit={"cover"}
			src={logo}
			alt="Company Logo"
		/>
	);
};

export default Logo;
