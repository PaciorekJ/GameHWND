import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQuery from "../hooks/useGameQuery";

import { allGenres } from "../data/genres";

const GenreList = () => {
	const { data, error, isLoading } = useGenres();

	const genreId = useGameQuery((s) => s.gameQuery.genreId);
	const setGenreId = useGameQuery((s) => s.setGenreId);

	if (error) return null;

	return (
		<>
			<Heading fontSize={"2xl"} marginTop={5} marginBottom={3}>
				Genres
			</Heading>
			<List gap={3}>
				<>
					{isLoading && (
						<SkeletonText
							paddingY={2}
							noOfLines={30}
							skeletonHeight={"30px"}
							spacing={4}
						/>
					)}
					{[allGenres, ...(data?.results || [])].map((g) => {
						return (
							<ListItem paddingY={2} key={g.id}>
								<HStack>
									<Image
										objectFit={"cover"}
										boxSize={"32px"}
										borderRadius={8}
										src={getCroppedImageUrl(g.image_background)}
										alt={`${g.name} genre image`}
									/>
									<Button
										fontWeight={g.id === genreId ? "bold" : "normal"}
										fontSize="lg"
										whiteSpace={"normal"}
										textAlign={"left"}
										variant="link"
										onClick={() => setGenreId(g.id)}>
										{g.name}
									</Button>
								</HStack>
							</ListItem>
						);
					})}
				</>
			</List>
		</>
	);
};

export default GenreList;
