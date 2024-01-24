
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../interfaces/Game";
import ClientService from "../services/ClientService";
import useGameQuery from "./useGameQuery";

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
		queryFn: ({ pageParam = 1 }) => clientService.getAll({ 
				params: {...paramQuery, page: pageParam}
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined
		},
		staleTime: ms('24hr')
	});

}

export default useGames;