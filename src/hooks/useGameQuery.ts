import { create } from "zustand";

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