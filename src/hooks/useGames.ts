
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
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

	return useQuery({
		queryKey: ["games", gameQuery],
		queryFn: () => clientService.get({ 
				params: {
					genres: gameQuery.genre?.id, 
					parent_platforms: gameQuery.platform?.id,
					page: gameQuery.pageNumber,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText
				}
			})
	});

}

export default useGames;