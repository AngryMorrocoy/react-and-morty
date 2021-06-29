import "./CharacterResult.css";

const CharacterResult = ({ character }) => {
  return (
    <div className="character-result">
      <img src={character.image} alt={character.name} className="character-result__img"/>
      <p className="character-name">{character.name}</p>
    </div>
  );
};

export default CharacterResult;
