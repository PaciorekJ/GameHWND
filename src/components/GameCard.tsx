import {
	Card,
	CardBody,
	Heading,
	Image,
	HStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScoreBadge from "./CriticScoreBadge";
import getCroppedImageUrl from "../services/image-url";
import CardConfig from "../components.config/Card.config";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card h={CardConfig.height}>
			<Image
				src={getCroppedImageUrl(game.background_image)}></Image>
			<CardBody>
				<HStack justifyContent={"space-between"}>
					<PlatformIconList
						platforms={game.parent_platforms.map(
							(platforms) => platforms.platform,
						)}
					/>
					<CriticScoreBadge metacritic={game.metacritic}></CriticScoreBadge>
				</HStack>
				<Heading fontSize={"2xl"}>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
