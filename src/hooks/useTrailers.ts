import { useQuery } from "@tanstack/react-query"
import ClientService from "../services/ClientService"
import Trailer from "../interfaces/Trailer";

const useTrailers = (id: number) => {
    
    const clientService = new ClientService<Trailer[]>(`/games/${id}/movies`);

    return useQuery({
        queryKey: ["trailers", id],
        queryFn: () => clientService.getAll()
    })
}

export default useTrailers;