import { useQuery } from "@tanstack/react-query";
import ClientService from "../services/ClientService";

interface Screenshot{
    id: number;
    image: string; // URL
}

const useScreenshots = (id: number) => {
    const clientService = new ClientService<Screenshot[]>(`/games/${id}/screenshots`);
    return useQuery({
        queryKey: ['screenshots', id],
        queryFn: clientService.getAll
    })
}

export default useScreenshots