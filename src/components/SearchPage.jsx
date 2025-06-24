// components/SearchPage.jsx
import { useParams } from "react-router-dom";
import AllAnimePage from "../Page/AllAnimePage"; // adjust path if needed

const SearchPage = () => {
  const { searchQuery } = useParams();

  const url = `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(searchQuery)}`;
  //https://kitsu.io/api/edge/anime?filter[text]=naruto

  const titel = `Search Results for: "${searchQuery}"`;

  return <AllAnimePage url={url} titel={titel} />;
};

export default SearchPage;
