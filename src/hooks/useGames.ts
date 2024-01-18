
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameQuery } from "../App";
import ClientService from "../services/ClientService";
import { Platform } from "./usePlatforms";

export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

interface Query {
	genres?: number;
	parent_platforms?: number
	page?: number;
	ordering: string;
	search: string;
}

const useGames = (gameQuery: GameQuery) => {

	const clientService = new ClientService<Game[]>('/games');

	const paramQuery: Query = {
		ordering: gameQuery.sortOrder,
		search: gameQuery.searchText
	}

	if (gameQuery.genreId)
		paramQuery["genres"] = gameQuery.genreId;

	if (gameQuery.platformId)
		paramQuery["parent_platforms"] = gameQuery.platformId;

	return useInfiniteQuery({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) => clientService.get({ 
				params: {...paramQuery, page: pageParam}
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined
		},
		staleTime: ms('24hr')
	});

}

export default useGames;