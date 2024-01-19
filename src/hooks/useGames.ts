
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import ClientService from "../services/ClientService";
import { Platform } from "./usePlatforms";
import useGameQuery from "./useGameQuery";

export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

// Note: Query interface according to API
interface Query {
	genres?: number;
	parent_platforms?: number
	page?: number;
	ordering: string;
	search: string;
}

/**
 * Used to retrieve Games using infinite queries form the API
 */
const useGames = () => {
	const gameQuery = useGameQuery(s => s.gameQuery);

	const clientService = new ClientService<Game[]>('/games');

	const paramQuery: Query = {} as Query

	// *** Fills query params for request ***
	if (gameQuery.sortOrder)
		paramQuery["ordering"] = gameQuery.sortOrder;

	if (gameQuery.searchText)
		paramQuery["search"] = gameQuery.searchText;

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