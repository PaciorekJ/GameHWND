import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SearchInput from "../components/SearchInput";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

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
				<Box paddingX={5}>
					<GameHeading></GameHeading>
					<HStack justifyContent={"space-between"}>
						<SearchInput />
						<HStack gap={4}>
							<PlatformSelector></PlatformSelector>
							<SortSelector></SortSelector>
						</HStack>
					</HStack>
				</Box>
				<GameGrid></GameGrid>
			</GridItem>
		</Grid>
	);
};

export default HomePage;
