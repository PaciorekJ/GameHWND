import {
	Card,
	CardBody,
	HStack,
	Heading,
	Image,
	Skeleton,
	SkeletonText,
} from "@chakra-ui/react";
import Game from "../interfaces/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScoreBadge from "./CriticScoreBadge";
import PlatformIconList from "./PlatformIconList";
import { Link, defer } from "react-router-dom";

interface Props {
	game: Game | undefined;
	isLoading: boolean;
	isOffScreen?: boolean;
}

const GameCard = ({ game, isLoading, isOffScreen = true }: Props) => {
	return (
		<Link to={`/game/${game?.slug}`}>
			<Card height={"350px"} width={"300px"} overflow={"hidden"}>
				<Skeleton minH={"200px"} isLoaded={!isLoading}>
					<Image
						src={getCroppedImageUrl(game?.background_image || "")}
						aspectRatio={"2:1"}
						objectFit={"fill"}
						alt={`Image of ${game?.name}`}
						loading={isOffScreen ? "lazy" : "eager"}
					/>
				</Skeleton>
				<CardBody>
					{isLoading && (
						<>
							<SkeletonText
								isLoaded={!isLoading}
								paddingTop={2}
								noOfLines={1}
								skeletonHeight={4}
							/>
							<SkeletonText
								isLoaded={!isLoading}
								noOfLines={2}
								skeletonHeight={3}
								paddingTop={4}
							/>
						</>
					)}
					{!isLoading && (
						<>
							<HStack justifyContent={"space-between"}>
								<PlatformIconList
									platforms={(game?.parent_platforms || []).map(
										({ platform }) => platform,
									)}
								/>
								<CriticScoreBadge
									metacritic={game?.metacritic || 0}></CriticScoreBadge>
							</HStack>
							<Heading fontSize={"2xl"}>{game?.name}</Heading>
						</>
					)}
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCard;
