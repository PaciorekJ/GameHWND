import useGenres from "./useGenres";

/**
 * Retrieve a genre of the API endpoint with the given
 * id.
 * @param id the id related to the genre of the API
 * @returns The genre with the given id
 */

const useGenre = (id: number) => {
    const { data: genres } = useGenres();
	return genres?.results.find((g) => g.id === id);
}

export default useGenre;