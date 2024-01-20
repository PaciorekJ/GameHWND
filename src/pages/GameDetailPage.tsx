import useGameInfo from "../hooks/useGameInfo";
import { useParams } from "react-router-dom";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGameInfo(slug!);

	if (isLoading) {
		return <Spinner />;
	}

	if (error) throw error;

	return (
		<Box padding={4}>
			<Heading as={"h1"} pb={4}>
				{game?.name || "No Game"}
			</Heading>
			<Text>{game?.description_raw || "No Description Found"}</Text>
		</Box>
	);
};

export default GameDetailPage;
