import { HStack, ResponsiveValue, Spinner } from "@chakra-ui/react";

interface Props {
	size?: ResponsiveValue<string>;
	boxSize?: ResponsiveValue<string>;
	margin?: ResponsiveValue<string>;
	isCentered?: boolean;
}

const Loader = ({
	size = "150px",
	boxSize = "150px",
	margin = "0px",
	isCentered,
}: Props) => {
	const isCenteredText = (isCentered ? "center" : "")!!;

	return (
		<HStack
			boxSize={boxSize}
			minWidth={"100%"}
			alignItems={isCenteredText}
			justifyContent={isCenteredText}>
			<Spinner margin={margin} boxSize={size}></Spinner>
		</HStack>
	);
};

export default Loader;
