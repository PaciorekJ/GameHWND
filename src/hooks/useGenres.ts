
import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import ClientService from "../services/ClientService";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenres = () => {
    const clientService = new ClientService<Genre[]>('/genres');
    return useQuery({
    queryKey: ["genres"],
    queryFn: () => clientService.get(),
    staleTime: ms('24h'), // Once everyday
    initialData: genres,
})};

export default useGenres;