
import useGet from "./useGet";
import { GameQuery } from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
	const { data, error, isLoading } = useGet<Game>('/games', 
	{ params: {
			genres: gameQuery.genre?.id, 
			parent_platforms: gameQuery.platform?.id,
			page: gameQuery.pageNumber,
			ordering: gameQuery.sortOrder,
			search: gameQuery.searchText
		}
	}, [gameQuery])

    return {data , error, isLoading}
}

export default useGames;