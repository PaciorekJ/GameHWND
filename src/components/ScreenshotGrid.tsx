import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import Loader from "./Loader";

interface Props {
	gameId: number;
}

const ScreenshotGrid = ({ gameId }: Props) => {
	const { data, isLoading, error } = useScreenshots(gameId);

	if (!isLoading && !data) return null;

	if (isLoading && !data)
		return (
			<Box paddingTop={"100px"}>
				<Loader isCentered={true} />
			</Box>
		);

	if (error) throw error;

	return (
		<SimpleGrid
			templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
			spacing={1}>
			{data.results.map((ss) => (
				<Image key={ss.id} src={ss.image} alt="Image of Game" />
			))}
		</SimpleGrid>
	);
};

export default ScreenshotGrid;
