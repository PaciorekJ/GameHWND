import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const GameGrid = () => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (error)
		return (
			<Text padding={4} textAlign={"center"}>
				{(error as Error).message} <br /> Please refresh the page
			</Text>
		);

	return (
		<InfiniteScroll
			hasMore={!!hasNextPage}
			loader={
				<Loader
					margin={"30px"}
					size={{ base: "50px", md: "70px", lg: "100px" }}
					isCentered={true}
				/>
			}
			next={fetchNextPage}
			dataLength={
				data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0
			}>
			<SimpleGrid
				justifyItems={"center"}
				padding={1}
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				gap={6}>
				{isLoading &&
					skeleton.map((s) => (
						<GameCardContainer key={s}>
							<GameCardSkeleton isLoading={isLoading} />
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
		</InfiniteScroll>
	);
};

export default GameGrid;
