import { Heading, Highlight } from "@chakra-ui/react";
import React from "react";

const CompanyHeading = () => {
	return (
		<Heading
			textAlign={"center"}
			color={"gray.100"}
			style={{ textShadow: "1px 1px 2px black" }}
			as={"h1"}
			size={"3xl"}>
			<Highlight query={"Hound"} styles={{ color: "gray.300" }}>
				GameHound
			</Highlight>
		</Heading>
	);
};

export default CompanyHeading;
