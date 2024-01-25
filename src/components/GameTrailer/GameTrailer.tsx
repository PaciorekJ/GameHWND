import useTrailers from "../../hooks/useTrailers";
import "./index.css";

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, error, isLoading } = useTrailers(gameId);

	if (isLoading || !data || !data.results[0]) return null;

	if (error) throw error;

	const trailers = data.results[0];

	const videoProps = {
		src: trailers.data.max || trailers.data[480],
		poster: trailers.preview,
		controls: true,
	};

	return <video autoPlay muted {...videoProps} />;
};

export default GameTrailer;
