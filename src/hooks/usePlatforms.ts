
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ClientService from "../services/ClientService";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {

    const clientService = new ClientService<Platform[]>('/platforms/lists/parents');

    return useQuery({
        queryKey: ["platforms"],
        queryFn: () => clientService.get(),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: platforms.length, results: platforms},
    });
};

export default usePlatforms