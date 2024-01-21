
import useTrailers from "../hooks/useTrailers";

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, error, isLoading } = useTrailers(gameId);

	if (isLoading || !data) return null;

	if (error) throw error;

	const trailers = data.results[0];

	const videoProps = {
		src: trailers.data[480],
		poster: trailers.preview,
		controls: true,
	};

	return <video {...videoProps} />;
};

export default GameTrailer;
