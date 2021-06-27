import { useQuery } from "react-query";
import CharacterCard from "./CharacterCard";
import { fetchRandomCharacters } from "../api/rickAndMortyApi";
import "./Home.css";

const Home = () => {
  const { isLoading, data, error } = useQuery(
    "randomCharacters",
    fetchRandomCharacters
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <div className="character-cards">
        {data.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
};

export default Home;
