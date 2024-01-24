import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
	isLoading: boolean;
}

const GameCardSkeleton = ({ isLoading }: Props) => {
	const estimatedGridWidth = (window.outerWidth * 47.4) / 64;

	return (
		<Card
			h={{
				base: `${estimatedGridWidth * 1.15}px`,
				sm: `${estimatedGridWidth}px`,
				md: `${(estimatedGridWidth * 1.1) / 2}px`, // Divide by 2 because there's 2 cell at this breakpoint
				lg: `${(estimatedGridWidth * 1.125) / 3}px`,
				xl: `${(estimatedGridWidth * 1.19) / 4}px`,
			}}>
			<Skeleton
				h={{
					base: `${estimatedGridWidth * 1.2}px`,
					sm: `${estimatedGridWidth * 1.1}px`,
					md: `${(estimatedGridWidth * 1.1) / 2}px`,
					lg: `${(estimatedGridWidth * 1.1) / 3}px`,
					xl: `${(estimatedGridWidth * 1.1) / 4}px`,
				}}
				isLoaded={!isLoading}
			/>
			<CardBody>
				<SkeletonText isLoaded={!isLoading} noOfLines={1} skeletonHeight={2} />
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
