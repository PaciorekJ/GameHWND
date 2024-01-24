import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	const estimatedGridWidth = (window.outerWidth * 47.4) / 64;

	return (
		<Card
			h={{
				sm: `${estimatedGridWidth}px`,
				md: `${(estimatedGridWidth * 1.1) / 2}px`, // Divide by 2 because there's 2 cell at this breakpoint
				lg: `${(estimatedGridWidth * 1.125) / 3}px`,
				xl: `${(estimatedGridWidth * 1.19) / 4}px`,
			}}>
			<Skeleton
				h={{
					sm: `${estimatedGridWidth * 1.1}px`,
					md: `${(estimatedGridWidth * 1.1) / 2}px`,
					lg: `${(estimatedGridWidth * 1.1) / 3}px`,
					xl: `${(estimatedGridWidth * 1.1) / 4}px`,
				}}
			/>
			<CardBody>
				<SkeletonText noOfLines={1} skeletonHeight={2} />
				<SkeletonText noOfLines={2} skeletonHeight={3} paddingTop={4} />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
