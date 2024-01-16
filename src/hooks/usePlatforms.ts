
import platforms from "../data/platforms";

// import useGet from "./useGet";
// useGet<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    const {data, error, isLoading} = { data: platforms, isLoading: false, error: null};

    return {data, error, isLoading}
};

export default usePlatforms