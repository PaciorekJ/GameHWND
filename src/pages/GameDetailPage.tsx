import useGameInfo from "../hooks/useGameInfo";
import { Link, useParams } from "react-router-dom";
import {
	GridItem,
	Heading,
	SimpleGrid,
	Skeleton,
	SkeletonText,
	Image,
	Button,
	Box,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import ScreenshotGrid from "../components/ScreenshotGrid";
import Game from "../interfaces/Game";
import GameStores from "../components/GameStores";

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
			className="details">
			<GridItem>
				<Heading fontSize={"4xl"} as={"h1"} pb={2}>
					<Skeleton isLoaded={!isLoading}>{game.name}</Skeleton>
				</Heading>
				<Skeleton isLoaded={!!game.background_image}>
					<Image className="game-cover" src={game.background_image} />
				</Skeleton>
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
			<GridItem
				gap={4}
				display={"flex"}
				flexDir={"column"}
				alignItems={"center"}>
				<Box>
					<GameTrailer gameId={game.id} />
					<ScreenshotGrid gameId={game.id} />
				</Box>
				<GameStores gameId={game.id} />
				{game.website && (
					<Link to={game.website}>
						<Button
							size={{ base: "sm", sm: "xl" }}
							fontSize={{ base: "xs", sm: "xl" }}
							marginY={4}
							padding={4}
							border="4px double"
							fontWeight={900}
							borderColor="gray.500">
							Learn More About {game.name}
						</Button>
					</Link>
				)}
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
