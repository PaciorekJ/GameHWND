import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";

import { GameQuery } from "../App";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

import Pagination from "./Pagination";
import React from "react";

interface Props {
	gameQuery: GameQuery;
	onChangePage: (pageNumber: number) => void;
}

const GameGrid = ({ gameQuery, onChangePage }: Props) => {
	const {
		data,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);
	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (error)
		return (
			<Text padding={4} textAlign={"center"}>
				{(error as Error).message} <br /> Please refresh the page
			</Text>
		);

	return (
		<Box padding={"20px"}>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} gap={6}>
				{isLoading &&
					skeleton.map((s) => (
						<GameCardContainer key={s}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game}></GameCard>
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
			{hasNextPage && (
				<Button marginY={2} onClick={() => fetchNextPage()}>
					{isFetchingNextPage ? "Loading..." : "Load More"}
				</Button>
			)}
		</Box>
	);
};

export default GameGrid;

{
	/* <Pagination
	gameQuery={gameQuery}
	onChangePage={onChangePage}
	numberOfResults={data?.pageParams}></Pagination> */
}
