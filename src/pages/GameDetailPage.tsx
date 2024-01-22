import useGameInfo from "../hooks/useGameInfo";
import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer/GameTrailer";
import ScreenshotGrid from "../components/ScreenshotGrid";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGameInfo(slug!);

	if (isLoading) {
		return <Spinner id={"1"} />;
	}

	if (error) throw error;

	if (!game)
		return (
			<>
				<Heading as={"h1"} pb={4}>
					No Game
				</Heading>
				<ExpandableText maxChar={300}> No Description Found</ExpandableText>
			</>
		);

	return (
		<SimpleGrid
			templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
			<GridItem>
				<Heading as={"h1"} pb={4}>
					{game.name}
				</Heading>
				<ExpandableText maxChar={300}>{game.description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</GridItem>
			<GridItem>
				<GameTrailer gameId={game.id} />
				<ScreenshotGrid gameId={game.id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
