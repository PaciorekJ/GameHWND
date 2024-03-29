import { useQuery } from "@tanstack/react-query";
import Game from "../interfaces/Game";
import ClientService from "../services/ClientService";

/** 
 * Takes slug or id of game and will return info specified 
 * in the GameInfo interface
*/
const useGameInfo = (id: string | number) => {
    const clientService = new ClientService<Game>(`games/${id}`);
    return useQuery({
        queryKey: ['games', id],
        queryFn: clientService.get,
    })
}

export default useGameInfo