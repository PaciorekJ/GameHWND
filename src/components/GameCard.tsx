import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../interfaces/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScoreBadge from "./CriticScoreBadge";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card h={{ sm: "580px", md: "400px", lg: "300px", xl: "350px" }}>
			<Image src={getCroppedImageUrl(game.background_image)}></Image>
			<CardBody>
				<HStack justifyContent={"space-between"}>
					<PlatformIconList
						platforms={game.parent_platforms?.map(
							(platforms) => platforms.platform,
						)}
					/>
					<CriticScoreBadge metacritic={game.metacritic}></CriticScoreBadge>
				</HStack>
				<Heading fontSize={"2xl"}>
					<Link to={`/game/${game.slug}`}>{game.name}</Link>
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
