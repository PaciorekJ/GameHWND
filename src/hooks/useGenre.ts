
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { GetResponse } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenres = () =>
        useQuery<GetResponse<Genre[]>, Error, GetResponse<Genre[]>>({
        queryKey: ["genres"],
        queryFn: () => apiClient.get<GetResponse<Genre[]>>('/genres').then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // Once everyday
        initialData: { count: genres.length, results: genres }    
    });

export default useGenres;