import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../interfaces/Game";
import CriticScoreBadge from "./CriticScoreBadge";
import MetaData from "./MetaData";

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	return (
		<SimpleGrid columns={2} gap={4} as="dl">
			<MetaData header={"Platforms"}>
				{game.parent_platforms?.map(({ platform: p }) => (
					<Text key={p.id}>{p.name}</Text>
				))}
			</MetaData>
			<MetaData header={"Genres"}>
				{game.genres?.map((g) => (
					<Text key={g.id}>{g.name}</Text>
				))}
			</MetaData>
			<MetaData header="Publisher">
				{game.publishers?.map((p) => (
					<Text key={p.id}>{p.name}</Text>
				))}
			</MetaData>
			<MetaData header={"Metascore"}>
				<CriticScoreBadge metacritic={game.metacritic}></CriticScoreBadge>
			</MetaData>
		</SimpleGrid>
	);
};

export default GameAttributes;
