import { HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import stores from "../data/stores";
import useGameStores from "../hooks/useGameStore";
import { Store } from "../interfaces/Store";

interface Props {
	gameId: number;
}

const GameStores = ({ gameId }: Props) => {
	const { data, isLoading, error } = useGameStores(gameId);

	if (!data) return null;

	if (error)
		return (
			<Text>Something unexpected happened: {(error as Error).message}</Text>
		);

	if (isLoading) return null;

	return (
		<HStack wrap={"wrap"} justifyContent={"center"} gap={4}>
			{data?.results.map((s) => {
				const storeId = parseInt(s.store_id);
				const storeUrl = s.url;

				if (!storeId || !storeUrl) return null;

				const store = (stores as { [key: number]: Store })[storeId]; // Looks up store in stores table

				if (!store) return null;

				return (
					<Link to={storeUrl} key={s.id}>
						<Image
							src={store.image_background}
							alt={`${store.name} Logo`}
							boxSize={"60px"}
							objectFit={"unset"}
							_hover={{ transform: "scale(1.1)" }}
						/>
					</Link>
				);
			})}
		</HStack>
	);
};

export default GameStores;
