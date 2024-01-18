import {
	HStack,
	List,
	ListItem,
	Image,
	SkeletonText,
	Button,
	Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedId: number | null;
}

const allGenre = {
	id: 0,
	name: "All",
	slug: "",
	image_background:
		"https://media.rawg.io/media/games/3c1/3c139f67a73f0bf5ce0d8f2abf83c0d0.jpg",
};

const GenreList = ({ onSelectGenre, selectedId }: Props) => {
	const { data, error, isLoading } = useGenres();

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
					{[allGenre, ...data?.results].map((g) => {
						return (
							<ListItem paddingY={2} key={g.id}>
								<HStack>
									<Image
										objectFit={"cover"}
										boxSize={"32px"}
										borderRadius={8}
										src={getCroppedImageUrl(g.image_background)}></Image>
									<Button
										fontWeight={g.id === selectedId ? "bold" : "normal"}
										fontSize="lg"
										whiteSpace={"normal"}
										textAlign={"left"}
										variant="link"
										onClick={() => onSelectGenre(g)}>
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
