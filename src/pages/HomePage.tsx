import {
	Grid,
	GridItem,
	HStack,
	Heading,
	Highlight,
	Show,
	Stack,
} from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
import GenreSelector from "../components/GenreSelector";

const HomePage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"Content"`,
				lg: `"Sidebar Content"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}>
			<Show above="lg">
				<GridItem paddingX={3} area={"Sidebar"}>
					<GenreList></GenreList>
				</GridItem>
			</Show>
			<GridItem area={"Content"}>
				<Heading
					textAlign={"center"}
					color={"gray.100"}
					style={{ textShadow: "1px 1px 2px black" }}
					as={"h1"}
					size={"3xl"}>
					<Highlight query={"Hound"} styles={{ color: "gray.300" }}>
						GameHound
					</Highlight>
				</Heading>
				<GameHeading></GameHeading>
				<HStack marginY={4}>
					<PlatformSelector></PlatformSelector>
					<SortSelector></SortSelector>
					<Show below="lg">
						<GenreSelector></GenreSelector>
					</Show>
				</HStack>
				<GameGrid></GameGrid>
			</GridItem>
		</Grid>
	);
};

export default HomePage;
