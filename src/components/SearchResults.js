import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { searchCharacters } from "../api/rickAndMortyApi";

const SearchResults = () => {
  const location = useLocation();
  const { isLoading, data, error, refetch } = useQuery(
    "searchCharacters",
    async () => {
      const params = new URLSearchParams(location.search);
      const name = params.get("name");
      const status = params.get("status") || "any";
      console.log(params.get("status"));
      console.log(status);
      const gender = params.get("gender") || "any";
      return await searchCharacters({ name, status, gender });
    }
  );

  useEffect(() => {
    refetch();
  }, [location]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(data);

  return <div>React arrow component</div>;
};

export default SearchResults;
