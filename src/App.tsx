import { useState } from "react";

import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Nav from "./components/Nav";
import PlatformSelector from "./components/PlatformSelector";
import SearchInput from "./components/SearchInput";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genreId: number | null;
	platformId: number | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({
		sortOrder: "",
	} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `"Nav" "Content"`,
				lg: `"Nav Nav" "Sidebar Content"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}>
			<GridItem area={"Nav"}>
				<Nav />
			</GridItem>
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
}

export default App;
