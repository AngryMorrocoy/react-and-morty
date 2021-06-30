import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { searchCharacters } from "../api/rickAndMortyApi";
import CharacterResult from "./CharacterResult";
import PagesNavigator from "./PagesNavigator";
import "./SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const { isLoading, data, error, refetch } = useQuery(
    "searchCharacters",
    async () => {
      const params = new URLSearchParams(location.search);
      const name = params.get("name");
      const status = params.get("status") || "any";
      const gender = params.get("gender") || "any";
      const page = params.get("page") || "1";
      return await searchCharacters({ name, status, gender, page });
    }
  );

  useEffect(() => {
    refetch();
  }, [location, refetch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (data.error) {
    return (
      <div>
        <h2>Error 404 "{new URLSearchParams(location.search).get("name")}" not found</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="container-header">
        <p className="search-results-title">
          Seach results for "{new URLSearchParams(location.search).get("name")}"
        </p>
        <PagesNavigator locationSearch={location.search} requestInfo={data.info} />
      </div>
      <div className="search-results">
        {data.results.map((character) => {
          return <CharacterResult key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
