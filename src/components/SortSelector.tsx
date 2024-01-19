import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQuery from "../hooks/useGameQuery";
import { sortOrders, sortOrderDefault } from "../data/sortOrders";

const SortSelector = () => {
	const sortOrder = useGameQuery((s) => s.gameQuery.sortOrder);
	const setSortOrder = useGameQuery((s) => s.setSortOrder);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order By:{" "}
				{sortOrders.reduce(
					(acc, cur) => acc || (cur.value == sortOrder ? cur.label : ""),
					"",
				) || sortOrderDefault.label}
			</MenuButton>
			<MenuList>
				{sortOrders.map((s) => {
					return (
						<MenuItem
							onClick={() => setSortOrder(s.value)}
							key={s.value}
							value={s.value}>
							{s.label}
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
