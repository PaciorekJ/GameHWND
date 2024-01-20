import useGameInfo from "../hooks/useGameInfo";
import { useParams } from "react-router-dom";
import {
	Box,
	Grid,
	GridItem,
	Heading,
	SimpleGrid,
	Spinner,
	Stack,
	Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import MetaDataList from "../components/MetaData";
import CriticScoreBadge from "../components/CriticScoreBadge";
import MetaData from "../components/MetaData";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGameInfo(slug!);

	if (isLoading) {
		return <Spinner />;
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
		<Box padding={4}>
			<Heading as={"h1"} pb={4}>
				{game.name}
			</Heading>
			<ExpandableText maxChar={300}>{game.description_raw}</ExpandableText>
			<GameAttributes game={game}></GameAttributes>
		</Box>
	);
};

export default GameDetailPage;
