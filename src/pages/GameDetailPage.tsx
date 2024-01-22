import useGameInfo from "../hooks/useGameInfo";
import { useParams } from "react-router-dom";
import {
	GridItem,
	Heading,
	SimpleGrid,
	Skeleton,
	SkeletonText,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import ScreenshotGrid from "../components/ScreenshotGrid";
import Game from "../interfaces/Game";

const GameDetailPage = () => {
	const { slug } = useParams();
	let { data: game, isLoading, error } = useGameInfo(slug!);

	if (error) throw error;

	if (!isLoading && !game)
		return (
			<>
				<Heading as={"h1"} pb={4}>
					No Game
				</Heading>
				<ExpandableText maxChar={300}> No Description Found</ExpandableText>
			</>
		);

	if (!game) game = { name: "Filler for game name" } as Game;

	return (
		<SimpleGrid
			templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
			gap={6}
			margin={4}>
			<GridItem>
				<Heading as={"h1"} pb={4}>
					<Skeleton isLoaded={!isLoading}>{game.name}</Skeleton>
				</Heading>
				{(!isLoading && (
					<ExpandableText maxChar={300}>{game.description_raw}</ExpandableText>
				)) || (
					<SkeletonText
						paddingBottom={{ base: "70px" }}
						noOfLines={{ base: 6, md: 7, lg: 4 }}
						spacing="3"
						skeletonHeight="3"
					/>
				)}
				<GameAttributes game={game} isLoading={isLoading} />
			</GridItem>
			<GridItem>
				<GameTrailer gameId={game.id} />
				<ScreenshotGrid gameId={game.id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
