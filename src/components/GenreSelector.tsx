import {
	Button,
	Menu,
	MenuButton,
	MenuButtonProps,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import useGameQuery from "../hooks/useGameQuery";
import { allGenres } from "../data/genres";

const GenreSelector = (props: MenuButtonProps) => {
	const { data, error } = useGenres();

	const GenreId = useGameQuery((s) => s.gameQuery.genreId);
	const setGenreId = useGameQuery((s) => s.setGenreId);

	if (error) return null;

	const selectedGenre = data?.results.find((p) => p.id === GenreId);
	return (
		<Menu>
			<MenuButton {...props} as={Button} rightIcon={<BsChevronDown />}>
				{selectedGenre?.name || "Genre"}
			</MenuButton>
			<MenuList>
				{[allGenres, ...data?.results].map((p) => {
					return (
						<MenuItem key={p.id} onClick={() => setGenreId(p.id)}>
							{p.name}
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
};

export default GenreSelector;
