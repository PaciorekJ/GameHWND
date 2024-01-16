import { Badge } from "@chakra-ui/react";

interface Props {
	metacritic: number;
}

const CriticScoreBadge = ({ metacritic }: Props) => {
	const color =
		metacritic > 95
			? "purple"
			: metacritic > 80
			? "green"
			: metacritic > 70
			? "yellow"
			: "";

	return (
		<Badge
			fontSize={".8rem"}
			paddingX={2}
			borderRadius={"4px"}
			colorScheme={color}
			variant="subtle">
			{metacritic ? metacritic : "--"}
		</Badge>
	);
};

export default CriticScoreBadge;
