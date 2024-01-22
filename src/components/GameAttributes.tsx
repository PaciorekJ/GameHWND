import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import Game from "../interfaces/Game";
import CriticScoreBadge from "./CriticScoreBadge";
import MetaData from "./MetaData";
import Loader from "./Loader";

interface Props {
	game: Game;
	isLoading?: boolean;
}

const GameAttributes = ({ game, isLoading = false }: Props) => {
	return (
		<SimpleGrid columns={2} gap={4} as="dl">
			<MetaData header={"Platforms"}>
				{(!isLoading &&
					game.parent_platforms?.map(({ platform: p }) => (
						<Text key={p.id}>{p.name}</Text>
					))) || <Loader margin={"10px"} boxSize={"50px"} size={"25px"} />}
			</MetaData>
			<MetaData header={"Genres"}>
				{(!isLoading &&
					game.genres?.map((g) => <Text key={g.id}>{g.name}</Text>)) || (
					<Loader margin={"10px"} boxSize={"50px"} size={"25px"} />
				)}
			</MetaData>
			<MetaData header={"Publisher"}>
				{(!isLoading &&
					game.publishers?.map((p) => <Text key={p.id}>{p.name}</Text>)) || (
					<Loader margin={"10px"} boxSize={"50px"} size={"25px"} />
				)}
			</MetaData>
			<MetaData header={"Metascore"}>
				<CriticScoreBadge metacritic={game.metacritic}></CriticScoreBadge>
			</MetaData>
		</SimpleGrid>
	);
};

export default GameAttributes;
