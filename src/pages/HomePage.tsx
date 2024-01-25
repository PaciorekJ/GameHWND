import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading/GameHeading";
import GenreList from "../components/GenreList";
import GenreSelector from "../components/GenreSelector";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
	const selectorProps = {
		fontSize: {
			base: ".5rem",
			sm: ".75rem",
		},
		letterSpacing: ".75px",
		padding: ".5rem",
	};

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
				<GridItem area={"Sidebar"}>
					<GenreList></GenreList>
				</GridItem>
			</Show>
			<GridItem className="fit-screen" area={"Content"}>
				<Heading
					textAlign={"center"}
					color={"gray.100"}
					style={{ textShadow: "1px 1px 2px black" }}
					as={"h1"}
					size={{ base: "2xl", sm: "3xl" }}
					letterSpacing={".2rem"}>
					Game<span className="highlight-300">HWND</span>
				</Heading>
				<GameHeading></GameHeading>
				<HStack id="selector-container">
					<PlatformSelector {...selectorProps}></PlatformSelector>
					<SortSelector {...selectorProps}></SortSelector>
					<Show below="lg">
						<GenreSelector {...selectorProps}></GenreSelector>
					</Show>
				</HStack>
				<GameGrid></GameGrid>
			</GridItem>
		</Grid>
	);
};

export default HomePage;
