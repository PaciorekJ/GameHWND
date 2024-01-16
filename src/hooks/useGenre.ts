
import genres from "../data/genres";

// import useGet from "./useGet";
// useGet<Genre>('/genres')

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenres = () => {
    const {data, error, isLoading} = { data: genres, isLoading: false, error: null};

    return {data, error, isLoading}
};

export default useGenres;