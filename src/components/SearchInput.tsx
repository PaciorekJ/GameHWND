import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../hooks/useGameQuery";

const SearchInput = () => {
	const { setSearchText } = useGameQuery();
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) setSearchText(ref.current.value);
			}}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />}></InputLeftElement>
				<Input
					ref={ref}
					borderRadius={20}
					variant="filled"
					placeholder="Search games..."
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
