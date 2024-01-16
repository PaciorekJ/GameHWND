import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import CardConfig from "../components.config/Card.config";

const GameCardSkeleton = () => {
	return (
		<Card h={CardConfig.height}>
			<Skeleton height={"200px"}></Skeleton>
			<CardBody>
				<SkeletonText></SkeletonText>
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
