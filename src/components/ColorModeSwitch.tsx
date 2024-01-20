import { Icon, useColorMode } from "@chakra-ui/react";

import { IoMoon, IoMoonOutline } from "react-icons/io5";

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const icon = colorMode === "dark" ? IoMoon : IoMoonOutline;

	const iconProps = {
		as: icon,
		boxSize: "30px",
		onClick: toggleColorMode,
	};

	return <Icon {...iconProps} />;
};

export default ColorModeSwitch;
