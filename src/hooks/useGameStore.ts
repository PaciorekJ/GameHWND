import { useQuery } from "@tanstack/react-query";
import ClientService from "../services/ClientService"
import { StoreLookup } from "../interfaces/Store";

const useGameStores = (id: number | string) => {
    const clientService = new ClientService<StoreLookup[]>(`/games/${id}/stores`);
    
    return useQuery({
        queryKey: ["stores", id],
        queryFn: clientService.getAll
    });
}

export default useGameStores;