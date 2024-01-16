import { useColorMode, Icon } from "@chakra-ui/react";

import { IoMoon } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const icon = colorMode === "dark" ? IoMoon : IoMoonOutline;

	const iconProps = {
		as: icon,
		boxSize: "30px",
		onClick: toggleColorMode,
	};

	return <Icon margin={6} {...iconProps} />;
};

export default ColorModeSwitch;
