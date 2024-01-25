import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useScreenshots from "../hooks/useScreenshots";
import Loader from "./Loader";

import placeholder from "../assets/no-image-placeholder.webp";

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
				<div className="carousel-item">
					<Image key={ss.id} src={ss.image} alt="Image of Game" />
				</div>
			)) || <Image src={placeholder}></Image>}
		</Carousel>
	);
};

export default ScreenshotCarousel;
