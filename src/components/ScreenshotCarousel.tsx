import { Box, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import Loader from "./Loader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface Props {
	gameId: number;
}

const ScreenshotCarousel = ({ gameId }: Props) => {
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
		<Carousel autoPlay useKeyboardArrows infiniteLoop>
			{data.results.map((ss) => (
				<Image key={ss.id} src={ss.image} alt="Image of Game" />
			))}
		</Carousel>
	);
};

export default ScreenshotCarousel;
