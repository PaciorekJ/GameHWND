import { HStack, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
	onChangePage: (pageNumber: number) => void;
	numberOfResults?: number;
}

const resultsPerPage = 20;

const Pagination = ({
	gameQuery,
	onChangePage,
	numberOfResults = 0,
}: Props) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<HStack marginBottom={6} justifyContent={"center"}>
			<Icon
				as={FaChevronLeft}
				onClick={() => {
					const prevPage = gameQuery.pageNumber - 1;
					const pageNumber = prevPage < 1 ? 1 : prevPage;
					onChangePage(pageNumber);
				}}></Icon>
			<form
				className="center"
				style={{ width: "auto", textAlign: "center" }}
				onSubmit={(e) => {
					e.preventDefault();
					if (!ref.current) return;

					const pageNumber = parseInt(ref.current.value);
					ref.current.value = "";

					if (!pageNumber) return;

					if (pageNumber < gameQuery.pageNumber && pageNumber < 1) return;

					if (
						pageNumber > gameQuery.pageNumber &&
						resultsPerPage > numberOfResults
					)
						return;

					onChangePage(pageNumber);
				}}>
				<Input
					ref={ref}
					borderRadius={20}
					variant="filled"
					placeholder={gameQuery.pageNumber.toString()}
				/>
			</form>
			<Icon
				as={FaChevronRight}
				onClick={() => {
					const nextPage = gameQuery.pageNumber + 1;
					const pageNumber =
						resultsPerPage > numberOfResults ? gameQuery.pageNumber : nextPage;
					onChangePage(pageNumber);
				}}></Icon>
		</HStack>
	);
};

export default Pagination;
