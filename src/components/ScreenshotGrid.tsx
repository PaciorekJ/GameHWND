import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
	gameId: number;
}

const ScreenshotGrid = ({ gameId }: Props) => {
	const { data, isLoading, error } = useScreenshots(gameId);

	if (!data || isLoading) return null;

	if (error) throw error;

	return (
		<SimpleGrid
			spacing={1}
			margin={2}
			templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
			{data.results.map((ss) => (
				<Image key={ss.id} src={ss.image} alt="Image of Game" />
			))}
		</SimpleGrid>
	);
};

export default ScreenshotGrid;