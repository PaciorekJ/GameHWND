import { HStack, Spinner } from "@chakra-ui/react";

const GameGridSpinner = () => {
	return (
		<HStack
			boxSize={"150px"}
			minWidth={"100%"}
			alignContent={"center"}
			justifyContent={"center"}>
			<Spinner boxSize={10}></Spinner>
		</HStack>
	);
};

export default GameGridSpinner;
