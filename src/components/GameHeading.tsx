import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQuery from "../hooks/useGameQuery";

const GameHeading = () => {
	const {
		gameQuery: { genreId, platformId },
	} = useGameQuery();
	const genre = useGenre(genreId || -1);
	const platform = usePlatform(platformId || -1);

	return (
		<Heading marginY={4} fontSize={"4xl"} as="h2">
			{`${platform?.name || ""} ${genre?.name || ""} Games`}
		</Heading>
	);
};

export default GameHeading;
