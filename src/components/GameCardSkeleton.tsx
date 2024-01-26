import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
	isLoading: boolean;
}

const GameCardSkeleton = ({ isLoading }: Props) => {
	const estimatedGridWidth = (window.outerWidth * 47.4) / 64;

	return (
		<Card width={"300px"} height={"350px"}>
			<Skeleton minH={"200px"} isLoaded={!isLoading} />
			<CardBody>
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
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
