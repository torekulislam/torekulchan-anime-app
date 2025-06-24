export const fetchAnimeList = async ({ apiUrl, setAnimeLists, setTotalPages, limit, retries = 3 }) => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setAnimeLists(data.data);
        if (limit > 0 && data.meta?.count) {
            setTotalPages(Math.floor(data.meta.count / limit));
        }
    } catch (error) {
        console.error("Error fetching anime list:", error);

        if (retries > 0) {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Retry after 2s
            return fetchAnimeList({ apiUrl, setAnimeLists, setTotalPages, limit, retries: retries - 1 });
        }
    }
};


