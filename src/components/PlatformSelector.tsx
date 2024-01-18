import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedId: number | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedId }: Props) => {
	const { data, error } = usePlatforms();

	if (error) return null;

	const selectedPlatform = data?.results.find((p) => p.id === selectedId);
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platform"}
			</MenuButton>
			<MenuList>
				{data?.results.map((p) => {
					return (
						<MenuItem key={p.id} onClick={() => onSelectPlatform(p)}>
							{p.name}
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
