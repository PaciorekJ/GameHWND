import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { Heading, Highlight } from "@chakra-ui/react";

const Layout = () => {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
};

export default Layout;
