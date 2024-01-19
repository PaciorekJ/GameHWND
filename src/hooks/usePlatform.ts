import usePlatforms from "./usePlatforms";

/**
 * Retrieve a platform of the API endpoint with the given
 * id.
 * @param id the id related to the platform of the API
 * @returns The platform with the given id
 */
const usePlatform = (id: number) => {
    
    const { data: platforms } = usePlatforms();

    return platforms?.results.find(
		(p) => p.id === id,
	);
}

export default usePlatform;