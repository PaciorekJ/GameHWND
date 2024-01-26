import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../interfaces/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScoreBadge from "./CriticScoreBadge";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Link to={`/game/${game.slug}`}>
			<Card
				height={{ base: "329.5px", lg: "329.5px" }}
				width={"400px"}
				overflow={"hidden"}>
				<Image
					src={getCroppedImageUrl(game.background_image)}
					height={"200px"}
					width={"400px"}
					alt={`Image of ${game.name}`}
				/>
				<CardBody>
					<HStack justifyContent={"space-between"}>
						<PlatformIconList
							platforms={game.parent_platforms?.map(({ platform }) => platform)}
						/>
						<CriticScoreBadge metacritic={game.metacritic}></CriticScoreBadge>
					</HStack>
					<Heading fontSize={"2xl"}>{game.name}</Heading>
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCard;
