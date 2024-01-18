
import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import ClientService from "../services/ClientService";

export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {

	const clientService = new ClientService<Game[]>('/games');

	return useInfiniteQuery({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) => clientService.get({ 
				params: {
					genres: gameQuery.genre?.id, 
					parent_platforms: gameQuery.platform?.id,
					page: pageParam,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText
				}
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined
		},
	});

}

export default useGames;