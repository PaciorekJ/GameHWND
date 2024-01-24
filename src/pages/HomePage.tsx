import {
	Grid,
	GridItem,
	HStack,
	Heading,
	Highlight,
	Show,
} from "@chakra-ui/react";
import GameHeading from "../components/GameHeading/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
import GenreSelector from "../components/GenreSelector";
import { useState } from "react";

const HomePage = () => {
	const [windowWidth, setWindowWidth] = useState(window.outerWidth);

	window.addEventListener("resize", () => {
		setWindowWidth(window.outerWidth);
	});

	const selectorProps = {
		fontSize: {
			base: ".5rem",
			sm: ".75rem",
		},
		letterSpacing: ".75px",
		padding: ".5rem",
		width: windowWidth < 300 ? "100%" : "auto",
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
				<Show above="lg">
					<Heading
						textAlign={"center"}
						color={"gray.100"}
						style={{ textShadow: "1px 1px 2px black" }}
						as={"h1"}
						size={"3xl"}
						letterSpacing={".2rem"}>
						<Highlight query={"HWND"} styles={{ color: "gray.300" }}>
							GameHWND
						</Highlight>
					</Heading>
				</Show>
				<GameHeading></GameHeading>
				<HStack
					flexDirection={windowWidth < 300 ? "column" : "row"}
					id="selector-container">
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
