import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const { data: genres } = useGenres();
	const { data: platforms } = usePlatforms();
	const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
	const platform = platforms?.results.find(
		(p) => p.id === gameQuery.platformId,
	);

	return (
		<Heading marginY={4} fontSize={"4xl"} as="h2">
			{`${platform?.name || ""} ${genre?.name || ""} Games`}
		</Heading>
	);
};

export default GameHeading;
