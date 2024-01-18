
import { useQuery } from "@tanstack/react-query";
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
    staleTime: 24 * 60 * 60 * 1000, // Once everyday
    initialData: { count: genres.length, next: null, prev: null, results: genres }    
})};

export default useGenres;