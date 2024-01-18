import { useState } from "react";

import Nav from "./components/Nav";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import SearchInput from "./components/SearchInput";

export interface GameQuery {
	genreId: number | null;
	platformId: number | null;
	sortOrder: string;
	searchText: string;
	pageNumber: number;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({
		sortOrder: "",
		pageNumber: 1,
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
					<GenreList
						selectedId={gameQuery.genreId}
						onSelectGenre={(genre) =>
							setGameQuery({
								...gameQuery,
								genreId: genre.id,
								pageNumber: 1,
							})
						}></GenreList>
				</GridItem>
			</Show>
			<GridItem area={"Content"}>
				<Box paddingX={5}>
					<GameHeading gameQuery={gameQuery}></GameHeading>
					<HStack justifyContent={"space-between"}>
						<SearchInput
							onSearch={(searchText) =>
								setGameQuery({ ...gameQuery, searchText, pageNumber: 1 })
							}
						/>
						<HStack gap={4}>
							<PlatformSelector
								onSelectPlatform={(platform) => {
									setGameQuery({
										...gameQuery,
										platformId: platform.id,
										pageNumber: 1,
									});
								}}
								selectedId={gameQuery.platformId}></PlatformSelector>
							<SortSelector
								sortOrder={gameQuery.sortOrder}
								onSelectSortOrder={(sortOrder) =>
									setGameQuery({ ...gameQuery, sortOrder, pageNumber: 1 })
								}></SortSelector>
						</HStack>
					</HStack>
				</Box>
				<GameGrid
					gameQuery={gameQuery}
					onChangePage={(pageNumber) => {
						if (pageNumber) setGameQuery({ ...gameQuery, pageNumber });
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						});
					}}></GameGrid>
			</GridItem>
		</Grid>
	);
}

export default App;
