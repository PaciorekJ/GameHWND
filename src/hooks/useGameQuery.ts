import { create } from "zustand";

/**
 * Interface that defines properties to query for games
 * for the UI
 */
export interface GameQuery {
	genreId:    number | null;
	platformId: number | null;
	sortOrder:  string | null;
	searchText: string | null;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (search: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

/**
 * useGameQuery provides setters for each of the gameQuery
 * properties and access to the GameQuery object itself
 */

const useGameQuery = create<GameQueryStore>(set => ({
        gameQuery: {} as GameQuery,
        
        setSearchText: (searchText: string) => {
            set((store) => ({
                gameQuery: {
                    ...store.gameQuery,
                    searchText,
                },
            }))
        },

        setGenreId: (genreId: number) => {
            set((store) => ({
                gameQuery: {
                    ...store.gameQuery,
                    genreId,
                },
            }))
        },

        setPlatformId: (platformId: number) => {
            set((store) => ({
                gameQuery: {
                    ...store.gameQuery,
                    platformId,
                },
            }))
        },

        setSortOrder: (sortOrder: string) => {
            set((store) => ({
                gameQuery: {
                    ...store.gameQuery,
                    sortOrder,
                },
            }))
        },

    }
));

export default useGameQuery;