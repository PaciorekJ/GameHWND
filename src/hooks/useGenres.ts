
import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import Genre from "../interfaces/Genre";
import ClientService from "../services/ClientService";

/**
 * Retrieve all genres from the API
 * Initial data has been provided as stand in data whiling retrieving genres list.
 * Stale time set to 24 hours
 */
const useGenres = () => {
    const clientService = new ClientService<Genre[]>('/genres');
    return useQuery({
    queryKey: ["genres"],
    queryFn: clientService.getAll,
    staleTime: ms('24h'), // Once everyday
    initialData: genres,
})};

export default useGenres;