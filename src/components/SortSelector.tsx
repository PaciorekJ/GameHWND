import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQuery from "../hooks/useGameQuery";

const sortOrders: { value: string; label: string }[] = [
	{ value: "", label: "Relevance" },
	{ value: "-added", label: "Date Added" },
	{ value: "name", label: "Name" },
	{ value: "-released", label: "Release Date" },
	{ value: "-metacritic", label: "Popularity" },
	{ value: "-rating", label: "Average Rating" },
];

const SortSelector = () => {
	const {
		gameQuery: { sortOrder },
		setSortOrder,
	} = useGameQuery();

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order By:{" "}
				{sortOrders.reduce(
					(acc, cur) => acc || (cur.value == sortOrder ? cur.label : ""),
					"",
				) || "Relevance"}
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
