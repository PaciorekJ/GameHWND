import { useQuery } from "@tanstack/react-query";
import ClientService from "../services/ClientService";
import { Game } from "../interfaces/Game";

/** 
 * Takes slug or id of game and will return info specified 
 * in the GameInfo interface
*/
const useGameInfo = (id: string | number) => {
    const clientService = new ClientService<Game>(`games/${id}`);
    return useQuery({
        queryKey: ['games', id],
        queryFn: () => clientService.get(),
    })
}

export default useGameInfo