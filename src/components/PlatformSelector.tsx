import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useGameQuery from "../hooks/useGameQuery";

const allPlatforms: Platform = {
	id: 0,
	name: "All",
	slug: "",
};

const PlatformSelector = () => {
	const { data, error } = usePlatforms();

	const platformId = useGameQuery((s) => s.gameQuery.platformId);
	const setPlatformId = useGameQuery((s) => s.setPlatformId);

	if (error) return null;

	const selectedPlatform = data?.results.find((p) => p.id === platformId);
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platform"}
			</MenuButton>
			<MenuList>
				{[allPlatforms, ...data?.results].map((p) => {
					return (
						<MenuItem key={p.id} onClick={() => setPlatformId(p.id)}>
							{p.name}
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
