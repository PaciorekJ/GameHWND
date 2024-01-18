import { SimpleGrid, Text } from "@chakra-ui/react";

import { GameQuery } from "../App";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

import Pagination from "./Pagination";

interface Props {
	gameQuery: GameQuery;
	onChangePage: (pageNumber: number) => void;
}

const GameGrid = ({ gameQuery, onChangePage }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (error)
		return (
			<Text padding={4} textAlign={"center"}>
				{(error as Error).message} <br /> Please refresh the page
			</Text>
		);

	return (
		<>
			<SimpleGrid
				padding={"20px"}
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={10}
				gap={6}>
				{isLoading &&
					skeleton.map((s) => (
						<GameCardContainer key={s}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data?.results.map((game: Game) => {
					return (
						<GameCardContainer key={game.id}>
							<GameCard game={game}></GameCard>
						</GameCardContainer>
					);
				})}
			</SimpleGrid>
			<Pagination
				gameQuery={gameQuery}
				onChangePage={onChangePage}
				numberOfResults={data?.count}></Pagination>
		</>
	);
};

export default GameGrid;
