import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
	gameId: number;
}

const ScreenshotGrid = ({ gameId }: Props) => {
	const { data, isLoading, error } = useScreenshots(gameId);

	if (!data || isLoading) return;

	if (error) throw error;

	return (
		<SimpleGrid templateColumns={"repeat(2, 1fr)"} column={{ sm: 1, md: 2 }}>
			{data.results.map((ss) => (
				<Image key={ss.id} src={ss.image} alt="Image of Game" />
			))}
		</SimpleGrid>
	);
};

export default ScreenshotGrid;
