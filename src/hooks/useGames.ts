
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { GetResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {

	return useQuery<GetResponse<Game[]>, Error, GetResponse<Game[]>>({
		queryKey: ["games", gameQuery],
		queryFn: () => apiClient
			.get<GetResponse<Game[]>>('/games', {
				params: {
					genres: gameQuery.genre?.id, 
					parent_platforms: gameQuery.platform?.id,
					page: gameQuery.pageNumber,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText
				},
			}).then((res) => res.data),
	});

}

export default useGames;