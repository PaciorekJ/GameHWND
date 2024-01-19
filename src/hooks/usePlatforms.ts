
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import ClientService from "../services/ClientService";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}


/**
 * Retrieve all platforms from the API
 * Initial data has been provided as stand in data whiling retrieving platform list.
 * Stale time set to 24 hours
 */
const usePlatforms = () => {

    const clientService = new ClientService<Platform[]>('/platforms/lists/parents');

    return useQuery({
        queryKey: ['platforms'],
        queryFn: () => clientService.get(),
        staleTime: ms('24h'),
        initialData: platforms,
    });
};

export default usePlatforms