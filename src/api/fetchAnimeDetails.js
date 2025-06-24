// src/api/fetchAnimeDetails.js

export const fetchAnimeDetails = async ({ url, setAnimeDetails, retries = 3 }) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        //console.log("Anime details fetched successfully:", data.data.attributes);
        setAnimeDetails(data.data.attributes);
    } catch (error) {
        console.error("Error fetching anime details:", error);

        if (retries > 0) {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Retry after 2 seconds
            fetchAnimeDetails(url, setAnimeDetails, retries - 1); // Retry
        }
    }
};


export const fetchGenres = async ({ id, setGenres }) => {


    const url = `https://kitsu.io/api/edge/anime/${id}/categories`
    try {
        const res = await fetch(url);
        const data = await res.json();
        const genres = data.data.map(item => item.attributes.title);
        // ["Action", "Drama", ...]
        setGenres(genres)
    } catch (error) {
        console.error("Error fetching anime details:", error);


        await new Promise(resolve => setTimeout(resolve, 2000)); // Retry after 2 seconds
        fetchAnimeDetails(id, setGenres); // Retry

    }

};
export const fetchCharacters = async ({ id, setCharacters }) => {
    try {
        // Step 1: Get anime-character relationships
        const res = await fetch(
            `https://kitsu.io/api/edge/anime/${id}/characters?page[limit]=20&include=character`
        );
        const data = await res.json();

        const charEdges = data.data;
        const includedCharacters = data.included || [];

        // Step 2: Extract useful character info
        const charactersInfo = charEdges.map((edge) => {
            const charId = edge.relationships.character.data.id;
            const role = edge.attributes.role;

            const fullChar = includedCharacters.find((char) => char.id === charId);

            return {
                name: fullChar?.attributes?.name,
                image: fullChar?.attributes?.image?.original,
                role: role,
            };
        });
        // console.log(charactersInfo);

        setCharacters(charactersInfo);
    } catch (error) {
        console.error('Error fetching characters:', error);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Retry after 2 seconds
        fetchCharacters(id, setCharacters); // Retry
    }
};

