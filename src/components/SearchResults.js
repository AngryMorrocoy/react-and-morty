import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

const SearchResults = () => {
  const { search } = useLocation();
  const b = new URLSearchParams(search);
  return <div>React arrow component</div>;
};

export default SearchResults;
