import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	maxChar: number;
	children: string;
}

const ExpandableText = ({ maxChar, children }: Props) => {
	const isCompressable = children && children.length > maxChar;

	const [isCompressed, setCompressed] = useState(isCompressable);

	const text = isCompressed ? children.substring(0, maxChar) + "..." : children;

	return (
		<Box marginBottom={4}>
			<Text letterSpacing={0.5}>{text}</Text>
			{isCompressable && (
				<Button
					padding={2}
					marginTop={2}
					size={"small"}
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
