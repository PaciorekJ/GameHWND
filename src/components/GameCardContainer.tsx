import { Box, theme } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			_hover={{
				transform: "scale(1.01)",
				transition: "transform .15s ease-in",
			}}
			borderRadius={"10px"}
			border={"2px double" + theme.colors.gray[600]}
			overflow={"hidden"}>
			{children}
		</Box>
	);
};

export default GameCardContainer;
