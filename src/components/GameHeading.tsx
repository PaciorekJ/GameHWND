import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const genre = useGenre(gameQuery.genreId || -1);
	const platform = usePlatform(gameQuery.platformId || -1);

	return (
		<Heading marginY={4} fontSize={"4xl"} as="h2">
			{`${platform?.name || ""} ${genre?.name || ""} Games`}
		</Heading>
	);
};

export default GameHeading;
