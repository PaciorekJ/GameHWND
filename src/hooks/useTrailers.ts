import { useQuery } from "@tanstack/react-query";
import Trailer from "../interfaces/Trailer";
import ClientService from "../services/ClientService";

const useTrailers = (id: number) => {
    
    const clientService = new ClientService<Trailer[]>(`/games/${id}/movies`);

    return useQuery({
        queryKey: ["trailers", id],
        queryFn: clientService.getAll
    })
}

export default useTrailers;