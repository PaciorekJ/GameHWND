import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card h={{ sm: "34.3rem", md: "22.3rem", lg: "120rem", xl: "350px" }}>
			<Skeleton height={"200px"}></Skeleton>
			<CardBody>
				<SkeletonText></SkeletonText>
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
