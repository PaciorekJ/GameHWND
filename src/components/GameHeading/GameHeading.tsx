import { Heading } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import useGameQuery from "../../hooks/useGameQuery";
import './index.css';

const GameHeading = () => {
	const { genreId, platformId } = useGameQuery((s) => s.gameQuery);
	const genre = useGenre(genreId || -1);
	const platform = usePlatform(platformId || -1);

	return (
		<Heading className="heading" fontSize={"4xl"} as="h2">
			{`${platform?.name || ""} ${genre?.name || ""} Games`}
		</Heading>
	);
};

export default GameHeading;
