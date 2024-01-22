import useGameInfo from "../hooks/useGameInfo";
import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";
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

	if (!game)
		// Defined for the skeletons when loading
		game = {
			name: "name",
			description_raw:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae iure quod dignissimos, accusantium culpa ipsa consequatur aliquam, consequuntur vel voluptates dolores, est quam. Consectetur ipsam sequi, expedita perspiciatis debitis eius sit at, non maxime minima sed tenetur, pariatur quod exercitationem quis ratione sapiente? Voluptas esse temporibus praesentium velit non est rem omnis, pariatur, exercitationem eum aliquid quos eius iure adipisci, reprehenderit cumque et. Modi sequi corporis mollitia temporibus dolorem reprehenderit quaerat, in voluptates ullam doloremque cupiditate voluptate expedita, odit minima deleniti quidem sint esse numquam sapiente animi, ducimus voluptatem. Impedit ipsam dolorem sed amet quaerat praesentium quisquam eum alias hic libero veniam quia, repudiandae ut magnam magni provident molestias modi dolores totam neque officiis unde ratione assumenda fuga. Qui vero unde accusamus ab quia nesciunt, animi, eos in corporis omnis perspiciatis beatae doloremque quis, earum inventore officia iusto? Ipsum laborum maiores vel neque dolores sed in error facere? Maxime quae saepe earum, commodi esse odit sint placeat iste minus tenetur inventore delectus explicabo ipsam eligendi cupiditate repudiandae dolorum dolorem dolor quo, ipsum voluptatibus illum, velit dicta. Aliquid neque aspernatur cupiditate eaque aut illo iusto cum necessitatibus delectus voluptatibus harum labore officiis recusandae nisi molestiae, mollitia esse! Repudiandae, eum consectetur aspernatur sapiente veniam sunt ipsa doloribus similique delectus laborum harum eveniet fugiat dolorem perspiciatis, exercitationem excepturi sed laboriosam optio! Corrupti porro eaque impedit quasi vel adipisci magnam esse, deleniti consequatur, nisi minus, possimus placeat similique reprehenderit rerum error. Vero quod quasi magnam alias fuga amet. Quasi, ipsam rem consectetur soluta consequatur sit voluptas, sed molestias quod eaque facere mollitia dicta harum magnam ab exercitationem incidunt minus quibusdam delectus maxime similique impedit doloribus? Laborum animi reiciendis distinctio officiis. Inventore pariatur debitis unde perferendis, alias eius necessitatibus dicta assumenda. Ipsa tempore adipisci, quasi architecto ipsum necessitatibus, beatae hic omnis consequuntur eos aut doloribus.",
		} as Game;

	return (
		<SimpleGrid
			templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
			<GridItem>
				<Heading as={"h1"} pb={4} margin={2}>
					<Skeleton noOfLines={1} isLoaded={!isLoading}>
						{game.name}
					</Skeleton>
				</Heading>
				<Skeleton noOfLines={10} marginBottom={4} isLoaded={!isLoading}>
					<ExpandableText maxChar={300}>{game.description_raw}</ExpandableText>
				</Skeleton>
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
