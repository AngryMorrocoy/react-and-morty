import { useQuery } from "react-query";
import CharacterCard from "./CharacterCard";
import "./Home.css";

const fetchRandomCharacters = async () => {
  let url = "https://rickandmortyapi.com/api/character/";
  for (let i = 0; i < 10; i++) {
    const randInt = Math.floor(Math.random() * 671) + 1;
    url += url.charAt(url.length - 1) === "/" ? randInt : `,${randInt}`;
  }
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const Home = () => {
  const { isLoading, data, error } = useQuery(
    "characters",
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
