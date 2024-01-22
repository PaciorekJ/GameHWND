import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	header: string;
	children: ReactNode | ReactNode[];
}

const MetaData = ({ header, children }: Props) => {
	return (
		<Box>
			<Heading as="dt" fontWeight={"bold"} fontSize={"md"} color="gray.600">
				{header}
			</Heading>
			<dd>{children}</dd>
		</Box>
	);
};

export default MetaData;
