import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../../hooks/useGameQuery";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SearchInput = () => {
	const setSearchText = useGameQuery((s) => s.setSearchText);
	const ref = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) {
					setSearchText(ref.current.value);
					navigate("/");
				}
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
