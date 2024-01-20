import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import Nav from "../components/Nav";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<Box padding={4}>
			<Nav />
			<Heading as={"h1"}>Oops</Heading>
			<Text>
				{isRouteErrorResponse(error)
					? "This page does not exist"
					: "Something unexpected has occurred"}
			</Text>
		</Box>
	);
};

export default ErrorPage;
