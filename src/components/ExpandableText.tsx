import { Box, Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
	maxChar: number;
	children: string;
}

const ExpandableText = ({ maxChar, children }: Props) => {
	const isCompressable = children && children.length > maxChar;

	const [isCompressed, setCompressed] = useState(isCompressable);

	const text = isCompressed ? children.substring(0, maxChar) + "..." : children;

	return (
		<Box>
			<Text>{text}</Text>
			{isCompressable && (
				<Button
					margin={4}
					size={"xs"}
					fontWeight={"bold"}
					colorScheme="blue"
					onClick={() => setCompressed(!isCompressed)}>
					{isCompressed ? "Show More" : "Show Less"}
				</Button>
			)}
		</Box>
	);
};

export default ExpandableText;
