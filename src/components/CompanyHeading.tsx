import { Heading, Highlight } from "@chakra-ui/react";
import React from "react";

const CompanyHeading = () => {
	return (
		<Heading
			textAlign={"center"}
			color={"gray.100"}
			style={{ textShadow: "1px 1px 2px black" }}
			as={"h1"}
			size={"3xl"}
			letterSpacing={".2rem"}>
			<Highlight query={"HWND"} styles={{ color: "gray.300" }}>
				GameHWND
			</Highlight>
		</Heading>
	);
};

export default CompanyHeading;
